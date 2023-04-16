import { Container } from "components/Container";
import { Search } from "components/Search";
import { TheHeader } from "components/TheHeader";
import { UserCard } from "components/UserCard";

import { defaultUser } from "mock";
import { useState } from "react";
import { GithubError, GithubUser, LocalGithubUser } from "types";
import { extractLocalUser } from "utils/extract-local-user";
import { isGithubUser } from "utils/typeguards";

const BASE_URL = "https://api.github.com/users/";

function App() {
  const [user, setUser] = useState<LocalGithubUser | null>(defaultUser);

  const fetchUser = async (username: string) => {
    const response = await fetch(`${BASE_URL}${username}`);
    const data = (await response.json()) as GithubUser | GithubError;

    if (isGithubUser(data)) {
      setUser(extractLocalUser(data));
    } else {
      setUser(null);
    }
  };

  return (
    <>
      <Container>
        <TheHeader />
        <Search hasError={!user} onSubmit={fetchUser} />
        {user && <UserCard {...user} />}
      </Container>
    </>
  );
}

export default App;
