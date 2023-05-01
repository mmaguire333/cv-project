import React, { Component } from 'react';

import '../../styles/Summary.css'

class SummaryForm extends Component {


    render() {
        return (
            <div className="form-element">
                <form>
                    <fieldset>
                        <legend>Summary</legend>
                        <textarea id="summary-input" rows={5}></textarea>
                        <button type="submit">Submit</button>
                    </fieldset>          
                </form>
            </div>
        );
    }
}

export default SummaryForm;