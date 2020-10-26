import React from 'react'
import { Link } from 'react-router-dom'
import reactLogo from '../logo.svg'
import githubLogo from "../github.svg";
export default function Header() {
    return (
      <div className="header">
        <div className="headText">
          <div className="headContent">
            <h3>React</h3>
            <img className="App-logo" src={reactLogo} width="150" />

            <h3>and Github</h3>
            <img src={githubLogo} width="150" className="ml-3" />
          
          <ul>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                {" "}
                Home
              </Link>
            </li>
          </ul>
          </div>
        </div>
      </div>
    );
}
