import React, { Component } from 'react';
import { connect } from 'react-redux';
import { exampleUpdate } from '../ducks/rename';
import Sidebar from './Sidebar';
import Main from './Main';

// The Home component might contain your homepage content. Adding new routes to routes.js will cause them to be rendered instead when those urls are accessed.

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id='homeContainer'>
        {/*<header>
          Mithun
        </header>*/}
        <Sidebar />
        <Main />
        {/*<div id='sidebar'>
          Tabs go here.
        </div>
        <div id='mainContent'>
          Show main content here.
        </div>*/}
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
