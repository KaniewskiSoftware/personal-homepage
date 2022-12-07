export const getGitHubRepos = async () => {
    const response = await fetch("https://api.github.com/users/st4rkmano/repos");
  // const response = await fetch("/personal-homepage/fakeAPI.json");

  if (!response.ok) {
    throw new Error(response.statusText);
  }
  console.log(response);
  return await response.json();
};
