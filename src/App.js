import React, { useEffect, useState } from 'react';
import './App.css';
import VideoCard from './VideoCard';
import db from './Firebase'

function App() {
 
  const [reel,setReel] = useState([]);

  useEffect(() => {
    db.collection('reels').onSnapshot(snapshot => {
      setReel(snapshot.docs.map((doc) => (
        doc.data()
      )))
    })
  },[]);

  return (

    <div className="app">
    <div className="app__top">
      <img
        className='app__logo'
        src='https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half-caption/public/field_blog_entry_images/2019-06/instagram-1581266_1920.jpg?itok=zDU0dCxe'
        alt='no'
      />
      <h1>Reels</h1>
    </div>
    
    <div className="app__videos">

    {reel.map(({channel,avatarSrc,song,url,likes,shares}) => (
           <VideoCard 
           channel={channel}
           avatarSrc={avatarSrc}
           song={song}
           url={url}
           likes={likes}
           shares={shares}
         />
    ))}
        
    </div>

    </div>
  );
}

export default App;
