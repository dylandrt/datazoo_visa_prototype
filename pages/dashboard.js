import React, { Component } from 'react'
import axios from 'axios'

export default class extends Component {
  state = {
    persons: [
      {
        _id: "0001",
        personalInformation: {
          fullName: "John Smith",
          age: "34",
          gender: "Male",
        },
        status: "Incomplete",
        verified: {
          chineseNationalId: false,
          chineseBankCard: false,
          watchlistAml: false,
          chinaPoliceDB: false
        }
      }
    ]
  }

  componentDidMount() {
    // axios.get(`http://172.17.160.49:3000/applicants`)
    //   .then(res => {
    //     const persons = res.data.applicants
    //     this.setState({ persons })
    //     console.log(res.data.applicants)
    //   })
  }

  render() {
    return (
      // <ul>
      //   { this.state.persons.map(person => <li key={person._id}>{person._id}</li>)}
      // </ul>
      <section className="container">
        <table>
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Status</th>
              <th>Verified</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              { this.state.persons.map(person => <td key={person._id}>{person.personalInformation.fullName}</td>)}
              { this.state.persons.map(person => <td key={person._id}>{person.personalInformation.age}</td>)}
              { this.state.persons.map(person => <td key={person._id}>{person.personalInformation.gender}</td>)}
              { this.state.persons.map(person => <td key={person._id}>{person.status}</td>)}
              { this.state.persons.map(person =>
                <td key={person._id}>
                  <span style={ person.verified.chineseNationalId ? {background:'green'} : {background:'red'} }>CNID </span>
                  <span style={ person.verified.chineseBankCard ? {background:'green'} : {background:'red'} }>CBD </span>
                  <span style={ person.verified.watchlistAml ? {background:'green'} : {background:'red'} }>WAML </span>
                  <span style={ person.verified.chinaPoliceDB ? {background:'green'} : {background:'red'} }>CPDB</span>
                </td>
              )}
            </tr>
          </tbody>
        </table>
      </section>
      
    )
  }
}