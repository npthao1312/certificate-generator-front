import React, { useState } from 'react';
import axios from 'axios';
//import fileDownload from 'js-file-download';
import './download.css';

const Downloader = (props) => {
    //set state
    const [percentage, setPercentage] = useState(0);
    const [progress, setProgress] = useState(null);

    const download = () => {
        const style = document.documentElement.style;
        let progress = 0;

        setProgress('in-progress');

        //axios to get meta-data
        axios({
            url: 'http://127.0.0.1:5000/create',
            method: 'POST',
            onDownloadProgress(progressEvent) {

                progress = Math.round((progressEvent.loaded / progressEvent.total) * 100);

                setPercentage(progress);

                style.setProperty('--progress', `${progress}%`);
            }
        }).then(response => {
            setProgress('finished');
            setTimeout(() => {
                props.turnOff();
            }, 2000);
        });
    };


    return (
        <div className={`progress-button ${progress}`}>
            <span className="loading-text">Loading </span>
            <button className="btn" onClick={download} >
                <span className="button-text" >{progress === 'finished' ? 'Done' : 'Download'}</span>
            </button>
            <span className="percentage" >{percentage}%</span>
        </div>
    )
}
export default Downloader;
