import React, {useState, useCallback, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './styles.css';
import config from '../utils/urlConfig';
import axios from 'axios';

const SearchUser = () => {
    const [user, setUser] = useState("");
    const [data, setData] = useState({login: ""});
    const [isError, setIsError] = useState(false);
    const [url, setUrl] = useState(config.getUser(""));

    const handleChange = useCallback((e) => {
        setUser(e.target.value);
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            setIsError(false);

            try {
                const result = await axios(url);
                setData(result.data);
                sessionStorage.setItem('user', user);
            } catch (error) {
                setIsError(true);
            }
        };

        fetchData();
    }, [url]);

    const handleClick = () => {
        setUrl(config.getUser(user));
    }

    const handleFocus = () => {
        setUser("");
        setIsError(false);
    }

    const isValid = (user && user===data.login && !isError);

    return (
        <div>
            <div className="title">Search for a Github user</div>
            <form className="form">
                <input
                    type="text"
                    placeholder="Search for a user, eg. cassidoo "
                    value={user}
                    onChange={handleChange}
                    className="user-input"
                    onFocus={handleFocus}
                />
                <button type="button" className="search" onClick={handleClick}>Search</button>

            </form>
            {
                !isValid? (
                    <div className="notification">
                        User {user} was not found on Github. Please try again!
                    </div>
                ) : (
                    <Link to={`/users/${user}`}>
                        <div className="next" >
                            View gists for user {data.login} {" >"}
                        </div>
                    </Link>
                )
            }
        </div>
    );
}

export default SearchUser;