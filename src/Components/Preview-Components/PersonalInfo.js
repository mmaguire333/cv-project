import React, { Component } from "react";
import '../../styles/PersonalInfo.css'

class PersonalInfo extends Component {
    handleEdit = () => {
        this.props.populatePersonalForm(this.props.data);
    }

    render() {
        return (
            <div className="PersonalInfo">
                <div>
                    <h1 className="name">{this.props.data.firstName} {this.props.data.lastName}</h1>
                    <h2 className="job">{this.props.data.position}</h2>
                </div>
                <div className="info">
                    <p>{this.props.data.email}</p>
                    <p>{this.props.data.phone}</p>
                    <p>{this.props.data.city}, {this.props.data.state}, {this.props.data.country}</p>
                </div>
                <button type="button" className="edit-button" onClick={this.handleEdit}>Edit Section</button>
            </div>
        )
    }
}

export default PersonalInfo;