import React from "react";
import styles from "./InfoItem.module.scss";

export interface InfoItemProps {
  icon: React.ReactNode;
  text: string;
  isLink?: boolean;
}

export const InfoItem = ({ icon, text, isLink = false }: InfoItemProps) => {
  const currentText = text || "Not Available";
  let currentLink = "";

  if (isLink) {
    currentLink = text && text.startsWith("http") ? text : `http://${text}`;
  }

  return (
    <div className={`${styles.infoItem} ${text ? "" : styles.empty}`}>
      {icon}
      {isLink && text ? (
        <a
          href={currentLink}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          {currentText}
        </a>
      ) : (
        <span>{currentText}</span>
      )}
    </div>
  );
};
