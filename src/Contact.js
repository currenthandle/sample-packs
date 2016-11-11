import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router'; 

import './css/Contact.css';

class Contact extends Component {
  render() {
    return (
        <div>
            <p>Created by leading German minimal house artists including Pascal Feos, Andreas Mugge, Gabriel Le Mar and Frank Leichner, this pack has 750 oneshots (drums, fx, synths) and more than 1350 elaborate Minimal / House loops. Drum loops, construction kits, fx loops, synth loops, a real TB303, sub bass / percussion loops. If you are into cool, grown-up EDM music, you cant afford to miss this! Producers of commercial EDM will love these fresh, unique sounds.</p>
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
