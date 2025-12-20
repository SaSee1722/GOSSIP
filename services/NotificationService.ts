import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native';

// Module-level variable to track active chat
let activeChatId: string | null = null;

export const setActiveChatId = (id: string | null) => {
    activeChatId = id;
};

// Configure Notification Handler
Notifications.setNotificationHandler({
    handleNotification: async (notification) => {
        const data = notification.request.content.data;
        const isCurrentChat = data?.chatId === activeChatId;

        // If user is currently in this chat, do NOT show notification
        if (isCurrentChat) {
            return {
                shouldShowAlert: false, // Suppress alert
                shouldPlaySound: false,
                shouldSetBadge: false,
                shouldShowBanner: false,
                shouldShowList: false,
            };
        }

        // Otherwise show standard notification
        return {
            shouldShowAlert: true,
            shouldPlaySound: true,
            shouldSetBadge: false,
            shouldShowBanner: true,
            shouldShowList: true,
            priority: Notifications.AndroidNotificationPriority.HIGH,
        };
    },
});

export const sendPushNotification = async (expoPushToken: string, title: string, body: string, data: any = {}) => {
    const message = {
        to: expoPushToken,
        sound: 'default',
        title: title,
        body: body,
        data: data,
        android: {
            channelId: 'default', // matches channel created in hook
        },
    };

    try {
        await fetch('https://exp.host/--/api/v2/push/send', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Accept-encoding': 'gzip, deflate',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(message),
        });
    } catch (error) {
        console.error('Error sending push notification:', error);
    }
};
