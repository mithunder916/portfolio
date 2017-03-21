import React, { Component } from 'react';

export default class Music extends Component {
  render(){
    return (
      <div id='musicWrapper' className='wrapper hiddenWrapper'>
        <div id='musicContent' className='content'>
          <div className='musicRow'>
            <a href="https://soundcloud.com/thesealab">
              <img className='icon soundcloud' src="public/images/soundcloud.png" />
            </a>
            <iframe className='musicPlayer' src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/6157478&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true">
            </iframe>
          </div>
          <div className='musicRow'>
            <a href="https://sealab.bandcamp.com/">
              <img className='icon bandcamp' src="public/images/bandcamp.png" />
            </a>
            <iframe className='musicPlayer' src="https://bandcamp.com/EmbeddedPlayer/album=611526201/size=large/bgcol=333333/linkcol=e99708/artwork=small/transparent=true/" seamless>
              <a href="http://sealab.bandcamp.com/album/ii">II by Sealab</a>
            </iframe>
          </div>
        </div>
      </div>
    )
  }
}
