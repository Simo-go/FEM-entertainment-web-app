import { useEffect, useState } from "react";
import styles from "./NoAuthPage.module.css";
import clsx from "clsx";
import { useNavigate } from "react-router";

function NoAuthPage() {
  const [timer, setTimer] = useState(5);
  const navigate = useNavigate();

  useEffect(
    function () {
      const timerId = setInterval(() => {
        if (timer === 1) navigate("/", { replace: true });
        setTimer(timer => timer - 1);
      }, 1000);

      return () => clearInterval(timerId);
    },
    [timer, navigate],
  );

  return (
    <div className={styles.container}>
      <p className={clsx("text-preset-5", styles.NoAccessDesc)}>
        You are not authorized to visit this page... Redirecting back to login page in {timer}
      </p>
    </div>
  );
}

export default NoAuthPage;
