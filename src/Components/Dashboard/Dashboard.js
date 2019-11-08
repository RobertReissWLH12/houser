import React, {Component} from 'react'
import House from "../House/House"
import {Link} from "react-router-dom"
// import axios from 'axios'


export default class Dashboard extends Component {
    constructor() {
        super()
        this.state = {

        }
        
    }


    render() {
        return (
            <div className="dashboard">
                <div className="dashboardHeader">
                    <h1>Dashboard</h1>
                <Link className="newLink" to="/wizard/step1">
                <button className="newProperty">Add New Property</button>
                </Link>
                </div>
                <h3>Home Listings</h3>
                <House />
            </div>
        )
    }
}