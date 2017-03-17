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
    document.getElementById('mainContent').className = 'animateWindow';
    setTimeout(() => {
      document.getElementById('mainWrapper').style.width = '0'
      document.getElementById('mainWrapper').style.height = '0'
    },
    500)
    // console.log(document.getElementById('mainContent').className)
  }

  render() {
    // console.log(this.state)
    return (
      <div id='homeContainer'>
        {/*<header>
          Mithun
        </header>*/}
        <Sidebar
        updateContent={this.updateContent}
        samples={this.state.samples}/>
        <Main content={this.state.content}/>
        <p>Hello</p>
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
