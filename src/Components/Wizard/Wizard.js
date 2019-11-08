import React, { Component } from 'react';
import { Switch, Route, Link } from "react-router-dom";
import StepOne from "../StepOne"
// import StepTwo from "../StepTwo"
// import StepThree from "../StepThree"
// import { clearStore } from "../../ducks/store";

export default class Wizard extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return (
            <div className="wizard">
                <div className="wizardHeader">
                    <h1>Add New Home</h1>
                    <Link className="cancelLink" to="/">
                        <button className="cancelButton" 
                        // onClick={() => clearStore()}
                        >
                            Cancel
                    </button>
                    </Link>
                </div>
                <Switch className="wizardBody">
                    <Route component={StepOne} path="/wizard/step1" />
                    {/* <Route component={StepTwo} path="/wizard/step2" />
                    <Route component={StepThree} path="/wizard/step3" /> */}
                </Switch>
            </div>
        )
    }
}