import React, { Component } from 'react'

export default class House extends Component {

    // NO STATE!!!!   <<<<<<---------

    render() {
        return (
            <div className="list">
                <div className="textbox">
                    <div className="buttonbox">
                        <button className="xbutton"
                            onClick={() => this.props.deleteHouse(this.props.id)}>
                            X
                        </button>
                    </div>
                    <h2>{this.props.name}</h2>
                    <p>{`Address ${this.props.address}`}</p>
                    <p>{`City: ${this.props.city}`}</p>
                    <p>{`State: ${this.props.state}`}</p>
                    <p>{`Zip: ${this.props.zip}`}</p>
                    <img
                        className="preview"
                        alt="house preview"
                        src={this.props.img ? this.props.img
                            : "http://securitysolutionsdubai.com/wp-content/uploads/2016/04/dummy-post-horisontal-thegem-blog-default-medium.jpg"} />
                    <p>{`Monthly mortgage amount: $${this.props.mortgage}`}</p>
                    <p>{`Desired rent amount: $${this.props.rent}`}</p>
                </div>
            </div>
        )
    }
}