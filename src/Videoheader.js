import React from 'react'
import './Videoheader.css'
import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined';
import CameraAltOutlinedIcon from '@material-ui/icons/CameraAltOutlined';

const Videoheader = () => {
    return (
        <>
        <div className='videoHeader'>
           <ArrowBackIosOutlinedIcon/>
           <h3>Reels</h3>
           <CameraAltOutlinedIcon/>
        </div>

            
        </>
    )
}

export default Videoheader
