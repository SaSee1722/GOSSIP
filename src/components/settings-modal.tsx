"use client";

import { useEffect, useState, useRef } from "react";
import { createClient } from "@/lib/supabase/client";
import { X, Shield, Eye, UserX, Loader2, Unlock, Camera, Edit3, Save, Languages, Bell, LogOut, ChevronRight } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import { useToast } from "@/contexts/toast-context";
import { useAuth } from "@/contexts/auth-context";
import { ProfileService, Profile } from "@/services/profile-service";
import { GradientText } from "@/components/ui/gradient-text";

const translations: Record<string, Record<string, string>> = {
    'English': {
        profile: 'Profile',
        personalInfo: 'PERSONAL INFO',
        settings: 'SETTINGS',
        notifications: 'Notifications',
        language: 'Language',
        logout: 'Logout',
        fullName: 'Full Name',
        username: 'Username',
        age: 'Age',
        phone: 'Phone',
        bio: 'Bio',
        edit: 'Edit',
        save: 'Save Changes',
        cancel: 'Cancel',
        gender: 'Gender',
        male: 'Male',
        female: 'Female',
        other: 'Other'
    },
    'Tamil': {
        profile: 'சுயவிவரம்',
        personalInfo: 'தனிப்பட்ட தகவல்',
        settings: 'அமைப்புகள்',
        notifications: 'அறிவிப்புகள்',
        language: 'மொழி',
        logout: 'வெளியேறு',
        fullName: 'முழு பெயர்',
        username: 'பயனர்பெயர்',
        age: 'வயது',
        phone: 'தொலைபேசி',
        bio: 'சுயசரிதை',
        edit: 'தொகு',
        save: 'மாற்றங்களை சேமி',
        cancel: 'ரத்துசெய்',
        gender: 'பாலினம்',
        male: 'ஆண்',
        female: 'பெண்',
        other: 'மற்றவை'
    }
};

export function SettingsModal({ onClose, user }: { onClose: () => void; user: any }) {
    const [isEditing, setIsEditing] = useState(false);
    const [language, setLanguage] = useState('English');
    const [profile, setProfile] = useState<Profile | null>(null);
    const [blockedUsers, setBlockedUsers] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [notificationsEnabled, setNotificationsEnabled] = useState(true);
    const [activeTab, setActiveTab] = useState<'info' | 'settings' | 'blocked'>('info');

    const fileInputRef = useRef<HTMLInputElement>(null);
    const supabase = createClient();
    const { addToast } = useToast();
    const { logout } = useAuth();
    const t = translations[language];

    const [form, setForm] = useState({
        full_name: '',
        username: '',
        age: '',
        phone: '',
        bio: '',
        gender: ''
    });

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const { data: prof } = await ProfileService.getProfile(user.id);
            if (prof) {
                setProfile(prof);
                setForm({
                    full_name: prof.full_name || '',
                    username: prof.username || '',
                    age: prof.age?.toString() || '',
                    phone: prof.phone || '',
                    bio: prof.bio || '',
                    gender: prof.gender || ''
                });
            }

            const { data: blocks } = await supabase
                .from("blocked_users")
                .select(`*, blocked:profiles!blocked_id(*)`)
                .eq("blocker_id", user.id);

            if (blocks) setBlockedUsers(blocks);
            setLoading(false);
        };

        fetchData();
    }, [user.id, supabase]);

    const handleSave = async () => {
        setSaving(true);
        const { error } = await ProfileService.updateProfile(user.id, {
            ...form,
            age: parseInt(form.age) || undefined
        });

        if (!error) {
            addToast("Profile updated", "success");
            setIsEditing(false);
            setProfile(prev => prev ? { ...prev, ...form, age: parseInt(form.age) || undefined } : null);
        } else {
            addToast(error, "error");
        }
        setSaving(false);
    };

    const handleAvatarClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setSaving(true);
        const { data: url, error } = await ProfileService.uploadAvatar(user.id, file);
        if (url) {
            await ProfileService.updateProfile(user.id, { avatar_url: url });
            setProfile(prev => prev ? { ...prev, avatar_url: url } : null);
            addToast("Avatar updated", "success");
        } else if (error) {
            addToast(error, "error");
        }
        setSaving(false);
    };

    const handleUnblock = async (blockId: string) => {
        const { error } = await supabase.from("blocked_users").delete().eq("id", blockId);
        if (!error) {
            setBlockedUsers(prev => prev.filter(b => b.id !== blockId));
            addToast("User unblocked", "success");
        }
    };

    const getGlowColor = () => {
        switch (form.gender?.toLowerCase()) {
            case 'male': return 'from-[#00BFFF] to-transparent';
            case 'female': return 'from-[#FFB6C1] to-transparent';
            case 'other': return 'from-[#FFD700] to-transparent';
            default: return 'from-primary/20 to-transparent';
        }
    };

    return (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-xl flex items-center justify-center z-50 p-4">
            <div className="bg-black border border-white/10 w-full max-w-2xl rounded-[40px] shadow-2xl overflow-hidden relative flex flex-col max-h-[90vh]">
                {/* Background Decor */}
                <div className={`absolute top-0 left-0 right-0 h-64 bg-gradient-to-b ${getGlowColor()} opacity-20 pointer-events-none transition-all duration-500`} />

                {/* Header */}
                <div className="p-8 pb-4 flex items-center justify-between relative z-10">
                    <div className="flex items-center gap-3">
                        <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                            <Shield className="w-6 h-6 text-primary" />
                        </div>
                        <h2 className="text-2xl font-black text-white italic uppercase tracking-tight">
                            Identity <span className="text-primary">&</span> Settings
                        </h2>
                    </div>
                    <button onClick={onClose} className="p-3 bg-white/5 hover:bg-white/10 rounded-2xl text-white/40 hover:text-white transition-all shadow-lg">
                        <X className="w-6 h-6" />
                    </button>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto custom-scrollbar p-8 pt-0 relative z-10">
                    <div className="flex flex-col md:flex-row gap-8">
                        {/* Left Sidebar */}
                        <div className="flex flex-col gap-4 md:w-48">
                            <button
                                onClick={() => setActiveTab('info')}
                                className={`flex items-center gap-3 p-4 rounded-2xl transition-all border ${activeTab === 'info' ? 'bg-primary/10 border-primary/20 text-primary shadow-lg shadow-primary/5' : 'bg-white/5 border-white/5 text-white/40 hover:text-white hover:bg-white/10'}`}
                            >
                                <Edit3 className="w-5 h-5" />
                                <span className="font-black text-[10px] uppercase tracking-[0.2em]">Profile</span>
                            </button>
                            <button
                                onClick={() => setActiveTab('settings')}
                                className={`flex items-center gap-3 p-4 rounded-2xl transition-all border ${activeTab === 'settings' ? 'bg-primary/10 border-primary/20 text-primary shadow-lg shadow-primary/5' : 'bg-white/5 border-white/5 text-white/40 hover:text-white hover:bg-white/10'}`}
                            >
                                <Languages className="w-5 h-5" />
                                <span className="font-black text-[10px] uppercase tracking-[0.2em]">Options</span>
                            </button>
                            <button
                                onClick={() => setActiveTab('blocked')}
                                className={`flex items-center gap-3 p-4 rounded-2xl transition-all border ${activeTab === 'blocked' ? 'bg-secondary/10 border-secondary/20 text-secondary shadow-lg shadow-secondary/5' : 'bg-white/5 border-white/5 text-white/40 hover:text-white hover:bg-white/10'}`}
                            >
                                <UserX className="w-5 h-5" />
                                <span className="font-black text-[10px] uppercase tracking-[0.2em]">Ghosts</span>
                            </button>

                            <div className="mt-auto pt-8">
                                <button onClick={logout} className="w-full flex items-center justify-center gap-2 p-4 rounded-2xl bg-secondary opacity-80 hover:opacity-100 transition-all text-black font-black uppercase text-[10px] tracking-widest shadow-lg shadow-secondary/10">
                                    <LogOut className="w-4 h-4" />
                                    {t.logout}
                                </button>
                                <p className="text-center text-[9px] font-black text-white/20 mt-4 tracking-[0.3em] uppercase">GOSSIP v1.2.0 • Web</p>
                            </div>
                        </div>

                        {/* Right Content */}
                        <div className="flex-1">
                            {activeTab === 'info' && (
                                <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
                                    {/* Avatar/Header Item */}
                                    <div className="flex flex-col items-center gap-6">
                                        <div className="relative group">
                                            <div className="w-32 h-32 rounded-[40px] p-1 bg-gradient-to-br from-primary via-white/10 to-secondary shadow-2xl relative overflow-hidden">
                                                <div className={`absolute inset-0 bg-gradient-to-br ${getGlowColor()} opacity-40 blur-xl group-hover:opacity-60 transition-opacity`} />
                                                <Avatar src={profile?.avatar_url || user.user_metadata?.avatar_url} fallback={profile?.username?.[0] || "?"} className="w-full h-full rounded-[36px] relative z-10" />
                                            </div>
                                            <button
                                                onClick={handleAvatarClick}
                                                className="absolute -bottom-2 -right-2 p-3 bg-primary text-black rounded-2xl shadow-xl hover:scale-110 transition-transform z-20 border-4 border-black"
                                                disabled={saving}
                                            >
                                                <Camera className="w-4 h-4" />
                                            </button>
                                            <input type="file" ref={fileInputRef} className="hidden" onChange={handleFileChange} accept="image/*" />
                                        </div>
                                        <div className="text-center">
                                            <GradientText text={profile?.full_name || 'NEW GOSSIPER'} className="text-3xl font-black italic uppercase tracking-tighter" />
                                            <p className="text-white/30 text-[10px] font-black tracking-[0.3em] uppercase mt-1">@{profile?.username || 'unknown'}</p>
                                        </div>
                                    </div>

                                    {/* Form */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black text-white/30 uppercase tracking-widest ml-4">{t.fullName}</label>
                                            <input
                                                value={form.full_name}
                                                onChange={(e) => setForm(f => ({ ...f, full_name: e.target.value }))}
                                                className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white font-bold focus:border-primary/50 transition-all outline-none"
                                                placeholder="Enter full name"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black text-white/30 uppercase tracking-widest ml-4">{t.username}</label>
                                            <input
                                                value={form.username}
                                                onChange={(e) => setForm(f => ({ ...f, username: e.target.value }))}
                                                className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white font-bold focus:border-primary/50 transition-all outline-none"
                                                placeholder="username"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black text-white/30 uppercase tracking-widest ml-4">{t.gender}</label>
                                            <div className="grid grid-cols-3 gap-2">
                                                {['Male', 'Female', 'Other'].map(g => (
                                                    <button
                                                        key={g}
                                                        onClick={() => setForm(f => ({ ...f, gender: g }))}
                                                        className={`p-4 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all border ${form.gender === g ? 'bg-primary text-black border-primary' : 'bg-white/5 text-white/30 border-white/5 hover:border-white/10'}`}
                                                    >
                                                        {t[g.toLowerCase()]}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black text-white/30 uppercase tracking-widest ml-4">{t.age}</label>
                                            <input
                                                value={form.age}
                                                onChange={(e) => setForm(f => ({ ...f, age: e.target.value }))}
                                                className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white font-bold focus:border-primary/50 transition-all outline-none"
                                                placeholder="25"
                                                type="number"
                                            />
                                        </div>
                                        <div className="md:col-span-2 space-y-2">
                                            <label className="text-[10px] font-black text-white/30 uppercase tracking-widest ml-4">{t.bio}</label>
                                            <textarea
                                                value={form.bio}
                                                onChange={(e) => setForm(f => ({ ...f, bio: e.target.value }))}
                                                className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white font-bold focus:border-primary/50 transition-all outline-none h-24 resize-none"
                                                placeholder="Tell Your Story..."
                                            />
                                        </div>
                                    </div>

                                    <button
                                        onClick={handleSave}
                                        disabled={saving}
                                        className="w-full py-5 bg-gradient-to-r from-primary to-primary-dark text-black font-black uppercase italic tracking-[0.2em] rounded-2xl shadow-xl shadow-primary/10 hover:scale-[1.02] transition-all flex items-center justify-center gap-3 active:scale-95"
                                    >
                                        {saving ? <Loader2 className="w-5 h-5 animate-spin" /> : <Save className="w-5 h-5" />}
                                        {t.save}
                                    </button>
                                </div>
                            )}

                            {activeTab === 'settings' && (
                                <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
                                    <div className="p-6 rounded-3xl bg-white/5 border border-white/10 space-y-6">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-4">
                                                <div className="p-3 bg-primary/10 rounded-2xl">
                                                    <Bell className="w-5 h-5 text-primary" />
                                                </div>
                                                <div>
                                                    <p className="text-[11px] font-black uppercase text-white tracking-widest">{t.notifications}</p>
                                                    <p className="text-[9px] font-bold text-white/30 uppercase tracking-widest">Real-time alerts</p>
                                                </div>
                                            </div>
                                            <button
                                                onClick={() => setNotificationsEnabled(!notificationsEnabled)}
                                                className={`w-14 h-8 rounded-full relative transition-all duration-300 ${notificationsEnabled ? 'bg-primary' : 'bg-white/10'}`}
                                            >
                                                <div className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-all duration-300 ${notificationsEnabled ? 'left-7 shadow-lg shadow-black/20' : 'left-1'}`} />
                                            </button>
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-4">
                                                <div className="p-3 bg-secondary/10 rounded-2xl">
                                                    <Languages className="w-5 h-5 text-secondary" />
                                                </div>
                                                <div>
                                                    <p className="text-[11px] font-black uppercase text-white tracking-widest">{t.language}</p>
                                                    <p className="text-[9px] font-bold text-white/30 uppercase tracking-widest">Tamil & English supported</p>
                                                </div>
                                            </div>
                                            <select
                                                value={language}
                                                onChange={(e) => setLanguage(e.target.value)}
                                                className="bg-white/10 border-none rounded-xl p-3 text-[10px] font-black text-white uppercase tracking-widest outline-none cursor-pointer"
                                            >
                                                <option value="English" className="bg-black">English</option>
                                                <option value="Tamil" className="bg-black">Tamil</option>
                                            </select>
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-4">
                                                <div className="p-3 bg-white/5 rounded-2xl">
                                                    <Eye className="w-5 h-5 text-white/40" />
                                                </div>
                                                <div>
                                                    <p className="text-[11px] font-black uppercase text-white tracking-widest">Last Seen</p>
                                                    <p className="text-[9px] font-bold text-white/30 uppercase tracking-widest">Privacy control</p>
                                                </div>
                                            </div>
                                            <button className="w-14 h-8 rounded-full bg-primary relative"><div className="absolute top-1 left-7 w-6 h-6 bg-white rounded-full shadow-lg" /></button>
                                        </div>
                                    </div>

                                    <div className="p-6 rounded-3xl bg-secondary/10 border border-secondary/20 flex items-center justify-between">
                                        <div className="flex items-center gap-4">
                                            <Shield className="w-6 h-6 text-secondary" />
                                            <p className="text-[11px] font-black text-secondary uppercase tracking-widest leading-loose">End-to-End Encryption<br /><span className="text-white/40">Verified & Active</span></p>
                                        </div>
                                        <ChevronRight className="w-5 h-5 text-secondary opacity-40" />
                                    </div>
                                </div>
                            )}

                            {activeTab === 'blocked' && (
                                <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-500">
                                    <div className="p-6 rounded-3xl bg-white/5 border border-white/10">
                                        <h3 className="text-[11px] font-black text-white/40 uppercase tracking-[0.2em] mb-6">Blocked Manifest</h3>

                                        {loading ? (
                                            <div className="flex flex-col items-center justify-center p-12">
                                                <Loader2 className="w-8 h-8 animate-spin text-primary" />
                                            </div>
                                        ) : blockedUsers.length === 0 ? (
                                            <div className="flex flex-col items-center justify-center p-12 space-y-4">
                                                <div className="p-6 bg-white/5 rounded-full border border-white/10">
                                                    <UserX className="w-10 h-10 text-white/20" />
                                                </div>
                                                <p className="text-xs font-bold text-white/20 uppercase tracking-widest italic text-center">Your ghost list is empty</p>
                                            </div>
                                        ) : (
                                            <div className="space-y-3">
                                                {blockedUsers.map((block) => (
                                                    <div key={block.id} className="flex items-center justify-between bg-black/40 p-3 rounded-2xl border border-white/5 group hover:border-white/20 transition-all">
                                                        <div className="flex items-center gap-4">
                                                            <Avatar src={block.blocked?.avatar_url} fallback={block.blocked?.username?.[0] || "?"} className="w-10 h-10 rounded-xl" />
                                                            <div>
                                                                <p className="text-[13px] font-black text-white uppercase tracking-tight">{block.blocked?.username || "Unknown Entity"}</p>
                                                                <p className="text-[9px] font-bold text-white/20 uppercase tracking-[0.2em]">Restricted Access</p>
                                                            </div>
                                                        </div>
                                                        <button
                                                            onClick={() => handleUnblock(block.id)}
                                                            className="flex items-center gap-2 px-4 py-2 bg-secondary/10 hover:bg-secondary text-secondary hover:text-black rounded-xl transition-all font-black text-[9px] uppercase tracking-widest"
                                                        >
                                                            <Unlock className="w-3 h-3" />
                                                            Restore
                                                        </button>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
