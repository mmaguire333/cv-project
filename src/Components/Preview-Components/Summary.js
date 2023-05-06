import React, { Component } from "react";

class Summary extends Component {

    handleEdit = () => {
        this.props.populateSummaryForm(this.props.data)
    }

    render() {
        return (
            <div className="Summary">
                <h3>Summary</h3>
                <p>{this.props.data.text}</p>
                <button type="button" onClick={this.handleEdit}>Edit Section</button>
            </div>
        );
    }
}

export default Summary;