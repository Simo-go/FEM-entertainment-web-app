import styles from "./BookmarkedBox.module.css";

function BookmarkedBox({ children, className }) {
  return <section className={className}>{children}</section>;
}

export default BookmarkedBox;
