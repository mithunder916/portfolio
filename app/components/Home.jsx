import React, { Component } from 'react';
import { connect } from 'react-redux';
import { exampleUpdate } from '../ducks/rename';
import Sidebar from './Sidebar';
import Main from './Main';

// The Home component might contain your homepage content. Adding new routes to routes.js will cause them to be rendered instead when those urls are accessed.

class Home extends Component {
  constructor(props) {
    super(props);

    let samples = [
      ['kick', 'hihat', 'snare', 'hihat'],
      ['C', 'D', 'E', 'G', 'A'],
      ['A', 'B', 'C#', 'E', 'F#']
    ]

    this.state = {
      currentContent: 'main',
      selectedContent: '',
      samples: samples[Math.round(Math.random() * 2)]
    }
    this.updateContent = this.updateContent.bind(this);
  }
  // updates selected content and slides current content out
  updateContent(newContent){
    const { selectedContent, currentContent } = this.state;
    if (selectedContent !== '') document.getElementById(selectedContent + 'Content').classList.remove('resetWindow');
    this.setState({selectedContent: newContent});
    document.getElementById(currentContent + 'Content').className += ' animateWindow';
    setTimeout(() => {
      document.getElementById(currentContent + 'Wrapper').className += ' hiddenWrapper'
      this.resetContentPosition()
    },
    300)
  }

  // slides selected content back in and updates current content
  resetContentPosition(){
    const { selectedContent, currentContent } = this.state;
    document.getElementById(currentContent + 'Content').classList.remove('animateWindow');

    document.getElementById(selectedContent + 'Wrapper').classList.remove('hiddenWrapper');
    document.getElementById(selectedContent + 'Content').className += ' resetWindow';
    this.setState({currentContent: selectedContent});
  }

  render() {
    // console.log(this.state)
    return (
      <div id='homeContainer'>
        <Sidebar
        updateContent={this.updateContent}
        samples={this.state.samples}
        resetContentPosition={this.resetContentPosition}/>
        <Main content={this.state.content}/>
      </div>
    )
  }
}

/* REDUX CONTAINER */

const mapStateToProps = ({ example }) => ({ example })

const mapDispatchToProps = dispatch => ({
  update: () => dispatch(exampleUpdate())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
