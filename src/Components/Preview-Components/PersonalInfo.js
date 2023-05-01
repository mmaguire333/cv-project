import React, { Component } from "react";
import '../../styles/PersonalInfo.css'

class PersonalInfo extends Component {


    render() {
        return (
            <div className="PersonalInfo">
                <h1 className="name">Firstname Lastname</h1>
                <h2 className="job">Job Title</h2>
                <div className="info">
                    <p>email</p>
                    <p>phone number</p>
                    <p>location</p>
                </div>
            </div>
        )
    }
}

export default PersonalInfo;