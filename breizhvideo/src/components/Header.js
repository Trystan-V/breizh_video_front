import React, { Component } from 'react'
import {Link} from 'react-router-dom'

///////// Menu Navbar /////////////

export default class Header extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                  <div class="container-fluid">
                    <a class="navbar-brand" href="/">Home</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                      <ul class="navbar-nav">
                        <li class="nav-item">
                          <Link className="nav-link" to="/Evenement">Evenement</Link>
                        </li>
                        <li class="nav-item">
                          <Link className="nav-link" to="/Film">Film</Link>
                        </li>
                        <li class="nav-item">
                          <Link className="nav-link" to="/Village">Village</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
            </div>
        )
    }
}

