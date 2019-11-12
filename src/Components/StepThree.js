import React, {Component} from "react"
import {Link} from "react-router-dom"
import {connect} from "react-redux"
import {updateStore} from "../ducks/reducer"
import axios from "axios"
import "../Components/Wizard/Wizard.css"

class StepThree extends Component {
    componentDidMount() {
        this.props.updateStore()
    }

    handleChange = event => {
        this.props.updateStore({
            [event.target.name]: event.target.value
        })
    }

    addHouse = () => {
        const {name, address, city, state, zip, img, mortgage, rent} = this.props
        axios
        .post("/api/houses", {
            name,
            address,
            city,
            state,
            zip,
            img,
            mortgage,
            rent
        })
        .then(() => window.location.replace("/"))
    }

    render() {
        return (
            <div className="wizardBody">
                <input
                placeholder="monthly mortgage amount"
                name="mortgage"
                value={this.props.mortgage}
                onChange={e => {
                    this.handleChange(e)
                }}
                />
                <input
                placeholder="desired rent amount"
                name="rent"
                value={this.props.rent}
                onChange={e => {
                    this.handleChange(e)
                }} />
                <div>
                    <Link to="/wizard/step2">
                        <button
                        className="wizardButtons"
                        onClick={() => {
                            console.log(this.props)
                            this.props.updateStore({ ...this.props})
                        }}>
                            Previous Step
                        </button>
                    </Link>
                    <button
                    className="wizardButtons"
                    onClick={() => {
                        this.addHouse()
                        this.props.updateStore()
                    }}>
                        Complete
                    </button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = reduxState => {
    return {
        ...reduxState
    }
}

export default connect(
    mapStateToProps,
    {updateStore}
)(StepThree)