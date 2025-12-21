(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/GOSSIP/src/components/ui/gradient-text.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GradientText",
    ()=>GradientText
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
function GradientText(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11);
    if ($[0] !== "ddbf058cd65e29bfa00287e080bd48677470d7833aa75ae56c14080f1147e387") {
        for(let $i = 0; $i < 11; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "ddbf058cd65e29bfa00287e080bd48677470d7833aa75ae56c14080f1147e387";
    }
    const { text, className, colors: t1 } = t0;
    let t2;
    if ($[1] !== t1) {
        t2 = t1 === undefined ? [
            "#00BFFF",
            "#FFB6C1"
        ] : t1;
        $[1] = t1;
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    const colors = t2;
    let t3;
    if ($[3] !== className) {
        t3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-clip-text text-transparent", className);
        $[3] = className;
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    const t4 = `linear-gradient(to right, ${colors[0]}, ${colors[1]})`;
    let t5;
    if ($[5] !== t4) {
        t5 = {
            backgroundImage: t4,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
        };
        $[5] = t4;
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] !== t3 || $[8] !== t5 || $[9] !== text) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: t3,
            style: t5,
            children: text
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/components/ui/gradient-text.tsx",
            lineNumber: 56,
            columnNumber: 10
        }, this);
        $[7] = t3;
        $[8] = t5;
        $[9] = text;
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    return t6;
}
_c = GradientText;
var _c;
__turbopack_context__.k.register(_c, "GradientText");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/GOSSIP/src/app/chat/status/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StatusPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$contexts$2f$status$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/src/contexts/status-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$contexts$2f$auth$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/src/contexts/auth-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/lucide-react/dist/esm/icons/camera.js [app-client] (ecmascript) <export default as Camera>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/src/components/ui/avatar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$components$2f$ui$2f$gradient$2d$text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/src/components/ui/gradient-text.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$services$2f$status$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/src/services/status-service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$contexts$2f$toast$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/src/contexts/toast-context.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
function StatusPage() {
    _s();
    const { statuses, loading, uploadStatus: uploadStatusToDb, refreshStatuses } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$contexts$2f$status$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStatus"])();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$contexts$2f$auth$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const { addToast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$contexts$2f$toast$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const [viewingUser, setViewingUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [currentIndex, setCurrentIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    // Creation Flow States
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('grid');
    const [capturedMedia, setCapturedMedia] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [caption, setCaption] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [uploading, setUploading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Camera Refs
    const videoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const streamRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Group statuses by user
    const userStatuses = statuses.reduce((acc, status)=>{
        const userId = status.user_id;
        if (!acc[userId]) {
            acc[userId] = {
                ...status.profiles,
                items: []
            };
        }
        acc[userId].items.push(status);
        return acc;
    }, {});
    const sortedUsers = Object.values(userStatuses).map((u)=>({
            user: u,
            items: u.items
        }));
    // Cleanup URLs on unmount/change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StatusPage.useEffect": ()=>{
            return ({
                "StatusPage.useEffect": ()=>{
                    if (capturedMedia?.url) URL.revokeObjectURL(capturedMedia.url);
                    stopCamera();
                }
            })["StatusPage.useEffect"];
        }
    }["StatusPage.useEffect"], []);
    // --- Status Viewer Logic ---
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StatusPage.useEffect": ()=>{
            let timer;
            if (viewingUser) {
                setProgress(0);
                timer = setInterval({
                    "StatusPage.useEffect": ()=>{
                        setProgress({
                            "StatusPage.useEffect": (prev)=>{
                                if (prev >= 100) {
                                    if (currentIndex < viewingUser.items.length - 1) {
                                        setCurrentIndex(currentIndex + 1);
                                        return 0;
                                    } else {
                                        setViewingUser(null);
                                        return 0;
                                    }
                                }
                                return prev + 1;
                            }
                        }["StatusPage.useEffect"]);
                    }
                }["StatusPage.useEffect"], 50);
            }
            return ({
                "StatusPage.useEffect": ()=>clearInterval(timer)
            })["StatusPage.useEffect"];
        }
    }["StatusPage.useEffect"], [
        viewingUser,
        currentIndex
    ]);
    // --- Camera Logic ---
    const startCamera = async ()=>{
        try {
            setMode('camera');
            const stream = await navigator.mediaDevices.getUserMedia({
                video: {
                    facingMode: 'user'
                },
                audio: false
            });
            streamRef.current = stream;
            if (videoRef.current) {
                videoRef.current.srcObject = stream;
            }
        } catch (err) {
            console.error(err);
            addToast("Unable to access camera. Please check permissions.", "error");
            setMode('grid');
        }
    };
    const stopCamera = ()=>{
        if (streamRef.current) {
            streamRef.current.getTracks().forEach((track)=>track.stop());
            streamRef.current = null;
        }
    };
    const capturePhoto = ()=>{
        if (videoRef.current && canvasRef.current) {
            const video = videoRef.current;
            const canvas = canvasRef.current;
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            const ctx = canvas.getContext('2d');
            if (ctx) {
                // Flip horizontally for selfie mirror effect if needed, but usually raw capture is better
                // ctx.translate(canvas.width, 0);
                // ctx.scale(-1, 1);
                ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
                canvas.toBlob((blob)=>{
                    if (blob) {
                        const file = new File([
                            blob
                        ], `capture_${Date.now()}.png`, {
                            type: 'image/png'
                        });
                        const url = URL.createObjectURL(blob);
                        setCapturedMedia({
                            file,
                            url,
                            type: 'image'
                        });
                        setMode('preview');
                        stopCamera();
                    }
                }, 'image/png');
            }
        }
    };
    const handleFileSelect = async (e)=>{
        const file_0 = e.target.files?.[0];
        if (!file_0) return;
        if (file_0.size > 50 * 1024 * 1024) {
            addToast("File size too large. Max 50MB allowed.", "error");
            return;
        }
        const isVideo = file_0.type.startsWith('video/');
        if (isVideo) {
            const duration = await getVideoDuration(file_0);
            if (duration > 32) {
                addToast("Video too long. Max 30 seconds allowed.", "error");
                return;
            }
        }
        const url_0 = URL.createObjectURL(file_0);
        setCapturedMedia({
            file: file_0,
            url: url_0,
            type: isVideo ? 'video' : 'image'
        });
        setMode('preview');
        // Reset input
        e.target.value = "";
    };
    const handlePost = async ()=>{
        if (!capturedMedia || !user) return;
        setUploading(true);
        try {
            // Upload Media
            const { data: url_1, error: uploadError } = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$services$2f$status$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StatusService"].uploadMedia(capturedMedia.file);
            if (uploadError) throw new Error(uploadError);
            // Create Status Record
            if (url_1) {
                await uploadStatusToDb(url_1, caption);
                addToast("Whisper posted!", "success");
                refreshStatuses();
                handleCloseCreation();
            }
        } catch (err_0) {
            addToast(err_0.message || "Failed to post whisper", "error");
        } finally{
            setUploading(false);
        }
    };
    const handleCloseCreation = ()=>{
        setMode('grid');
        setCapturedMedia(null);
        setCaption("");
        if (streamRef.current) stopCamera();
    };
    // Helper ...
    const getVideoDuration = (file_1)=>{
        return new Promise((resolve)=>{
            try {
                const video_0 = document.createElement('video');
                video_0.preload = 'metadata';
                video_0.onloadedmetadata = ()=>{
                    resolve(video_0.duration);
                    window.URL.revokeObjectURL(video_0.src);
                };
                video_0.onerror = ()=>resolve(0);
                video_0.src = URL.createObjectURL(file_1);
            } catch  {
                resolve(0);
            }
        });
    };
    const getNameColor = (gender)=>{
        switch(gender?.toLowerCase()){
            case 'male':
                return '#00BFFF';
            case 'female':
                return '#FFB6C1';
            case 'other':
                return '#FFD700';
            default:
                return '#FFF';
        }
    };
    const isVideoUrl = (url_2)=>[
            'mp4',
            'webm',
            'mov',
            'ogg'
        ].includes(url_2.split('.').pop()?.toLowerCase() || '');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex-1 flex flex-col bg-black h-full relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[150px] pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/Desktop/GOSSIP/src/app/chat/status/page.tsx",
                lineNumber: 238,
                columnNumber: 13
            }, this),
            mode === 'grid' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "p-8 pb-4 flex items-center justify-between relative z-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$components$2f$ui$2f$gradient$2d$text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GradientText"], {
                                                    text: "Whispers",
                                                    className: "text-5xl font-black italic uppercase tracking-tighter"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/GOSSIP/src/app/chat/status/page.tsx",
                                                    lineNumber: 246,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-16 h-16 relative",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: "/gossip_illustration.png",
                                                        alt: "Whispers",
                                                        className: "w-full h-full object-contain opacity-80"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/GOSSIP/src/app/chat/status/page.tsx",
                                                        lineNumber: 248,
                                                        columnNumber: 41
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/GOSSIP/src/app/chat/status/page.tsx",
                                                    lineNumber: 247,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/GOSSIP/src/app/chat/status/page.tsx",
                                            lineNumber: 245,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-white/30 text-xs font-bold uppercase tracking-[0.2em] mt-1",
                                            children: "Disappearing stories of your circle."
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/GOSSIP/src/app/chat/status/page.tsx",
                                            lineNumber: 251,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/GOSSIP/src/app/chat/status/page.tsx",
                                    lineNumber: 244,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/GOSSIP/src/app/chat/status/page.tsx",
                                lineNumber: 243,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: startCamera,
                                        className: "p-5 bg-white/5 border border-white/10 rounded-[24px] hover:bg-white/10 transition-all text-white",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__["Camera"], {
                                            className: "w-8 h-8"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/GOSSIP/src/app/chat/status/page.tsx",
                                            lineNumber: 256,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/GOSSIP/src/app/chat/status/page.tsx",
                                        lineNumber: 255,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "file",
                                        ref: fileInputRef,
                                        className: "hidden",
                                        accept: "image/*,video/*",
                                        onChange: handleFileSelect
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/GOSSIP/src/app/chat/status/page.tsx",
                                        lineNumber: 258,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/GOSSIP/src/app/chat/status/page.tsx",
                                lineNumber: 254,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/GOSSIP/src/app/chat/status/page.tsx",
                        lineNumber: 242,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 overflow-y-auto custom-scrollbar p-8 pt-4 relative z-10",
                        children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-center h-64",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                className: "w-10 h-10 animate-spin text-secondary"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/GOSSIP/src/app/chat/status/page.tsx",
                                lineNumber: 264,
                                columnNumber: 33
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/GOSSIP/src/app/chat/status/page.tsx",
                            lineNumber: 263,
                            columnNumber: 36
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    onClick: ()=>fileInputRef.current?.click(),
                                    className: "aspect-[3/4] rounded-[40px] bg-white/5 border border-dashed border-white/20 flex flex-col items-center justify-center gap-4 hover:border-secondary transition-all cursor-pointer group active:scale-95",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-20 h-20 rounded-[30px] bg-secondary/20 flex items-center justify-center text-secondary group-hover:scale-110 transition-all",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                className: "w-10 h-10"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/GOSSIP/src/app/chat/status/page.tsx",
                                                lineNumber: 269,
                                                columnNumber: 41
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/GOSSIP/src/app/chat/status/page.tsx",
                                            lineNumber: 268,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[10px] font-black uppercase tracking-widest text-white/30 group-hover:text-secondary transition-colors",
                                            children: "Post Whisper"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/GOSSIP/src/app/chat/status/page.tsx",
                                            lineNumber: 271,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/GOSSIP/src/app/chat/status/page.tsx",
                                    lineNumber: 267,
                                    columnNumber: 33
                                }, this),
                                sortedUsers.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        onClick: ()=>{
                                            setViewingUser(item);
                                            setCurrentIndex(0);
                                            setProgress(0);
                                        },
                                        className: "aspect-[3/4] rounded-[40px] relative overflow-hidden border border-white/10 hover:border-secondary transition-all cursor-pointer group",
                                        children: [
                                            isVideoUrl(item.items[0].media_url) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                                src: item.items[0].media_url,
                                                className: "absolute inset-0 w-full h-full object-cover group-hover:scale-110 duration-700 transition-all",
                                                muted: true,
                                                loop: true
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/GOSSIP/src/app/chat/status/page.tsx",
                                                lineNumber: 280,
                                                columnNumber: 80
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: item.items[0].media_url,
                                                alt: "",
                                                className: "absolute inset-0 w-full h-full object-cover group-hover:scale-110 duration-700 transition-all"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/GOSSIP/src/app/chat/status/page.tsx",
                                                lineNumber: 280,
                                                columnNumber: 239
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/GOSSIP/src/app/chat/status/page.tsx",
                                                lineNumber: 281,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute top-6 left-6 right-6 flex gap-2",
                                                children: item.items.map((_, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "h-1 flex-1 bg-white/30 rounded-full overflow-hidden",
                                                        children: idx === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "h-full bg-secondary w-full"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/GOSSIP/src/app/chat/status/page.tsx",
                                                            lineNumber: 285,
                                                            columnNumber: 67
                                                        }, this)
                                                    }, idx, false, {
                                                        fileName: "[project]/Desktop/GOSSIP/src/app/chat/status/page.tsx",
                                                        lineNumber: 284,
                                                        columnNumber: 86
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/GOSSIP/src/app/chat/status/page.tsx",
                                                lineNumber: 283,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute bottom-6 left-6 flex items-center gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative p-1 rounded-full border-2 border-secondary bg-black ring-4 ring-black",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Avatar"], {
                                                            src: item.user.avatar_url,
                                                            fallback: item.user.username?.[0] || "?",
                                                            className: "w-10 h-10"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/GOSSIP/src/app/chat/status/page.tsx",
                                                            lineNumber: 291,
                                                            columnNumber: 49
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/GOSSIP/src/app/chat/status/page.tsx",
                                                        lineNumber: 290,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "overflow-hidden",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[14px] font-black uppercase text-white tracking-tight truncate italic",
                                                                style: {
                                                                    color: getNameColor(item.user.gender)
                                                                },
                                                                children: item.user.username
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/GOSSIP/src/app/chat/status/page.tsx",
                                                                lineNumber: 294,
                                                                columnNumber: 49
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[9px] font-bold text-white/50 uppercase tracking-widest",
                                                                children: new Date(item.items[0].created_at).toLocaleTimeString([], {
                                                                    hour: '2-digit',
                                                                    minute: '2-digit'
                                                                })
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/GOSSIP/src/app/chat/status/page.tsx",
                                                                lineNumber: 297,
                                                                columnNumber: 49
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/GOSSIP/src/app/chat/status/page.tsx",
                                                        lineNumber: 293,
                                                        columnNumber: 45
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/GOSSIP/src/app/chat/status/page.tsx",
                                                lineNumber: 289,
                                                columnNumber: 41
                                            }, this)
                                        ]
                                    }, item.user.id, true, {
                                        fileName: "[project]/Desktop/GOSSIP/src/app/chat/status/page.tsx",
                                        lineNumber: 275,
                                        columnNumber: 65
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/GOSSIP/src/app/chat/status/page.tsx",
                            lineNumber: 265,
                            columnNumber: 38
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/GOSSIP/src/app/chat/status/page.tsx",
                        lineNumber: 262,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true),
            mode === 'camera' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-50 bg-black flex flex-col",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative flex-1 bg-black overflow-hidden rounded-[40px] m-4 border border-white/10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                            ref: videoRef,
                            autoPlay: true,
                            playsInline: true,
                            className: "w-full h-full object-cover"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/GOSSIP/src/app/chat/status/page.tsx",
                            lineNumber: 311,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                            ref: canvasRef,
                            className: "hidden"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/GOSSIP/src/app/chat/status/page.tsx",
                            lineNumber: 312,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute bottom-10 left-0 right-0 flex items-center justify-center gap-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleCloseCreation,
                                    className: "w-12 h-12 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "w-6 h-6 text-white"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/GOSSIP/src/app/chat/status/page.tsx",
                                        lineNumber: 317,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/GOSSIP/src/app/chat/status/page.tsx",
                                    lineNumber: 316,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: capturePhoto,
                                    className: "w-20 h-20 rounded-full border-4 border-white flex items-center justify-center hover:scale-105 transition-transform active:scale-95 bg-white/10",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-16 h-16 bg-white rounded-full pointer-events-none"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/GOSSIP/src/app/chat/status/page.tsx",
                                        lineNumber: 321,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/GOSSIP/src/app/chat/status/page.tsx",
                                    lineNumber: 320,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-12 h-12"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/GOSSIP/src/app/chat/status/page.tsx",
                                    lineNumber: 324,
                                    columnNumber: 29
                                }, this),
                                " "
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/GOSSIP/src/app/chat/status/page.tsx",
                            lineNumber: 315,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/GOSSIP/src/app/chat/status/page.tsx",
                    lineNumber: 310,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/GOSSIP/src/app/chat/status/page.tsx",
                lineNumber: 309,
                columnNumber: 35
            }, this),
            mode === 'preview' && capturedMedia && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-50 bg-black flex flex-col animate-in zoom-in duration-300",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative flex-1 m-4 rounded-[40px] overflow-hidden border border-white/10 bg-[#111]",
                    children: [
                        capturedMedia.type === 'video' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                            src: capturedMedia.url,
                            className: "w-full h-full object-contain",
                            autoPlay: true,
                            loop: true,
                            playsInline: true
                        }, void 0, false, {
                            fileName: "[project]/Desktop/GOSSIP/src/app/chat/status/page.tsx",
                            lineNumber: 332,
                            columnNumber: 59
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: capturedMedia.url,
                            className: "w-full h-full object-contain"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/GOSSIP/src/app/chat/status/page.tsx",
                            lineNumber: 332,
                            columnNumber: 162
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleCloseCreation,
                            className: "absolute top-6 right-6 p-3 bg-black/20 hover:bg-black/40 rounded-full backdrop-blur-xl border border-white/10 text-white transition-all z-20",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "w-6 h-6"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/GOSSIP/src/app/chat/status/page.tsx",
                                lineNumber: 335,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/GOSSIP/src/app/chat/status/page.tsx",
                            lineNumber: 334,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent pt-20",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-4 items-end",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            value: caption,
                                            onChange: (e_0)=>setCaption(e_0.target.value),
                                            placeholder: "Add a caption...",
                                            autoFocus: true,
                                            className: "w-full bg-transparent text-white placeholder-white/50 text-lg font-medium outline-none border-b border-white/20 pb-2 focus:border-white transition-colors"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/GOSSIP/src/app/chat/status/page.tsx",
                                            lineNumber: 342,
                                            columnNumber: 37
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/GOSSIP/src/app/chat/status/page.tsx",
                                        lineNumber: 341,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handlePost,
                                        disabled: uploading,
                                        className: "p-4 bg-secondary text-black rounded-full font-bold hover:scale-105 active:scale-95 transition-all disabled:opacity-50 disabled:scale-100 shadow-lg shadow-secondary/20",
                                        children: uploading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                            className: "w-6 h-6 animate-spin"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/GOSSIP/src/app/chat/status/page.tsx",
                                            lineNumber: 345,
                                            columnNumber: 50
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Send, {
                                            className: "w-6 h-6"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/GOSSIP/src/app/chat/status/page.tsx",
                                            lineNumber: 345,
                                            columnNumber: 97
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/GOSSIP/src/app/chat/status/page.tsx",
                                        lineNumber: 344,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/GOSSIP/src/app/chat/status/page.tsx",
                                lineNumber: 340,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/GOSSIP/src/app/chat/status/page.tsx",
                            lineNumber: 339,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/GOSSIP/src/app/chat/status/page.tsx",
                    lineNumber: 331,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/GOSSIP/src/app/chat/status/page.tsx",
                lineNumber: 330,
                columnNumber: 53
            }, this),
            viewingUser && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black z-[100] flex items-center justify-center p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative w-full max-w-lg aspect-[9/16] rounded-[40px] overflow-hidden bg-white/5 shadow-2xl animate-in zoom-in duration-300",
                    children: [
                        isVideoUrl(viewingUser.items[currentIndex].media_url) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                            src: viewingUser.items[currentIndex].media_url,
                            className: "absolute inset-0 w-full h-full object-contain md:object-cover",
                            autoPlay: true,
                            playsInline: true,
                            onEnded: ()=>{
                                if (currentIndex < viewingUser.items.length - 1) {
                                    setCurrentIndex(currentIndex + 1);
                                    setProgress(0);
                                } else {
                                    setViewingUser(null);
                                }
                            }
                        }, void 0, false, {
                            fileName: "[project]/Desktop/GOSSIP/src/app/chat/status/page.tsx",
                            lineNumber: 355,
                            columnNumber: 82
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: viewingUser.items[currentIndex].media_url,
                            alt: "",
                            className: "absolute inset-0 w-full h-full object-contain md:object-cover"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/GOSSIP/src/app/chat/status/page.tsx",
                            lineNumber: 362,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/60 pointer-events-none"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/GOSSIP/src/app/chat/status/page.tsx",
                            lineNumber: 364,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-8 left-8 right-8 flex gap-2 z-20",
                            children: viewingUser.items.map((__0, idx_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-1 flex-1 bg-white/20 rounded-full overflow-hidden",
                                    children: [
                                        idx_0 < currentIndex && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-full bg-white w-full"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/GOSSIP/src/app/chat/status/page.tsx",
                                            lineNumber: 369,
                                            columnNumber: 62
                                        }, this),
                                        idx_0 === currentIndex && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-full bg-white transition-all duration-50",
                                            style: {
                                                width: `${progress}%`
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/GOSSIP/src/app/chat/status/page.tsx",
                                            lineNumber: 370,
                                            columnNumber: 64
                                        }, this)
                                    ]
                                }, idx_0, true, {
                                    fileName: "[project]/Desktop/GOSSIP/src/app/chat/status/page.tsx",
                                    lineNumber: 368,
                                    columnNumber: 81
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/GOSSIP/src/app/chat/status/page.tsx",
                            lineNumber: 367,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-14 left-8 right-8 flex items-center justify-between z-20",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Avatar"], {
                                            src: viewingUser.user.avatar_url,
                                            fallback: viewingUser.user.username[0],
                                            className: "w-12 h-12 ring-2 ring-white/50"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/GOSSIP/src/app/chat/status/page.tsx",
                                            lineNumber: 379,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-white font-black italic uppercase tracking-tight",
                                                    style: {
                                                        color: getNameColor(viewingUser.user.gender)
                                                    },
                                                    children: viewingUser.user.username
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/GOSSIP/src/app/chat/status/page.tsx",
                                                    lineNumber: 381,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-white/50 text-[10px] uppercase font-bold tracking-widest",
                                                    children: new Date(viewingUser.items[currentIndex].created_at).toLocaleTimeString()
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/GOSSIP/src/app/chat/status/page.tsx",
                                                    lineNumber: 384,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/GOSSIP/src/app/chat/status/page.tsx",
                                            lineNumber: 380,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/GOSSIP/src/app/chat/status/page.tsx",
                                    lineNumber: 378,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setViewingUser(null),
                                    className: "p-3 bg-black/20 hover:bg-black/40 rounded-full backdrop-blur-xl border border-white/10 text-white transition-all",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "w-6 h-6"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/GOSSIP/src/app/chat/status/page.tsx",
                                        lineNumber: 388,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/GOSSIP/src/app/chat/status/page.tsx",
                                    lineNumber: 387,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/GOSSIP/src/app/chat/status/page.tsx",
                            lineNumber: 377,
                            columnNumber: 25
                        }, this),
                        viewingUser.items[currentIndex].caption && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute bottom-16 left-8 right-8 z-20 text-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-white text-lg font-bold drop-shadow-lg",
                                children: viewingUser.items[currentIndex].caption
                            }, void 0, false, {
                                fileName: "[project]/Desktop/GOSSIP/src/app/chat/status/page.tsx",
                                lineNumber: 394,
                                columnNumber: 33
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/GOSSIP/src/app/chat/status/page.tsx",
                            lineNumber: 393,
                            columnNumber: 69
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-x-0 top-32 bottom-32 flex z-10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 hover:bg-white/5 transition-all cursor-pointer",
                                    onClick: ()=>{
                                        if (currentIndex > 0) {
                                            setCurrentIndex(currentIndex - 1);
                                            setProgress(0);
                                        }
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/GOSSIP/src/app/chat/status/page.tsx",
                                    lineNumber: 399,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 hover:bg-white/5 transition-all cursor-pointer",
                                    onClick: ()=>{
                                        if (currentIndex < viewingUser.items.length - 1) {
                                            setCurrentIndex(currentIndex + 1);
                                            setProgress(0);
                                        } else {
                                            setViewingUser(null);
                                        }
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/GOSSIP/src/app/chat/status/page.tsx",
                                    lineNumber: 405,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/GOSSIP/src/app/chat/status/page.tsx",
                            lineNumber: 398,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/GOSSIP/src/app/chat/status/page.tsx",
                    lineNumber: 354,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/GOSSIP/src/app/chat/status/page.tsx",
                lineNumber: 353,
                columnNumber: 29
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/GOSSIP/src/app/chat/status/page.tsx",
        lineNumber: 236,
        columnNumber: 10
    }, this);
}
_s(StatusPage, "V1zP2ef6YdrNLfEzgdyogeuqexw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$contexts$2f$status$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStatus"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$contexts$2f$auth$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$contexts$2f$toast$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"]
    ];
});
_c = StatusPage;
var _c;
__turbopack_context__.k.register(_c, "StatusPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/GOSSIP/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Plus
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M5 12h14",
            key: "1ays0h"
        }
    ],
    [
        "path",
        {
            d: "M12 5v14",
            key: "s699le"
        }
    ]
];
const Plus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("plus", __iconNode);
;
 //# sourceMappingURL=plus.js.map
}),
"[project]/Desktop/GOSSIP/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Plus",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript)");
}),
"[project]/Desktop/GOSSIP/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>LoaderCircle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M21 12a9 9 0 1 1-6.219-8.56",
            key: "13zald"
        }
    ]
];
const LoaderCircle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("loader-circle", __iconNode);
;
 //# sourceMappingURL=loader-circle.js.map
}),
"[project]/Desktop/GOSSIP/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Loader2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript)");
}),
"[project]/Desktop/GOSSIP/node_modules/lucide-react/dist/esm/icons/camera.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Camera
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",
            key: "18u6gg"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "13",
            r: "3",
            key: "1vg3eu"
        }
    ]
];
const Camera = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("camera", __iconNode);
;
 //# sourceMappingURL=camera.js.map
}),
"[project]/Desktop/GOSSIP/node_modules/lucide-react/dist/esm/icons/camera.js [app-client] (ecmascript) <export default as Camera>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Camera",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/lucide-react/dist/esm/icons/camera.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=Desktop_GOSSIP_0ae7e397._.js.map