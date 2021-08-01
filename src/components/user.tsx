import { useState } from "react";
import { Form } from "./form";
import { getUserData, getUserRepos } from "../promises/userData";

interface IUser {
  avatar_url: string;
  bio: string;
  followers: string;
  following: string;
  location: string;
  name: string;
  public_gists: number;
  public_repos: number;
}

interface IRepos {
  name: string;
  description: string;
}

export function User() {
  const [isDoneFetching, setIsDoneFetching] = useState(false);
  const [user, setUser] = useState<IUser>();
  const [repos, setRepos] = useState<IRepos[]>([]);

  const fetchUser = async (userUrl: string) => {
    const userData = await getUserData<IUser>(userUrl);
    const userRepos = await getUserRepos<IRepos[]>(userUrl);

    console.log(userRepos);
    setUser(userData);
    setRepos(userRepos);
    setIsDoneFetching(true);
  };

  if (isDoneFetching) {
    return (
      <div>
        <ul>
          <img src={user?.avatar_url} alt="user"></img>
          <li>Name: {user?.name}</li>
          <li>Bio: {user?.bio}</li>
          <li>Location: {user?.location}</li>
          <li>Followers: {user?.followers}</li>
          <li>Following: {user?.following}</li>
          <li>Public Repos: {user?.public_repos}</li>
        </ul>
        <h1>Repositories</h1>
        <br />

        {repos.map((repo, index) => (
          <ul key={index}>
            <li key={index}>{repo.name}</li>
            <li>{repo.description}</li>
          </ul>
        ))}
      </div>
    );
  }

  return (
    <div>
      <Form onSubmit={fetchUser} />
    </div>
  );
}
