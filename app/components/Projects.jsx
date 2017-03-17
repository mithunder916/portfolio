import React, { Component } from 'react';

export default class Projects extends Component {
  render(){
    return (
      <div id='projectsWrapper' className='wrapper hiddenWrapper'>
        <div id='projectsContent' className='content'>
          <div className='projectsContainer'>
            <img src="public/images/saturn.png" />
            <div className='iconRow'>
              <a href="https://github.com/mithunder916">
                <img src="public/images/github.png" />
              </a>
              <a href="https://saturn-synth.herokuapp.com">
                <img src="public/images/screen.png" />
              </a>
              <a href="https://saturn-synth.herokuapp.com">
                <img src="public/images/video2.png" />
              </a>
            </div>
            <p className='title'>Saturn</p>
            <p className='description'>An '80s-themed, in-browser music production suite, consisting of a drum sequencer, customizable synth with MIDI functionality, and recording/exporting .wav files of loops.</p>
            <p>Built with: React, Redux, Tone.js, Firebase</p>
          </div>
          <div className='projectsContainer'>
            <img src="public/images/saturn.png" />
            <div className='iconRow'>
              <a href="https://github.com/mithunder916">
                <img src="public/images/github.png" />
              </a>
              <a href="https://saturn-synth.herokuapp.com">
                <img src="public/images/screen.png" />
              </a>
              <a href="https://saturn-synth.herokuapp.com">
                <img src="public/images/video2.png" />
              </a>
            </div>
            <p className='title'>Saturn</p>
            <p className='description'>An '80s-themed, in-browser music production suite, consisting of a drum sequencer, customizable synth with MIDI functionality, and recording/exporting .wav files of loops.</p>
            <p>Built with: React, Redux, Tone.js, Firebase</p>
          </div>
        </div>
      </div>
    )
  }
}
