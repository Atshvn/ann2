/* import { NotificationManager, NotificationContainer } from 'react-notifications';

export const Notification = (type = "info", message = "") => {
  switch (type) {
    case 'info':
      NotificationManager.info(message);
      break;
    case 'success':
      NotificationManager.success(message, 'Thành công');
      break;
    case 'warning':
      NotificationManager.warning(message, 'Cảnh báo', 3000);
      break;
    case 'error':
      NotificationManager.error(message, 'Lỗi!', 5000, () => {
        alert('callback');
      });
      break;
  }
  return <NotificationContainer />
}; */


import React from "react";
import { Alert, Button } from "@material-tailwind/react";
import { ExclamationTriangleIcon,CheckCircleIcon } from "@heroicons/react/24/solid";
import { InformationCircleIcon } from "@heroicons/react/24/outline";

const createNotification = (type, message) => {
  const [open, setOpen] = React.useState(true);
  const CheckType = ()=> {
    if(type==="success") return <CheckCircleIcon className="h-6 w-6" />
    if(type==="warning") return <ExclamationTriangleIcon className="h-6 w-6" />
    if(type==="error") return <InformationCircleIcon className="h-6 w-6" />
    if(type==="info") return <InformationCircleIcon className="h-6 w-6" />
  }
  const CheckColor = ()=> {
      if(type==="success") return "green"
      if(type==="warning") return "orange"
      if(type==="error") return "red"
      if(type==="info") return "blue"
  }
  return (
    <Alert
        variant="gradient"
        color={CheckColor}
        icon={CheckType}
        open={open}
        action={
          <Button
            variant="text"
            color="white"
            size="sm"
            className="!absolute top-3 right-3"
            onClick={() => setOpen(false)}
          >
            Close
          </Button>
        }
        onClose={() => setOpen(false)}
        animate={{
          mount: { y: 0 },
          unmount: { y: 100 },
        }}
      >
        {message}
      </Alert>
  )
};

export const Notification = createNotification;