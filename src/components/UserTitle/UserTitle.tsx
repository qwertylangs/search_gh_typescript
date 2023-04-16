import { LocalGithubUser } from "types";
import styles from "./UserTitle.module.scss";

interface UserTitleProps
  extends Pick<LocalGithubUser, "login" | "name" | "created"> {}

const localDate = Intl.DateTimeFormat("en-Gb", {
  year: "numeric",
  month: "short",
  day: "numeric",
});

export const UserTitle = ({ login, name, created }: UserTitleProps) => {
  const joinedDate = localDate.format(new Date(created));

  return (
    <div className={styles.userTitle}>
      <h2>{name}</h2>
      <h3>{login}</h3>
      <span>{joinedDate}</span>
    </div>
  );
};
