import express from "express";

const app = express();
const PORT = process.env.PORT || 4000;
app.use(express.json());

const user = {
  login: "mnraza-dev",
  id: 24278610,
  node_id: "MDQ6VXNlcjI0Mjc4NjEw",
  avatar_url: "https://avatars.githubusercontent.com/u/24278610?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/mnraza-dev",
  html_url: "https://github.com/mnraza-dev",
  followers_url: "https://api.github.com/users/mnraza-dev/followers",
  following_url:
    "https://api.github.com/users/mnraza-dev/following{/other_user}",
  gists_url: "https://api.github.com/users/mnraza-dev/gists{/gist_id}",
  starred_url: "https://api.github.com/users/mnraza-dev/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/mnraza-dev/subscriptions",
  organizations_url: "https://api.github.com/users/mnraza-dev/orgs",
  repos_url: "https://api.github.com/users/mnraza-dev/repos",
  events_url: "https://api.github.com/users/mnraza-dev/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/mnraza-dev/received_events",
  type: "User",
  user_view_type: "public",
  site_admin: false,
  name: "Md Noorullah Raza",
  company: null,
  blog: "https://mnraza.vercel.app/",
  location: "India",
  email: null,
  hireable: true,
  bio: "👨‍💻 Frontend Developer | Skilled in TypeScript, JavaScript, ReactJS, Redux & CSS Frameworks📍 Based in India | Always learning, always building",
  twitter_username: "mnraza1907",
  public_repos: 131,
  public_gists: 1,
  followers: 8,
  following: 19,
  created_at: "2016-11-30T19:14:33Z",
  updated_at: "2025-06-16T20:01:14Z",
};

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/user", (req, res) => {
  res.json({
    message: "User fetched successfully",
    name: user.name,
    bio: user.bio,
    avatar_url: user.avatar_url,
    followers: user.followers,
    following: user.following,
    public_repos: user.public_repos,
    public_gists: user.public_gists,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
