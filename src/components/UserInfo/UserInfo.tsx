import { LocalGithubUser } from "types";
import styles from "./UserInfo.module.scss";
import { InfoItem, InfoItemProps } from "components/InfoItem";

import { ReactComponent as CompanyIcon } from "assets/icon-company.svg";
import { ReactComponent as LocationIcon } from "assets/icon-location.svg";
import { ReactComponent as TwitterIcon } from "assets/icon-twitter.svg";
import { ReactComponent as BlogIcon } from "assets/icon-website.svg";

interface UserInfoProps
  extends Pick<LocalGithubUser, "location" | "blog" | "company" | "twitter"> {}

export const UserInfo = ({
  location,
  blog,
  company,
  twitter,
}: UserInfoProps) => {
  const items: InfoItemProps[] = [
    {
      icon: <CompanyIcon />,
      text: company,
    },
    {
      icon: <LocationIcon />,
      text: location,
    },
    {
      icon: <TwitterIcon />,
      text: twitter,
    },
    {
      icon: <BlogIcon />,
      text: blog,
      isLink: true,
    },
  ];

  return (
    <div className={styles.userInfo}>
      {items.map((item, index) => (
        <InfoItem key={index} {...item} />
      ))}
    </div>
  );
};
