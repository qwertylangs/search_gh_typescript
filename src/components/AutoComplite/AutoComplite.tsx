import { useEffect, useState } from "react";
import styles from "./AutoComplite.module.scss";
import { GithubUserItem } from "types";

const BASE_URL =
  "https://api.github.com/search/users?page=1&per_page=5&sort=updated&order=starts&q=";

const debounce = <T extends any[]>(
  cb: (...args: T) => Promise<any>,
  ms: number
) => {
  let timeoutId: ReturnType<typeof setTimeout>;

  return async (...args: T): Promise<any> => {
    clearTimeout(timeoutId);
    return new Promise((resolve) => {
      timeoutId = setTimeout(async () => {
        const result = await cb(...args);
        resolve(result);
      }, ms);
    });
  };
};

const searchUsers = debounce(async (value: string) => {
  console.log("resp");
  try {
    const response = await fetch(`${BASE_URL}${value}`);
    if (!response.ok) {
      throw new Error("Error 403 to many requests");
    }
    const { items }: { items: GithubUserItem[] } = await response.json();
    return items;
  } catch (error) {
    if (error instanceof Error) {
      alert(error.message);
    }
  }
}, 400);

interface AutoCompliteProps {
  text: string;
  handleSelect: (value: string) => void;
}

export const AutoComplite = ({ handleSelect, text }: AutoCompliteProps) => {
  const [users, setUsers] = useState<GithubUserItem[] | []>([]);

  useEffect(() => {
    if (text.trim()) {
      searchUsers(text).then((users: GithubUserItem[] | [] | undefined) => {
        setUsers(users ?? []);
      });
    } else {
      setTimeout(() => setUsers([]), 800);
    }
  }, [text]);

  useEffect(() => {
    const handleDocumentClick = (e: MouseEvent) => {
      if (!(e.target instanceof HTMLElement)) return;
      if (e.target.closest(".autoComplite")) return;
      setUsers([]);
      return;
    };
    document.addEventListener("click", handleDocumentClick);
    return () => document.removeEventListener("click", handleDocumentClick);
  });

  const isEmptyUsers = users.length ? (
    <ul className={styles.autoComplite}>
      {users.map((user) => (
        <li key={user.id} className={styles.autoComplite__item}>
          <button
            className={styles.autoComplite__btn}
            onClick={() => handleSelect(user.login)}
          >
            {user.login}
          </button>
        </li>
      ))}
    </ul>
  ) : (
    <span></span>
  );

  return <div>{isEmptyUsers}</div>;
};
