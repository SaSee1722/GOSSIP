import React, { useEffect, useRef } from 'react';

// Helper to safely get browser objects
const getSafe = (fn: () => any) => {
    try {
        if (typeof window === 'undefined') return undefined;
        return fn();
    } catch (e) {
        return undefined;
    }
};

const WebRTCView = ({ streamURL, style, objectFit }: any) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current && streamURL) {
            // In browser, streamURL is the actual MediaStream object
            if (typeof streamURL !== 'string') {
                videoRef.current.srcObject = streamURL;
            } else {
                videoRef.current.src = streamURL;
            }
        }
    }, [streamURL]);

    return (
        <div style={{
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            backgroundColor: '#000',
            ...style
        }}>
            <video
                ref={videoRef}
                autoPlay
                playsInline
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: objectFit || 'cover',
                }}
            />
        </div>
    );
};

// Polyfill toURL if in browser for compatibility with native-style code
if (typeof window !== 'undefined' && (window as any).MediaStream && !(window as any).MediaStream.prototype.toURL) {
    (window as any).MediaStream.prototype.toURL = function () {
        return this;
    };
}

const MockClass = class { };

export const RTCPeerConnection = getSafe(() => (window as any).RTCPeerConnection || (window as any).webkitRTCPeerConnection) || MockClass;
export const RTCIceCandidate = getSafe(() => (window as any).RTCIceCandidate) || MockClass;
export const RTCSessionDescription = getSafe(() => (window as any).RTCSessionDescription) || MockClass;
export const mediaDevices = getSafe(() => navigator.mediaDevices) || {
    getUserMedia: () => Promise.reject(new Error('WebRTC not supported on this browser'))
};
export const MediaStream = getSafe(() => (window as any).MediaStream) || MockClass;
export const RTCView = WebRTCView;
