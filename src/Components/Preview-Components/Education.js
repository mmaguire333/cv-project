import React, {Component} from "react";

import '../../styles/Education.css';

class Education extends Component {


    render() {
        return (
            <div className="Education">
                <h3>Education</h3>
                <div className="education-item">
                    <div className="school">
                        <h4>Example University,</h4>
                        <p>city, state</p>
                    </div>
                    <p className="area-of-study">Bachelor of Science in Example Degree</p>
                    <p className="dates">StartDate - EndDate</p>
                    <p className="honors">Honors: Cum Laude</p>
                </div>
            </div>
        );
    }
}

export default Education;