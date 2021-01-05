import React, {useState, useEffect} from 'react';
import './styles.css';

const DisplayGist = (props) => {

    const {gist} = props;
    const {files} = gist;

    const [filename, setFilename] = useState("");
    const [content, setContent] = useState("");

    useEffect(() => {
        for(let file in files) {
            setFilename(files[file].filename);
            setContent(files[file].content);
        }
    });

    return (
        <div>
            <div className="subtitle">{filename}</div>
            <div className="file-content">{content}</div>
        </div>
    );
}
 export default DisplayGist;