import React, { useState, useEffect } from 'react';
import './styles.css';
import config from '../utils/urlConfig';
import axios from 'axios';

import { Link } from 'react-router-dom';

const GistsList = ({match}) => {

    const {user} = match.params;

    const [gists, setGists] = useState([{description: "", id: null}]);
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect( () => {
        const fetchData = async () => {
            setIsError(false);
            setIsLoading(true);

            try {
                const result = await axios(config.getAllGistUrl(user));
                setGists(result.data);
                sessionStorage.setItem('gists',JSON.stringify(result.data));
            } catch (error) {
                setIsError(true);
            }

            setIsLoading(false);
        };

        fetchData();
    }, []);

    return (
        <div>
            <div className="title">{user}'s Gists</div>
            {isError && <div>Something went wrong ...</div>}

            {isLoading ? (
                <div>Loading ...</div>
            ) : (
                <ul className="gists-list">
                    {gists.filter(gist => gist.description).map(gist => (
                        <Link to={`/users/${user}/gists/${gist.id}`} >
                            <li key={gist.id}>
                                {gist.description}
                            </li>
                        </Link>
                    ))}
                </ul>
            )}
        </div>

    );
}

export default GistsList;