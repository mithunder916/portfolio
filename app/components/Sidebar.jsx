import React, { Component } from 'react';

// onClick's should trigger a state change in Home, which will pass updated props to Main
export default class Sidebar extends Component {
  log(input){
    console.log(input)
  }

  playAudio(file){
    // console.log(document.getElementById(file))
    document.getElementById(file).play()
  }

  toggleText(e){
    switch(e.target.textContent){
      case 'Who?': e.target.textContent = 'Mithun'; break;
      case 'Mithun': e.target.textContent = 'Who?'; break;
      case 'Projects': e.target.textContent = 'I Made These'; break;
      case 'I Made These': e.target.textContent = 'Projects'; break;
      case 'Contact': e.target.textContent = 'Hit Me Up'; break;
      case 'Hit Me Up': e.target.textContent = 'Contact'; break;
      case 'Music': e.target.textContent = 'ROCK OUT'; break;
      case 'ROCK OUT': e.target.textContent = 'Music'; break;
      default: break;
    }
  }

  render() {
    const { updateContent, samples } = this.props;
    // console.log(samples)
    // refactor audio tags - use .map; change about sample to [1]
    return (
      <div id='sidebar'>
        <audio id={`${samples[0]}`} type='audio/wav' src={`/samples/${samples[0]}.wav`} />
        <audio id={`${samples[1]}`} type='audio/wav' src={`/samples/${samples[1]}.wav`} />
        <audio id={`${samples[2]}`} type='audio/wav' src={`/samples/${samples[2]}.wav`} />
        <audio id={`${samples[3]}`} type='audio/wav' src={`/samples/${samples[3]}.wav`} />
        <audio id={`${samples[4]}`} type='audio/wav' src={`/samples/${samples[4]}.wav`} />
        Logo
        <div className='tab'
        onClick={() => updateContent('about')}
        onMouseEnter={(e) => {
          this.toggleText(e);
          this.playAudio(samples[0])}}
        onMouseLeave={(e) => this.toggleText(e)}>
          Who?
        </div>
        <div className='tab'
        onClick={() => updateContent('projects')}
        onMouseEnter={(e) => {
          this.toggleText(e);
          this.playAudio(samples[2])}}
        onMouseLeave={(e) => this.toggleText(e)}>
          Projects
        </div>
        <div className='tab'
        onClick={() => updateContent('contact')}
        onMouseEnter={(e) => {
          this.toggleText(e);
          this.playAudio(samples[3])}}
        onMouseLeave={(e) => this.toggleText(e)}>
          Contact
        </div>
        <div className='tab'
        onClick={() => updateContent('music')}
        onMouseEnter={(e) => {
          this.toggleText(e);
          this.playAudio(samples[4])}}
        onMouseLeave={(e) => this.toggleText(e)}>
          Music
        </div>
      </div>
    )
  }
}
