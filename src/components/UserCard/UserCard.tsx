import { UserStat } from "components/UserStat";
import styles from "./UserCard.module.scss";

import { LocalGithubUser } from "types";
import { UserTitle } from "components/UserTitle";
import { UserInfo } from "components/UserInfo";

interface UserCardProps extends LocalGithubUser {}

export const UserCard = (props: UserCardProps) => (
  <div className={styles.userCard}>
    <img src={props.avatar} alt={props.login} className={styles.avatar} />
    <UserTitle created={props.created} name={props.name} login={props.login} />

    <p className={`${styles.bio} ${props.bio ? "" : styles.empty}`}>
      {props.bio || "No bio provided"}
    </p>

    <UserStat
      repos={props.repos}
      followers={props.followers}
      following={props.following}
    />

    <UserInfo
      blog={props.blog}
      location={props.location}
      company={props.company}
      twitter={props.twitter}
    />
  </div>
);
