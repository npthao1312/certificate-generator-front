import React, { useState } from 'react';
import axios from 'axios';
//import fileDownload from 'js-file-download';
import './download.css';

const Downloader = ({data,turnOff}) => {
    //set state
    const [percentage, setPercentage] = useState(0);
    const [progress, setProgress] = useState(null);

    const download = () => {
        const style = document.documentElement.style;
        let progress = 0;

        setProgress('in-progress');
        console.log(data);
        // axios to get meta-data
        axios.post('http://localhost:5000/create', data, {
            onDownloadProgress: function(progressEvent) {
                progress = Math.round((progressEvent.loaded / progressEvent.total) * 100);

                setPercentage(progress);

                style.setProperty('--progress', `${progress}%`);
            }
        }).then(response => {
            setProgress('finished');
            
            const url = window.URL.createObjectURL(
                new Blob([response.data], {
                    type: response.headers["content-type"],
                })
            )

            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", 'filename.zip');
            document.body.appendChild(link);
            link.click();

            setTimeout(() => {
                turnOff();
            }, 2000);
        });
        // axios({
        //     url: 'https://shecodes-certificate-generator.herokuapp.com/create',
        //     method: 'POST',
        //     responseType: 'blob',
        //     data: data,

        //     onDownloadProgress(progressEvent) {

        //         progress = Math.round((progressEvent.loaded / progressEvent.total) * 100);

        //         setPercentage(progress);

        //         style.setProperty('--progress', `${progress}%`);
        //     }
        // }).then(response => {
        //     setProgress('finished');
            
        //     const url = window.URL.createObjectURL(
        //         new Blob([response.data], {
        //             type: response.headers["content-type"],
        //         })
        //     )

        //     const link = document.createElement("a");
        //     link.href = url;
        //     link.setAttribute("download", 'filename.zip');
        //     document.body.appendChild(link);
        //     link.click();

        //     setTimeout(() => {
        //         turnOff();
        //     }, 2000);
        // });

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
