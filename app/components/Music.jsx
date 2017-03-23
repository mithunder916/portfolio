import React, { Component } from 'react';

export default class Music extends Component {
  render(){
    return (
      <div id='musicWrapper' className='wrapper hiddenWrapper'>
        <div id='musicContent' className='content'>
          <p>In addition to writing software, my main hobby is playing, writing, and producing music. Here's some of my work.</p>
          <div id='musicRows'>
            <div className='musicRow'>
              <a href="https://soundcloud.com/thesealab">
                <img className='icon soundcloud' src="public/images/soundcloud.png" />
              </a>
              <iframe className='musicPlayer' src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/6157478&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>
            </div>
            <div className='musicRow'>
              <a href="https://sealab.bandcamp.com/">
                <img className='icon bandcamp' src="public/images/bandcamp.png" />
              </a>
              <iframe className='musicPlayer' src="https://bandcamp.com/EmbeddedPlayer/album=611526201/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/artwork=small/transparent=true/" seamless><a href="http://sealab.bandcamp.com/album/ii">II by Sealab</a></iframe>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
