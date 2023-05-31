import { Avatar, Button } from '@material-ui/core'
import React from 'react'
import './VideoFooter.css'
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import Ticker from 'react-ticker';
import GradeIcon from '@material-ui/icons/Grade';
import ModeCommentIcon from '@material-ui/icons/ModeComment';
import SendIcon from '@material-ui/icons/Send';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';


const VideoFooter = ({channel,avatarSrc,song,shares,likes}) => {
    return (
        <>
            <div className='videoFooter'>
                <div className="videofooter__text">
                    <Avatar src={avatarSrc} />
                    <h4>{channel} •<Button>Follow</Button></h4>
                </div>

                <div className='videoFooter__ticker'>
                <MusicNoteIcon
                    className='videoFooter__icon'
                />
                <Ticker mode='smooth'>
                    {({index}) => (
                        <>
                            <h4>{song}</h4>
                        </>
                    )}
                </Ticker>   
                </div>

                <div className='videoFooter__actions'>
                    <div className='videoFooter__actionsLeft'>
                        {/* <GradeIcon/> */}
                        {/* <ModeCommentIcon/> */}
                        <SendIcon/>
                        <MoreHorizIcon/>
                    </div>

                    <div className='videoFooter__actionsRight'>
                        <div className='videoFooter__stat'>
                            <GradeIcon/>
                            <p>{likes}</p>
                        </div>
                        <div className='videoFooter__stat'>
                            <ModeCommentIcon/>
                        <p>{shares}</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default VideoFooter
