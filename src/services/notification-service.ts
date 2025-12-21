export const sendPushNotification = async (token: string, title: string, body: string, data?: any) => {
    console.log('[NotificationService] Web Push Stub:', { token, title, body, data });
    // In a real web app, you'd use the Web Push API or a service like Firebase Cloud Messaging for Web
    return true;
};

export const registerForPushNotificationsAsync = async () => {
    console.log('[NotificationService] Register for Push Stub');
    return null;
};
