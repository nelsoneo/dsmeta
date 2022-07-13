import iconNotification from '../../assets/img/nitification-icon.svg';
import './index.css';
function NotificationButton() {
  return (
    <div className="dsmeta-red-btn">
        <img src={iconNotification} alt="Notification" />
    </div>
  )
}

export default NotificationButton;
