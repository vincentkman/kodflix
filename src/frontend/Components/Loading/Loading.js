import React from 'react';
import './Loading.scss';
// import '../KeyFrames.scss';
import '../../Utilities/KeyFrames.scss';

export default function Loading() {
    return (
        <div className='load-container'>
            <div className='loader'>Please Wait</div>
        </div>
    );
}