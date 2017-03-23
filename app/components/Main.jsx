import React, { Component } from 'react';
import Projects from './Projects';
import Contact from './Contact';
import Music from './Music';

export default class Main extends Component {
  showStory(event){
    event.target.nextElementSibling.style.display = '';
    event.target.style.display = 'none'
  }

  // selects other text elements in mainContent and toggles text color
  dimText(event){
    let introText = document.getElementById('intro').childNodes,
        listHeaders = document.getElementsByClassName('listTitle'),
        text = [...introText, ...listHeaders];

    if (event.type === 'mouseenter'){
      text.forEach(p => p.style.color = 'grey');
      event.target.style.color = 'white';
    } else if (event.type === 'mouseleave') {
      text.forEach(p => p.style.color = 'white');
      event.target.style.color = 'grey';
    }
  }

  render() {
    return (
      <div id='main'>
        <div id='mainWrapper' className='wrapper'>
          <div id='mainContent' className='content'>
            <div id='intro'>
              <p>
                Hi, my name is Mithun and I'm a web developer from Brooklyn, NY. I currently work at Fullstack Academy of Code as a teaching fellow and engineering intern.
              </p>
              <p>
                Some of my favorite tools are:
              </p>
            </div>
            <div className='listContainer'>
              <ul className='list'>
                <div className='listTitle'>Front End</div>
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS/Sass</li>
                <li>React</li>
                <li>Redux</li>
                <li>jQuery</li>
              </ul>
              <ul className='list'>
                <div className='listTitle'>Back End</div>
                <li>Node.js</li>
                <li>Express</li>
                <li>SQL/Postgres</li>
                <li>Sequelize</li>
                <li>Ruby on Rails</li>
              </ul>
              <ul className='list'>
                <div className='listTitle'>Other</div>
                <li>Git</li>
                <li>Mocha/Chai</li>
                <li>Webpack</li>
                <li>Web Audio API</li>
                <li>Logic Pro</li>
                <li>Heroku</li>
                <li>Sketch</li>
              </ul>
            </div>
            <p id='storyTag' onClick={(e) => this.showStory(e)}>What's your story?</p>
            <p id='story'
            style={{display:'none'}}
            >
              Before becoming a software engineer, I taught LSAT Prep and English. I spend most of my free making music, whether that's playing the guitar or drums, mixing and recording tracks, or working on music-tech based sideprojects, like Saturn.
            </p>
          </div>
        </div>
        <Projects />
        <Contact />
        <Music />
      </div>
    )
  }
}
