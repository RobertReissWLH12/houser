import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { updateStore } from "../ducks/reducer"
import "../Components/Wizard/Wizard.css";

class StepTwo extends Component {
    componentDidMount() {
        this.props.updateStore();
    }

    handleChange = event => {
        this.props.updateStore({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div className="wizardBody">
                <input
                    placeholder="image url"
                    name="img"
                    value={this.props.img}
                    onChange={e => {
                        this.handleChange(e)
                    }}
                />
                <img
                    className="preview"
                    alt="house preview"
                    src={
                        this.props.img ? this.props.img
                            : "http://securitysolutionsdubai.com/wp-content/uploads/2016/04/dummy-post-horisontal-thegem-blog-default-medium.jpg"
                    } />
                <div>
                    <Link to="/wizard/step1">
                        <button
                            className="wizardButtons"
                            onClick={() => {
                                console.log(this.props);
                                this.props.updateStore({ ...this.props })
                            }}>
                            Previous Step
                </button>
                    </Link>
                    <Link to="/wizard/step3">
                        <button
                            className="wizardButtons"
                            onClick={() => {
                                console.log(this.props)
                                this.props.updateStore({ ...this.props })
                            }}>
                            Next Step
                </button>
                    </Link>
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
)(StepTwo)