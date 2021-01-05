import React, {useState, useEffect} from 'react';
import './styles.css';
import config from '../utils/urlConfig';
import axios from 'axios';
import DisplayGist from "./DisplayGist";


const GistDetails = ({match}) => {
    const {gistId} = match.params;

    const [gist, setGist] = useState({description: "", files: {}});
    const [isError, setIsError] = useState(false);

    useEffect( () => {
        const fetchData = async () => {
            setIsError(false);

            try {
                const result = await axios(config.getSingleGistUrl(gistId));
                setGist(result.data);
            } catch (error) {
                setIsError(true);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {isError && <div>Something went wrong...</div>}
            <div className="title">{gist.description}</div>
            <DisplayGist gist={gist} />
        </div>
    );
}

export default  GistDetails;