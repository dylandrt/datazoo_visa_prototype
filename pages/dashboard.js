import React, { Component } from 'react'
import axios from 'axios'
const getAge = require('get-age')

export default class extends Component {
  state = {
    persons: [
      {
        _id: '',
        personalInfo: {
          fullName: '',
          age: '',
          gender: '',
        },
        residentialInfo: {
          city: ''
        }
      }
    ]
  }

  getUserInfo() {
    axios.get(`http://159.89.194.187:8082/applicants/`)
    .then(res => {
      const persons = res.data.applicants
      this.setState({ persons })
    })
  }

  componentDidMount() {
    this.getUserInfo()
  }

  render() {
    return (
      <section className="dashboard">
        <div className="form-page">
        <h1 className="heading">
          List of Applicants
        </h1>
        
          <table>
            <thead>
              <tr>
                <th>Full Name</th>
                <th>Age</th>
                <th>Gender</th>
                <th>City</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              { this.state.persons.map(person =>
                <tr key={person._id}>
                  <td>{person.personalInfo.fullName}</td>
                  <td>{String(getAge(person.personalInfo.dateOfBirth))}</td>
                  <td>{person.personalInfo.gender}</td>
                  <td>{person.residentialInfo.city}</td>
                  <td><span className={person.isComplete ? 'status status__complete' : 'status status__incomplete'}>{person.isComplete ? 'Completed' : 'Incomplete'}</span></td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
      
    )
  }
}