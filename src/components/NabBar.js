import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
    Link
  } from "react-router-dom";
  
export class NabBar extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div>
               <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">QuickNews</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item"><Link className="nav-Link active" aria-current="page" to="/">Home</Link></li>
                            <li className="nav-item"><Link className="nav-Link" to="/">About</Link></li>
                            <li className="nav-item"><Link className="nav-Link" to="/">Business</Link></li>
                            <li className="nav-item"><Link className="nav-Link" to="/">Entertainment</Link></li>
                            <li className="nav-item"><Link className="nav-Link" to="/">General</Link></li>
                            <li className="nav-item"><Link className="nav-Link" to="/">Health</Link></li>
                            <li className="nav-item"><Link className="nav-Link" to="/">Science</Link></li>
                            <li className="nav-item"><Link className="nav-Link" to="/">Sports</Link></li>
                            <li className="nav-item"><Link className="nav-Link" to="/">Technology</Link></li>
                        </ul>                    
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default NabBar
