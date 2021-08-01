async function fetchRequest<T>(request: RequestInfo): Promise<T> {
  const response = await fetch(request);
  const data = await response.json();
  return data;
}

export async function getUserData<T>(user: string): Promise<T> {
  const userData = await fetchRequest<T>(
    `https://api.github.com/users/${user}`
  );
  return userData;
}

export async function getUserRepos<T>(user: string): Promise<T> {
  const userRepos = await fetchRequest<T>(
    `https://api.github.com/users/${user}/repos`
  );
  return userRepos;
}
