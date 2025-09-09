import styles from "./page.module.css";
import LoginForm from "../../components/LoginForm/LoginForm";
const Login = () => {
  return (
    <div className={styles.loginContainer}>
      <LoginForm />
    </div>
  );
};

export default Login;
