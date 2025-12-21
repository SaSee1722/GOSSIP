"use client";


import { useEffect, useState, useRef } from "react";
import { User, AtSign, Calendar, Phone, Info, Bell, Languages, Ban, LogOut, Camera, X, Check, Loader2, ChevronRight, Globe, Accessibility } from "lucide-react";
import { GradientText } from "@/components/ui/gradient-text";
import { Avatar } from "@/components/ui/avatar";
import { useAuth } from "@/contexts/auth-context";
import { ProfileService, Profile, UpdateProfileData } from "@/services/profile-service";
import { cn } from "@/lib/utils";
import { useToast } from "@/contexts/toast-context";

export default function ProfilePage() {
    const { user, logout } = useAuth();
    const { addToast } = useToast();
    const [profile, setProfile] = useState<Profile | null>(null);
    const [isEditing, setIsEditing] = useState(false);
    const [loading, setLoading] = useState(true);
    const [updating, setUpdating] = useState(false);
    const [showBlocked, setShowBlocked] = useState(false);
    const [formData, setFormData] = useState<UpdateProfileData>({});
    const fileInputRef = useRef<HTMLInputElement>(null);

    const currentGender = isEditing ? formData.gender : profile?.gender;

    const getGenderColor = (g?: string) => {
        switch (g) {
            case 'Male': return '#00BFFF';
            case 'Female': return '#FFB6C1';
            case 'Other': return '#FFD700';
            default: return undefined;
        }
    };

    const genderColor = getGenderColor(currentGender);

    useEffect(() => {
        if (user) {
            fetchProfile();
        }
    }, [user]);

    const fetchProfile = async () => {
        if (!user) return;
        setLoading(true);
        const { data, error } = await ProfileService.getProfile(user.id);
        if (data) {
            setProfile(data);
            setFormData({
                full_name: data.full_name,
                username: data.username,
                age: data.age,
                phone: data.phone,
                bio: data.bio,
                gender: data.gender,
            });
        }
        setLoading(false);
    };

    const handleUpdate = async () => {
        if (!user) return;
        setUpdating(true);
        const { error } = await ProfileService.updateProfile(user.id, formData);
        if (!error) {
            await fetchProfile();
            setIsEditing(false);
            addToast("Profile updated successfully", "success");
        } else {
            addToast(error, "error");
        }
        setUpdating(false);
    };

    const handleAvatarUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file || !user) return;

        setUpdating(true);
        const { data: url, error } = await ProfileService.uploadAvatar(user.id, file);
        if (url) {
            const { error: updateError } = await ProfileService.updateProfile(user.id, { avatar_url: url });
            if (!updateError) {
                await fetchProfile();
                addToast("Avatar updated successfully", "success");
            }
        } else if (error) {
            addToast(error, "error");
        }
        setUpdating(false);
    };

    if (loading) {
        return (
            <div className="flex-1 flex items-center justify-center bg-black">
                <Loader2 className="w-10 h-10 text-primary animate-spin" />
            </div>
        );
    }

    return (
        <div className="flex-1 flex flex-col bg-black h-full overflow-hidden relative">
            {/* Dynamic Gender Background */}
            {genderColor && (
                <div
                    className="absolute inset-0 pointer-events-none opacity-10 transition-colors duration-500"
                    style={{ background: `radial-gradient(circle at top center, ${genderColor}, transparent 70%)` }}
                />
            )}
            <div className="flex-1 overflow-y-auto custom-scrollbar relative z-10">
                {/* Header Section */}
                <div className="pt-8 pb-8 flex flex-col items-center relative z-10">
                    <div className="relative w-[140px] h-[140px] flex items-center justify-center">
                        <div className={cn("absolute inset-0 rounded-full opacity-60 bg-gradient-to-br",
                            currentGender === 'Male' ? 'from-[#00BFFF] to-transparent' :
                                currentGender === 'Female' ? 'from-[#FFB6C1] to-transparent' :
                                    currentGender === 'Other' ? 'from-[#FFD700] to-transparent' :
                                        'from-white/20 to-transparent'
                        )} />
                        <div className="p-1 bg-black rounded-full relative">
                            <Avatar
                                src={profile?.avatar_url}
                                fallback={profile?.username?.[0] || "?"}
                                className="w-[120px] h-[120px] rounded-full border-0"
                            />
                            <button
                                onClick={() => fileInputRef.current?.click()}
                                className="absolute bottom-0 right-2 w-9 h-9 bg-black rounded-full flex items-center justify-center border-[4px] border-black hover:scale-110 transition-transform"
                            >
                                <div className="w-full h-full rounded-full flex items-center justify-center" style={{ backgroundColor: genderColor || '#00BFFF' }}>
                                    <Camera className="w-4 h-4 text-white" />
                                </div>
                            </button>
                        </div>
                        <input
                            ref={fileInputRef}
                            type="file"
                            className="hidden"
                            accept="image/*"
                            onChange={handleAvatarUpload}
                        />
                    </div>

                    <div className="mt-5 text-center">
                        <GradientText
                            text={profile?.full_name || profile?.username || 'User'}
                            className="text-[34px] font-bold tracking-[0.5px]"
                        />
                        <p className="text-[14px] text-white/60 mt-2 font-medium">{user?.email}</p>
                    </div>
                </div>

                {/* Content Section */}
                <div className="px-5 space-y-8 pb-32">
                    {/* Personal Info */}
                    <div className="mb-[30px]">
                        <div className="flex items-center justify-between mb-[15px] px-1">
                            <div className="flex items-center gap-2.5">
                                <GradientText text="PERSONAL INFO" className="text-[15px] font-[800] tracking-[1.5px]" />
                                <img
                                    src="/images/profile_doodle.png"
                                    alt=""
                                    className="w-[45px] h-[45px] object-contain opacity-80"
                                />
                            </div>
                            {!isEditing && (
                                <button
                                    onClick={() => setIsEditing(true)}
                                    className="px-3 py-1.5 rounded-[20px] border transition-colors bg-white/5 border-white/10"
                                    style={{
                                        backgroundColor: genderColor ? `${genderColor}1A` : 'rgba(0,191,255,0.1)',
                                        borderColor: genderColor ? `${genderColor}33` : 'rgba(0,191,255,0.2)'
                                    }}
                                >
                                    <span className="font-bold text-[13px]" style={{ color: genderColor || '#00BFFF' }}>Edit</span>
                                </button>
                            )}
                        </div>

                        <div className="rounded-[30px] p-[25px] flex flex-col gap-[15px] bg-[rgba(30,30,30,0.4)] border border-[rgba(255,255,255,0.08)] backdrop-blur-md">
                            {isEditing ? (
                                <div className="p-6 space-y-6">
                                    <div className="space-y-4">
                                        <div className="space-y-1.5">
                                            <label className="text-[10px] font-black text-white/20 uppercase tracking-widest ml-4">Full Name</label>
                                            <input
                                                value={formData.full_name}
                                                onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                                                placeholder="Full Name"
                                                className="w-full bg-white/5 border border-white/5 rounded-2xl p-4 text-white font-bold outline-none focus:border-primary/50"
                                            />
                                        </div>
                                        <div className="space-y-1.5">
                                            <label className="text-[10px] font-black text-white/20 uppercase tracking-widest ml-4">Username</label>
                                            <input
                                                value={formData.username}
                                                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                                                placeholder="Username"
                                                className="w-full bg-white/5 border border-white/5 rounded-2xl p-4 text-white font-bold outline-none focus:border-primary/50"
                                            />
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-1.5">
                                                <label className="text-[10px] font-black text-white/20 uppercase tracking-widest ml-4">Age</label>
                                                <input
                                                    type="number"
                                                    value={formData.age || ''}
                                                    onChange={(e) => setFormData({ ...formData, age: parseInt(e.target.value) })}
                                                    placeholder="Age"
                                                    className="w-full bg-white/5 border border-white/5 rounded-2xl p-4 text-white font-bold outline-none focus:border-primary/50"
                                                />
                                            </div>
                                            <div className="space-y-1.5">
                                                <label className="text-[10px] font-black text-white/20 uppercase tracking-widest ml-4">Phone</label>
                                                <input
                                                    value={formData.phone || ''}
                                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                    placeholder="Phone"
                                                    className="w-full bg-white/5 border border-white/5 rounded-2xl p-4 text-white font-bold outline-none focus:border-primary/50"
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-1.5">
                                            <label className="text-[10px] font-black text-white/20 uppercase tracking-widest ml-4">Bio</label>
                                            <textarea
                                                value={formData.bio || ''}
                                                onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                                                placeholder="Bio"
                                                className="w-full bg-white/5 border border-white/5 rounded-2xl p-4 text-white font-bold outline-none focus:border-primary/50 resize-none h-24"
                                            />
                                        </div>
                                        <div className="space-y-1.5">
                                            <label className="text-[10px] font-black text-white/20 uppercase tracking-widest ml-4">Gender</label>
                                            <div className="grid grid-cols-3 gap-3">
                                                {['Male', 'Female', 'Other'].map((g) => (
                                                    <button
                                                        key={g}
                                                        onClick={() => setFormData({ ...formData, gender: g })}
                                                        className={cn(
                                                            "py-3 rounded-2xl font-bold transition-all border",
                                                            formData.gender === g
                                                                ? "bg-primary text-black border-primary shadow-lg shadow-primary/20"
                                                                : "bg-white/5 text-white/40 border-transparent hover:border-white/10"
                                                        )}
                                                    >
                                                        {g}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 pt-4">
                                        <button
                                            onClick={() => setIsEditing(false)}
                                            className="flex-1 py-4 text-white/40 font-black uppercase tracking-widest text-[12px]"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            onClick={handleUpdate}
                                            disabled={updating}
                                            className="flex-3 py-4 bg-primary text-black font-black uppercase tracking-widest text-[12px] rounded-2xl shadow-xl shadow-primary/20 flex items-center justify-center gap-2"
                                        >
                                            {updating ? <Loader2 className="w-4 h-4 animate-spin" /> : "Save Changes"}
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <div className="flex flex-col gap-5">
                                    <InfoItem icon={User} label="Full Name" value={profile?.full_name} color={genderColor || "#00BFFF"} />
                                    <InfoItem icon={AtSign} label="Username" value={profile?.username} color={genderColor || "#00BFFF"} />
                                    <InfoItem icon={Calendar} label="Age" value={profile?.age?.toString()} color={genderColor || "#00BFFF"} />
                                    <InfoItem icon={Phone} label="Phone" value={profile?.phone} color={genderColor || "#00BFFF"} />
                                    <InfoItem icon={Accessibility} label="Gender" value={profile?.gender} color={genderColor || "#00BFFF"} />
                                    <InfoItem icon={Info} label="Bio" value={profile?.bio || "New to GOSSIP!"} color={genderColor || "#00BFFF"} />
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Settings Section */}
                    <div className="mb-[30px]">
                        <GradientText text="SETTINGS" className="text-[15px] font-[800] tracking-[1.5px] mb-[15px]" />
                        <div className="rounded-[30px] p-[25px] flex flex-col gap-[15px] bg-[rgba(30,30,30,0.4)] border border-[rgba(255,255,255,0.08)] backdrop-blur-md">
                            <SettingItem
                                icon={Bell}
                                label="Notifications"
                                value={
                                    <div className={cn("w-[50px] h-[30px] rounded-full p-1 cursor-pointer transition-colors", true ? "bg-[#00BFFF]" : "bg-[#333]")}>
                                        <div className="w-[22px] h-[22px] bg-white rounded-full shadow-sm translate-x-[20px]" />
                                    </div>
                                }
                            />
                            <SettingItem
                                icon={Globe}
                                label="Language"
                                value={
                                    <div className="flex items-center gap-1.5 cursor-pointer">
                                        <span className="text-[#FFB6C1] font-bold">English</span>
                                        <ChevronRight className="w-4 h-4 text-[#666]" />
                                    </div>
                                }
                            />
                            <div onClick={() => setShowBlocked(true)} className="cursor-pointer">
                                <SettingItem
                                    icon={Ban}
                                    label="Blocked Users"
                                    value={<ChevronRight className="w-4 h-4 text-[#666]" />}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Logout Button */}
                    <button
                        onClick={logout}
                        className="mx-5 mb-5 flex items-center justify-center gap-2.5 p-[18px] bg-[rgba(255,182,193,0.05)] rounded-[25px] group hover:bg-[rgba(255,182,193,0.1)] transition-colors"
                    >
                        <LogOut className="w-5 h-5 text-[#FFB6C1]" />
                        <span className="text-[#FFB6C1] text-[16px] font-[800]">Logout</span>
                    </button>

                    <p className="text-center text-[10px] font-black text-white/20 uppercase tracking-widest pb-12">
                        GOSSIP v1.2.0 • English
                    </p>
                </div>
            </div>

            {/* Blocked Users Modal */}
            {showBlocked && (
                <div className="fixed inset-0 z-[100] flex items-end justify-center bg-[rgba(0,0,0,0.85)] p-[25px] backdrop-blur-sm sm:items-center">
                    <div
                        className="w-full max-w-md bg-[rgba(30,30,30,0.95)] h-[80%] rounded-[35px] border border-[rgba(255,255,255,0.1)] p-[30px] flex flex-col backdrop-blur-xl animate-in slide-in-from-bottom duration-300"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex items-center justify-between mb-[25px]">
                            <GradientText text="Blocked Users" className="text-[24px] font-[800]" />
                            <button onClick={() => setShowBlocked(false)}>
                                <X className="w-8 h-8 text-[#444]" />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="flex-1 flex flex-col items-center justify-center pb-12">
                            <div className="w-[90px] h-[90px] rounded-[30px] bg-[#111] flex items-center justify-center mb-5">
                                <Ban className="w-[40px] h-[40px] text-[#333]" />
                            </div>
                            <p className="text-[#666] text-[16px]">No one is blocked.</p>
                        </div>

                        <button onClick={() => setShowBlocked(false)} className="self-center mt-4">
                            <span className="text-[#FFB6C1] font-bold text-[16px]">Close</span>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

function InfoItem({ icon: Icon, label, value, color }: { icon: any, label: string, value?: string, color: string }) {
    return (
        <div className="flex items-center gap-4">
            <div
                className="w-[42px] h-[42px] rounded-[14px] flex items-center justify-center"
                style={{ backgroundColor: `${color}1A` }}
            >
                <Icon className="w-5 h-5" style={{ color }} />
            </div>
            <div className="flex-1">
                <p className="text-[11px] text-[#888] font-bold uppercase mb-0.5">{label}</p>
                <p className="text-[17px] text-white font-medium">{value || 'Not set'}</p>
            </div>
        </div>
    );
}

function SettingItem({ icon: Icon, label, value }: { icon: any, label: string, value: React.ReactNode }) {
    return (
        <div className="flex items-center justify-between py-2">
            <div className="flex items-center gap-[15px]">
                <div className="w-[36px] h-[36px] rounded-[10px] bg-[rgba(255,255,255,0.05)] flex items-center justify-center">
                    <Icon className="w-[18px] h-[18px] text-[#CCC]" />
                </div>
                <span className="text-[16px] text-[#EEE] font-medium">{label}</span>
            </div>
            {value}
        </div>
    );
}
