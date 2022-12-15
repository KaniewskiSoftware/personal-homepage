export const getGitHubRepos = async () => {
  const response = await fetch("https://api.github.com/users/kaniewskisoftware/repos");

  if (!response.ok) {
    throw new Error(response.statusText);
  }
  
  return await response.json();
};
