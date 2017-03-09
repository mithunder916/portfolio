import React, { Component } from 'react';

export default class Sidebar extends Component {
  render() {
    return (
      <div id='sidebar'>
        Tabs go here.
        <div className='tab'>
          About
        </div>
        <div className='tab'>
          Projects
        </div>
        <div className='tab'>
          Contact
        </div>
        <div className='tab'>
          Music
        </div>
      </div>
    )
  }
}
