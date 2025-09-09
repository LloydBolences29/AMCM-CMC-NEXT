import styles from "./page.module.css";
import LoginForm from "../components/LoginForm/LoginForm";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.homepageContainer}>
      <div className={styles.homepageWrapper}>
        <h1 className={styles.title}>Welcome to AMCM-CMS</h1>
        <p className={styles.subtitle}>Your content management system</p>
        <div className={styles.homepageButton}>
          <Link href="/login" className={styles.loginButton}>
            <button className={styles.getStartedButton}>Get Start Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
