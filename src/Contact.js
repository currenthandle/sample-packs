import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router'; 

import './css/Contact.css';

class Contact extends Component {
  render() {
    return (
        <div className='contact'>
            <p>As a special bonus, we included colorful vocal shouts to help punch up your builds and drops.</p>
            <form
                className='contact-form'
            >
                <div className='name-container' ><textarea
                    placeholder='Name'
                    className="name"
                    type='text'
                    name='name'
                ></textarea></div>
                <div className='email-container'><textarea
                    placeholder='E-Mail Address'
                    className="email"
                    type='text'
                    name='email'
                ></textarea></div>
                <textarea
                    placeholder="Message..."
                    className='body'
                    name='body'
                ></textarea>
                <button className='submit-contact'>SEND</button>
            </form>
        </div>
    );
  }
}

export default Contact;
