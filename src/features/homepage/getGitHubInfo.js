export const getGitHubInfo = async () => {
    const response = await fetch("https://github.com/users/st4rkmano/repos");

    if(!response.ok) {
       throw new Error(response.statusText);
    }

    return await response.json();
}