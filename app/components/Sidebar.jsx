import React, { Component } from 'react';

// onClicks should trigger a state change in Home, which will pass updated props to Main
export default class Sidebar extends Component {
  playAudio(file){
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
    const { updateContent, samples, currentContent } = this.props;
    console.log(samples)
    return (
      <div id='sidebar' className='wrapper'>
        {samples && samples.map((sample, i) => (
          <audio
          key={`${samples[i]}`}
          id={`${samples[i]}`}
          type='audio/wav'
          src={`/samples/${samples[i]}.wav`} />
        ))
        }
        <div id='mainTab' className='tab'
          onClick={currentContent !== 'main' ? () => updateContent('main') : null}
          onMouseEnter={(e) => {
            this.toggleText(e);
            this.playAudio(samples[0])}}
          onMouseLeave={(e) => this.toggleText(e)}>
            Who?
        </div>
        <div id='projectsTab' className='tab'
          onClick={currentContent !== 'projects' ? () => updateContent('projects') : null}
          onMouseEnter={(e) => {
            this.toggleText(e);
            this.playAudio(samples[1])}}
          onMouseLeave={(e) => this.toggleText(e)}>
            Projects
        </div>
        <div id='contactTab' className='tab'
          onClick={currentContent !== 'contact' ? () => updateContent('contact') : null}
          onMouseEnter={(e) => {
            this.toggleText(e);
            this.playAudio(samples[2])}}
          onMouseLeave={(e) => this.toggleText(e)}>
            Contact
        </div>
        <div id='musicTab' className='tab'
          onClick={currentContent !== 'music' ? () => updateContent('music') : null}
          onMouseEnter={(e) => {
            this.toggleText(e);
            this.playAudio(samples[3])}}
          onMouseLeave={(e) => this.toggleText(e)}>
            Music
        </div>
      </div>
    )
  }
}
