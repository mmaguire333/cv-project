import React, { Component } from "react";
import Form from "./Components/Form";
import Preview from "./Components/Preview";
import ReactToPrint from "react-to-print";
import uniqid from "uniqid"
import './styles/App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      personalInfo: {
            firstName: '',
            lastName: '',
            position: '',
            email: '',
            phone: '',
            city: '',
            state: '',
            country: ''
      },
      summary: {
        text: ''
      },
      currentEducationInput: {
        school: '',
        location: '',
        study: '',
        start: '',
        end: '',
        honors: '',
        id: uniqid()
      },
      education: [],
      editingEducation: false,
      currentExpirienceInput: {
        company: '',
        job: '',
        city: '',
        usState: '',
        start: '',
        end: '',
        firstDuty: '',
        secondDuty: '',
        thirdDuty: '',
        id: uniqid()
      },
      expirience: [],
      editingExpirience: false
    }
  }

  setPersonalInfo = (personalInfoData) => {
    this.setState({
      personalInfo: personalInfoData
    });
  }

  populatePersonalForm = (data) => {
    document.getElementById('first-name-input').value = data.firstName;
    document.getElementById('last-name-input').value = data.lastName;
    document.getElementById('position-input').value = data.position;
    document.getElementById('email-input').value = data.email;
    document.getElementById('phone-input').value = data.phone;
    document.getElementById('city-input').value = data.city;
    document.getElementById('state-input').value = data.state;
    document.getElementById('country-input').value = data.country;
  }

  setSummaryText = (summaryTextData) => {
    this.setState({
      summary: {
        text: summaryTextData
      }
    })
  }

  populateSummaryForm = (data) => {
    document.getElementById('summary-input').value = data.text;
  }

  handleEducationChange = (e) => {
    this.setState({
      currentEducationInput: {
        school: document.getElementById('school-input').value,
        location: document.getElementById('location-input').value,
        study: document.getElementById('study-input').value,
        start: document.getElementById('start-date-input').value,
        end: document.getElementById('end-date-input').value,
        honors: document.getElementById('honors-input').value,
        id: this.state.currentEducationInput.id
      }
    })
  }

  handleEducationSubmit = (e) => {
    e.preventDefault();

    if(this.state.editingEducation === true) {
      this.setState({
        education: this.state.education.filter((item) => item.id !== this.state.currentEducationInput.id)
                                        .concat(this.state.currentEducationInput)
                                        .sort((a, b) => new Date(b.end) - new Date(a.end)),
        currentEducationInput: {
          school: '',
          location: '',
          study: '',
          start: '',
          end: '',
          honors: '',
          id: uniqid()
        },
        editingEducation: false
      })
    } else {
      this.setState({
        education: this.state.education.concat(this.state.currentEducationInput).sort((a, b) => new Date(b.end) - new Date(a.end)),
        currentEducationInput: {
          school: '',
          location: '',
          study: '',
          start: '',
          end: '',
          honors: '',
          id: uniqid()
        }
      });
    }
    
    document.getElementById('school-input').value = '';
    document.getElementById('location-input').value = '';
    document.getElementById('study-input').value = '';
    document.getElementById('start-date-input').value = '';
    document.getElementById('end-date-input').value = '';
    document.getElementById('honors-input').value = '';
  }

  handleEducationEdit = (e) => {
    let itemToEdit = this.state.education.filter((item) => item.id === e.target.id)[0];

    document.getElementById('school-input').value = itemToEdit.school;
    document.getElementById('location-input').value = itemToEdit.location;
    document.getElementById('study-input').value = itemToEdit.study;
    document.getElementById('start-date-input').value = itemToEdit.start;
    document.getElementById('end-date-input').value = itemToEdit.end;
    document.getElementById('honors-input').value = itemToEdit.honors;

    this.setState({
      editingEducation: true,
      currentEducationInput: {
        school: itemToEdit.school,
        location: itemToEdit.location,
        study: itemToEdit.study,
        start: itemToEdit.start,
        end: itemToEdit.end,
        honors: itemToEdit.honors,
        id: itemToEdit.id
      }
    });
  }

  handleEducationDelete = (e) => {
    this.setState({
      education: this.state.education.filter((item) => item.id !== e.target.id)
    })
  }

  handleExpirienceChange = (e) => {
    this.setState({
      currentExpirienceInput: {
        company: document.getElementById('company-input').value,
        job: document.getElementById('job-title-input').value,
        city: document.getElementById('expirience-city-input').value,
        usState: document.getElementById('expirience-state-input').value,
        start: document.getElementById('start-input').value,
        end: document.getElementById('end-input').value,
        firstDuty: document.getElementById('first-duty-input').value,
        secondDuty: document.getElementById('second-duty-input').value,
        thirdDuty: document.getElementById('third-duty-input').value,
        id: this.state.currentExpirienceInput.id
      }
    })
  }

  handleExpirienceSubmit = (e) => {
    e.preventDefault();

    if(this.state.editingExpirience === true) {
      this.setState({
        expirience: this.state.expirience.filter((item) => item.id !== this.state.currentExpirienceInput.id)
                                         .concat(this.state.currentExpirienceInput)
                                         .sort((a, b) => {
                                          if(a.end === '' && b.end === '') {
                                            return new Date(b.start) - new Date(a.start);
                                          } else if(a.end === '' && b.end !== '') {
                                            return -1;
                                          } else if (a.end !== '' && b.end === '') {
                                            return 1;
                                          } else {
                                            return new Date(b.end) - new Date(a.end);
                                          }
                                         }),
        currentExpirienceInput: {
          company: '',
          job: '',
          city: '',
          usState: '',
          start: '',
          end: '',
          firstDuty: '',
          secondDuty: '',
          thirdDuty: '',
          id: uniqid()
        },
        editingExpirience: false
      })
    } else {
      this.setState({
        expirience: this.state.expirience.concat(this.state.currentExpirienceInput).sort((a, b) => {
          if(a.end === '' && b.end === '') {
            return new Date(b.start) - new Date(a.start);
          } else if(a.end === '' && b.end !== '') {
            return -1;
          } else if (a.end !== '' && b.end === '') {
            return 1;
          } else {
            return new Date(b.end) - new Date(a.end);
          }
        }),
        currentExpirienceInput: {
          company: '',
          job: '',
          city: '',
          usState: '',
          start: '',
          end: '',
          firstDuty: '',
          secondDuty: '',
          thirdDuty: '',
          id: uniqid()
        }
      });
    }

    document.getElementById('company-input').value = '';
    document.getElementById('job-title-input').value = '';
    document.getElementById('expirience-city-input').value = '';
    document.getElementById('expirience-state-input').value = '';
    document.getElementById('start-input').value = '';
    document.getElementById('end-input').value = '';
    document.getElementById('first-duty-input').value = '';
    document.getElementById('second-duty-input').value = '';
    document.getElementById('third-duty-input').value = '';
  }

  handleExpirienceEdit = (e) => {
    let itemToEdit = this.state.expirience.filter((item) => item.id === e.target.id)[0];

    document.getElementById('company-input').value = itemToEdit.company;
    document.getElementById('job-title-input').value = itemToEdit.job;
    document.getElementById('expirience-city-input').value = itemToEdit.city;
    document.getElementById('expirience-state-input').value = itemToEdit.usState;
    document.getElementById('start-input').value = itemToEdit.start;
    document.getElementById('end-input').value = itemToEdit.end;
    document.getElementById('first-duty-input').value = itemToEdit.firstDuty;
    document.getElementById('second-duty-input').value = itemToEdit.secondDuty;
    document.getElementById('third-duty-input').value = itemToEdit.thirdDuty;

    this.setState({
      editingExpirience: true,
      currentExpirienceInput: {
        company: itemToEdit.company,
        job: itemToEdit.job,
        city: itemToEdit.city,
        usState: itemToEdit.usState,
        start: itemToEdit.start,
        end: itemToEdit.end,
        firstDuty: itemToEdit.firstDuty,
        secondDuty: itemToEdit.secondDuty,
        thirdDuty: itemToEdit.thirdDuty,
        id: itemToEdit.id
      }
    })
  }

  handleExpirienceDelete = (e) => {
    this.setState({
      expirience: this.state.expirience.filter((item) => item.id !== e.target.id)
    })
  }

  render() {
    return (
      <div className="App">
        <div className="form-and-print-container">
          <Form setPersonalInfo={this.setPersonalInfo} setSummaryText={this.setSummaryText}
          handleEducationChange={this.handleEducationChange} handleEducationSubmit={this.handleEducationSubmit}
          handleExpirienceChange={this.handleExpirienceChange} handleExpirienceSubmit={this.handleExpirienceSubmit}
          ></Form>
          <ReactToPrint
          trigger={() => { return <button id="print-button">Print/Save Preview</button> }}
          content={() => this.componentRef}
          ></ReactToPrint>
        </div>
        <Preview ref={el => (this.componentRef = el)} personalInfo={this.state.personalInfo} populatePersonalForm={this.populatePersonalForm}
                 summary={this.state.summary} populateSummaryForm={this.populateSummaryForm}
                 educationInfo={this.state.education} handleEducationEdit={this.handleEducationEdit} handleEducationDelete={this.handleEducationDelete}
                 expirienceInfo={this.state.expirience} handleExpirienceEdit={this.handleExpirienceEdit} handleExpirienceDelete={this.handleExpirienceDelete}></Preview>
      </div>
    );
  }
}

export default App;
