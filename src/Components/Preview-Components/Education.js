import React, {Component} from "react";
import '../../styles/Education.css';

class Education extends Component {
    render() {
        return (
            <div className="Education">
                <h3>Education</h3>
                {this.props.data.map((item) => {
                    return (
                        <div className="education-item" key={item.id}>
                            <div className="school">
                                <h4>{item.school},</h4>
                                <p>{item.location}</p>
                            </div>
                            <p className="area-of-study">{item.study}</p>
                            <p className="dates">{item.start.substring(5,7) + '/' + item.start.substring(0,4)}  -  {item.end.substring(5,7) + '/' + item.end.substring(0,4)}</p>
                            <p className="honors">{item.honors}</p>
                            <div className="education-buttons">
                                <button type="button" id={item.id} onClick={this.props.handleEducationEdit}>Edit Entry</button>
                                <button type="button" id={item.id} onClick={this.props.handleEducationDelete}>Delete Entry</button>
                            </div>
                        </div>
                        
                    );
                })} 
            </div>
        );
    }
}

export default Education;