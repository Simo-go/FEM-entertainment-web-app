import styles from "./MediaBox.module.css";

function MediaBox({ children, className }) {
  return <section className={className}>{children}</section>;
}

export default MediaBox;
