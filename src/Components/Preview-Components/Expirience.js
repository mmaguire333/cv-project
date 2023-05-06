import React, { Component } from "react";
import uniqid from "uniqid"
import '../../styles/Expirience.css';

class Expirience extends Component {

    render() {
        return (
            <div className="Expirience">
                <h3>Expirience</h3>
                {this.props.data.map((item) => {
                    return (
                        <div className="position" key={item.id}>
                            <div className="title-and-dates">
                                <h4>{item.job}</h4>
                                <p>{item.start.substring(5,7) + '/' + item.start.substring(0,4)} - {item.end === '' ? 'Present' : item.end.substring(5,7) + '/' + item.end.substring(0,4)}</p>
                            </div>
                            <div className="company-and-responsibilities">
                                <h4>{item.company} - {item.city}, {item.usState}</h4>
                                <ul>
                                    {[item.firstDuty, item.secondDuty, item.thirdDuty]
                                        .filter(duty => duty !== '')
                                        .map((duty) => {
                                            return (
                                                <li key={uniqid()}>{duty}</li>
                                            );
                                        })}
                                </ul>
                            </div>
                            <div className="expirience-buttons">
                                <button type="button" id={item.id} onClick={this.props.handleExpirienceEdit}>Edit Entry</button>
                                <button type="button" id={item.id} onClick={this.props.handleExpirienceDelete}>Delete Entry</button>
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default Expirience;