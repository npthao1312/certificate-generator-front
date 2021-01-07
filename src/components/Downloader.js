import React, { useEffect, useState } from 'react';
import axios from 'axios';
import fileDownload from 'js-file-download';


const Downloader = async (url) => {
    //create progress bar
    // const [downloadInfo, setDownloadInfo] = useState({
    //     progress: 0,
    //     completed: false,
    //     total: 0,
    //     loaded: 0,
    // });

    // useEffect(() => {
        
    //     const option = {
    //         onDownloadProgress: (progressEvent) => {
    //             const { loaded, total } = progressEvent;

    //             setDownloadInfo({
    //                 progress: Math.floor((loaded * 100) / total),
    //                 loaded,
    //                 total,
    //                 completed: false,
    //             });
    //         },
    //     };

    // const filePromise = await axios.post(url, {
    //     responseType: 'blob',
    //     ...option,
    // });
    // fileDownload(filePromise.data, 'test');

    

    //set completed== true

    //}, [])

    const filePromise = await axios.post(url,{
        responseType: 'blob',

    });
    fileDownload(filePromise.data, 'test');
    // return (
    //     <>
    //     </>
    // )
}

export default Downloader;