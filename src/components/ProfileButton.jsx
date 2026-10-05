import styles from "./ProfileButton.module.css";

function ProfileButton() {
  return (
    <button className={`btn ${styles["btn--profile"]}`}>
      <img src="/assets/image-avatar.png" alt="Profile image" />
    </button>
  );
}

export default ProfileButton;
