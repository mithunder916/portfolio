import React, { Component } from 'react';
import { connect } from 'react-redux';
import { exampleUpdate } from '../ducks/rename';
import Sidebar from './Sidebar';
import Main from './Main';

class Home extends Component {
  constructor(props) {
    super(props);

    let samples = [
      ['kick', 'hihat', 'snare', 'hihat2'],
      ['C', 'D', 'E', 'G'],
      ['A', 'B', 'C#', 'E']
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
      let currentWrapper = document.getElementById(currentContent + 'Wrapper');
      currentWrapper.className += ' hiddenWrapper';
      // update to include any pages that stretch width of viewport
      if (currentContent === 'projects') currentWrapper.style.overflow = 'hidden';
      this.resetContentPosition()
    },
    300)
  }

  // slides selected content in and updates current content
  resetContentPosition(){
    const { selectedContent, currentContent } = this.state;
    document.getElementById(currentContent + 'Content').classList.remove('animateWindow');

    let currentWrapper = document.getElementById(selectedContent + 'Wrapper');
    currentWrapper.classList.remove('hiddenWrapper');
    document.getElementById(selectedContent + 'Content').className += ' resetWindow';

    if (selectedContent === 'projects') currentWrapper.style.overflow = 'visible';
    this.setState({currentContent: selectedContent});
  }

  render() {
    // console.log(this.state)
    return (
      <div id='homeContainer'>
        <Sidebar
        updateContent={this.updateContent}
        resetContentPosition={this.resetContentPosition}
        samples={this.state.samples}
        currentContent={this.state.currentContent}/>
        <Main content={this.state.currentContent}/>
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
