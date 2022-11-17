import { NotificationManager } from 'react-notifications';

const utils = {
    formatDescription(text){
        return text.length > 45 ? `${text.substring(0,45)} ...` : text;
    },
    createNotification({type, title, message, timing, callback}){
        switch(type) {
            case 'info':
              NotificationManager.info(message, title);
              break;
            case 'success':
              NotificationManager.success(message, title);
              break;
            case 'warning':
              NotificationManager.warning(message, title, timing || 5000);
              break;
            case 'error':
              NotificationManager.error(message, title, timing || 5000, callback);
              break;
        }
    },
}

export default utils;