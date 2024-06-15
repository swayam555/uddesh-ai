import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
        <nav className="navbar">
        <div className="navbar-brand">
            <a href="/">Uddesh.AI</a>
        </div>
        <ul className="navbar-menu">
            <li className="navbar-item">
                <a href="/">Home</a>
            </li>
            <li className="navbar-item">
                <a href="/services">Services</a>
                <ul className="dropdown">
                    <li><a href="/services/service1">CARRIER PREDICTION</a></li>
                    <li><a href="/Course">COURSES</a></li>
                    <li><a href="/Knowledge">KNOWLEDGE NETWORK</a></li>
                    <li><a href="/Mentors">MENTORS</a></li>
                </ul>
            </li>
            <li className="navbar-item">
                <a href="/contact">About Us</a>
            </li>
            <li className="navbar-item">
                <a href="/community">Community</a>
            </li>
            <li className="navbar-item">
                <a href="/contact">Contact Us</a>
            </li>
            <li className="navbar-item">
                <a href="/logout">Log Out</a>
            </li>
        </ul>
    </nav>
    )
  }
}
