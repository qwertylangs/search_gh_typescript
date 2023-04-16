export type LocalGithubUser = {
  login: string;
  avatar: string;
  name: string;
  company: string;
  blog: string;
  location: string;
  bio: string;
  twitter: string;
  repos: number;
  followers: number;
  following: number;
  created: string;
};

export type GithubUser = {
  login: string;
  id: number;
  avatar_url: string;
  name: string;
  company: string;
  blog: string;
  location: string;
  bio: string;
  twitter_username: string;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
};

export type GithubError = {
  message: string;
  documentation_url: string;
};

export type GithubUserItem = {
  avatar_url: "https://avatars.githubusercontent.com/u/72032787?v=4";
  id: 72032787;
  login: "weweb-assets";
};
