import { GithubUser, LocalGithubUser } from "types";

export const extractLocalUser = (user: GithubUser): LocalGithubUser => ({
  avatar: user.avatar_url,
  login: user.login,
  bio: user.bio,
  blog: user.blog,
  company: user.company,
  created: user.created_at,
  followers: user.followers,
  following: user.following,
  location: user.location,
  name: user.name,
  repos: user.public_repos,
  twitter: user.twitter_username,
});
