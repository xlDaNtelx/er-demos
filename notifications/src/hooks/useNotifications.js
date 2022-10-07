import { useEffect, useMemo, useState } from "react";

export const useNotifications = () => {
  const [isPermissionGranted, setIsPermissonGranted] = useState(false);

  useEffect(() => {
    Notification.requestPermission().then((permission) => {
      // granted
      // denied
      // default
      if (permission === "granted") {
        setIsPermissonGranted(true);
      }
    });
  }, []);

  const { sendNotification, askPermissions } = useMemo(
    () => ({
      sendNotification: (notificationData) => {
        const { title, ...options } = notificationData;
        const notification = new Notification(title, options);

        notification.addEventListener("error", () => {
          setIsPermissonGranted(false);
        });
      },
      askPermissions: () => {
        Notification.requestPermission().then((permission) => {
          if (permission === "granted") {
            setIsPermissonGranted(true);
          }
        });
      },
    }),
    []
  );

  return { isPermissionGranted, askPermissions, sendNotification };
};
