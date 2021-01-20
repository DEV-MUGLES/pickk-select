import Notification from 'rc-notification';
import { NotificationInstance } from 'rc-notification/lib/Notification';
import 'rc-notification/assets/index.css';

import { BookmarkSnackbar } from '@src/component/molecules';

let _notification: NotificationInstance = null;
if (process.browser) {
  Notification.newInstance(
    {
      transitionName: 'move-up',
      style: { overflow: 'hidden', zIndex: 100 },
    },
    (n) => (_notification = n)
  );
}

export const bookmark = () => {
  _notification.notice({
    content: (
      <>
        <BookmarkSnackbar />
        <style>
          {`
        .rc-notification {
          bottom: 6.4rem;
        }
      `}
        </style>
      </>
    ),
    duration: 0.000001,
  });
};

const notification = {
  bookmark,
};

export default notification;
