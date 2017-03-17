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
      content: '',
      samples: samples[Math.round(Math.random() * 2)]
    }
    this.updateContent = this.updateContent.bind(this);
  }

  updateContent(newContent){
    this.setState({content: newContent})
    document.getElementById('mainContent').className += ' animateWindow';
    setTimeout(() => {
      document.getElementById('mainWrapper').className += ' hiddenWrapper'
    },
    500)
  }

  resetContentPosition(){
    document.getElementById('mainContent').classList.remove('animateWindow');
    document.getElementById('mainWrapper').classList.remove('hiddenWrapper');
    document.getElementById('mainContent').className += ' resetWindow';
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
