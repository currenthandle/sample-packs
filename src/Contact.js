import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router'; 

class Navbar extends Component {
  render() {
    return (
        <form>
            <textarea></textarea>
            <input 
                className="Name"
                type='text'
                name='name'
            />
            <input 
                className="email"
                type='text'
                name='email'
            />
        </form>
    );
  }
}

export default Navbar;
