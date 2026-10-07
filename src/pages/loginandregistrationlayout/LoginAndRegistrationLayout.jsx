import { Outlet } from "react-router";
import Logo from "../../components/logo/Logo";
import styles from "./LoginAndRegistrationLayout.module.css";
import { Suspense } from "react";
import PageLoader from "../../components/loader/PageLoader";

function LoginAndRegistrationLayout() {
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <Logo className={styles.logo} />
        <Suspense fallback={<PageLoader />}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
}

export default LoginAndRegistrationLayout;
