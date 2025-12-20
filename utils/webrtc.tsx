import { Platform, View } from 'react-native';

let NativeWebRTC: any;
try {
    // This will only work in a custom development build, not Expo Go.
    NativeWebRTC = require('react-native-webrtc');
} catch (e) {
    // Suppress error during bundling
}

const MockClass = class { };
const MissingModuleError = (msg: string) => () => Promise.reject(new Error(msg));

const isExpoGo = Platform.OS !== 'web' && !NativeWebRTC;
const mobileErrorMessage = 'WebRTC is not available in Expo Go. To test calls on mobile, you must use a Development Build (npx expo prebuild). Alternatively, test using the Web version.';

export const RTCPeerConnection = NativeWebRTC?.RTCPeerConnection || MockClass;
export const RTCIceCandidate = NativeWebRTC?.RTCIceCandidate || MockClass;
export const RTCSessionDescription = NativeWebRTC?.RTCSessionDescription || MockClass;
export const mediaDevices = NativeWebRTC?.mediaDevices || {
    getUserMedia: MissingModuleError(mobileErrorMessage)
};
export const MediaStream = NativeWebRTC?.MediaStream || MockClass;
export const RTCView = NativeWebRTC?.RTCView || View;
