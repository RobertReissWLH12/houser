import React, {Component} from 'react'
import "./Header.css"
import houser_logo from "./houser_logo.jpg"

export default class Header extends Component {

    // NO STATE!!!!  <<<--------

    render() {
        return (
            <header>
            <div className="header">
            <img src={houser_logo} className="houser_logo" alt="" />
                Houser
            </div>
            </header>
        )
    }
}