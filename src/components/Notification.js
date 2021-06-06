import React, { useState, useEffect } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import notificationService from "../services/notificationService";

const Notification = () => {
  const [notificationState, setNotificationState] = useState({
    open: false,
    message: "",
  });

  useEffect(() => {
    const subscription = notificationService.events$.subscribe((notification) =>
      setNotificationState(notification)
    );

    return () => subscription.unsubscribe;
  });
  return (
    <Snackbar
      open={notificationState.open}
      autoHideDuration={3000}
      onClose={() => notificationService.close()}
      message={notificationState.message}
    />
  );
};

export default Notification;
