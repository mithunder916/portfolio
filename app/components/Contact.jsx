import React, { Component } from 'react';

export default class Contact extends Component {
  render(){
    return (
      <div id='contactWrapper' className='wrapper hiddenWrapper'>
        <div id='contactContent' className='content'>
          <p id='email'>Shoot me a message at: <a href='mailto:mselvaratnam@gmail.com'>mselvaratnam@gmail.com</a></p>
          <a href='/public/images/resume.pdf' download='mithunselvaratnam_resume'
          id='resumeLink'>
            <div id='resume'>Download Resume</div>
          </a>
          <div id='contactIcons'>

            <a href="https://www.linkedin.com/in/mithun-s">
              <img className='icon linkedIn' src="public/images/linkedin.png" />
            </a>
            <a href="https://stackoverflow.com/users/6334921/mithun-selvaratnam">
              <img className='icon stackOverflow' src="public/images/stacko2.png" />
            </a>
            <a href="https://www.instagram.com/mithunder">
              <img className='icon instagram' src="public/images/insta2.png" />
            </a>
            <a href="https://twitter.com/mithunder9">
              <img className='icon twitter' src="public/images/twittercopy.png" />
            </a>
          </div>
        </div>
      </div>
    )
  }
}
