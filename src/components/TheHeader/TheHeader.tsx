import styles from "./TheHeader.module.scss";
import { ThemeSwitcher } from "components/ThemeSwitcher";

export const TheHeader = () => (
  <header className={styles.header} data-testid="TheHeader">
    <div className={styles.logo}>devfinder</div>
    <ThemeSwitcher />
  </header>
);
