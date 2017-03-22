import React, { Component } from 'react';

export default class Projects extends Component {
  render(){
    return (
      <div id='projectsWrapper' className='wrapper hiddenWrapper'>
        <div id='projectsContent' className='content'>
          <div className='projectsContainer'>
            <img src="public/images/saturn2.png" />
            <div className='iconRow'>
              <div className='miniIcons'>
                <a href="https://github.com/mithunder916/saturn">
                  <img src="public/images/github.png" />
                </a>
                <a href="https://saturn-synth.com">
                  <img src="public/images/screen.png" />
                </a>
              </div>
            </div>
            <p className='title'>Saturn</p>
            <p className='description'>An '80s-themed, in-browser music production suite, consisting of a drum sequencer, customizable synth with MIDI functionality, and recording/exporting .wav files of loops.</p>
            <p className='tools'>Built with: React, Redux, Tone.js, Firebase</p>
          </div>
          <div className='projectsContainer'>
            <img src="public/images/88keys2.png" />
            <div className='iconRow'>
              <div className='miniIcons'>
                <a href="https://github.com/jpfiorilla/MusoLingo">
                  <img src="public/images/github.png" />
                </a>
                <a href="https://eighty-eight-keys.herokuapp.com">
                  <img src="public/images/screen.png" />
                </a>
                <a href="https://youtu.be/3FlpPu1twQE">
                  <img src="public/images/video2.png" />
                </a>
              </div>
            </div>
            <p className='title'>88 Keys</p>
            <p className='description'>A gamified music education app aimed at beginners, teaching them piano-playing skills, music theory, and staff notation. Players collect 88 'keys' for completing interactive lecture slides, quizzes, and challenges. Features MIDI support for rhythm-based games.</p>
            <p className='tools'>Built with: React, Redux, Web Audio, teamwork :)</p>
          </div>
          <div className='projectsContainer'>
            <img src="public/images/loopseq.png" />
            <div className='iconRow'>
              <div className='miniIcons'>
                <a href="https://github.com/mithunder916/browser_DAW">
                  <img src="public/images/github.png" />
                </a>
                <a href="https://browser-daw.herokuapp.com">
                  <img src="public/images/screen.png" />
                </a>
                <a href="https://youtu.be/TQIneYEEW_g">
                  <img src="public/images/video2.png" />
                </a>
              </div>
            </div>
            <p className='title'>Loop Sequencer</p>
            <p className='description'>A set of drum, synth, and bass sequencers designed for creating short musical loops.</p>
            <p className='tools'>Built with: Tone.js, jQuery, Nexus UI, Node</p>
          </div>
          <div className='projectsContainer'>
            <img src="public/images/too_many_tabs.png" />
            <div className='iconRow'>
              <div className='miniIcons'>
                <a href="https://github.com/pseuyi/too_many_tabs_keys">
                  <img src="public/images/github.png" />
                </a>
                <a href="https://browser-daw.herokuapp.com">
                  <img src="public/images/screen.png" />
                </a>
              </div>
            </div>
            <p className='title'>Tab Keys</p>
            <p className='description'>A Chrome extension for tab management. When the user makes a tab over the recommended limit, a warning sound will play. The sounds grow more distorted as the tab total increases.</p>
            <p className='tools'>Built with: Tone.js</p>
          </div>
          <div className='projectsContainer'>
            <img src="public/images/webaudio.png" />
            <div className='iconRow'>
              <div className='miniIcons'>
                <a href="https://github.com/mithunder916/web_audio_api_techtalk">
                  <img src="public/images/github.png" />
                </a>
                <a href="https://youtu.be/p0Fv9CX1FGc">
                  <img src="public/images/video2.png" />
                </a>
              </div>
            </div>
            <p className='title'>Tech Talk: Web Audio API</p>
            <p className='description'>A short tech talk introducing Javascript's Web Audio API, focusing on its sound synthesis and visualization features.</p>
          </div>
        </div>
      </div>
    )
  }
}
