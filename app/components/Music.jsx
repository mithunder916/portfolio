import React, { Component } from 'react';

export default class Music extends Component {
  render(){
    return (
      <div id='musicWrapper' className='wrapper hiddenWrapper'>
        <div id='musicContent' className='content'>
          <a href="https://soundcloud.com/thesealab">
            <img className='icon soundcloud' src="public/images/soundcloud.png" />
          </a>
          <a href="https://sealab.bandcamp.com/">
            <img className='icon bandcamp' src="public/images/bandcamp.png" />
          </a>
        </div>
      </div>
    )
  }
}
