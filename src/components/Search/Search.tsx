import { useState } from "react";

import { ReactComponent as SearchIcon } from "assets/icon-search.svg";
import styles from "./Search.module.scss";
import { Button } from "components/Button";
import { AutoComplite } from "components/AutoComplite";

interface SearchProps {
  hasError: boolean;
  onSubmit: (text: string) => void;
}

// interface formFields {
//   username: HTMLInputElement;
// }

export const Search = ({ hasError, onSubmit }: SearchProps) => {
  const [text, setText] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (text.trim()) {
      onSubmit(text);
      setText("");
    }
  };

  const handleSelect = (login: string) => {
    onSubmit(login);
    setText("");
  };

  // const handleSubmit = (
  //   event: React.FormEvent<HTMLFormElement & formFields>
  // ) => {
  //   event.preventDefault();

  //   const text = event.currentTarget.username.value;

  //   if (text.trim()) {
  //     onSubmit(text);
  //     event.currentTarget.reset();
  //   }
  // };

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit} autoComplete="off">
        <div className={styles.search}>
          <label htmlFor="search" className={styles.label}>
            <SearchIcon />
          </label>

          <input
            type="text"
            name="username"
            id="search"
            className={styles.textField}
            placeholder="Search GitHub username..."
            value={text}
            onChange={(event) => setText(event.target.value)}
          />
          {hasError && <p className={styles.error}>No result</p>}

          <Button>Search</Button>
        </div>
      </form>

      {text && <AutoComplite text={text} handleSelect={handleSelect} />}
    </div>
  );
};
