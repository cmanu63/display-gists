const  BASE_URL = 'https://api.github.com';

const config = {
    getUser: (username) => {
        return `${BASE_URL}/users/${username}`;
    },
    getAllGistUrl: (username) => {
        return `${BASE_URL}/users/${username}/gists`;
    },
    getSingleGistUrl: (gistId) => {
        return `${BASE_URL}/gists/${gistId}`
    }
}

export default config;