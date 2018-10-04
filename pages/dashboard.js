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
        status: "INCOMPLETE",
        verified: {
          chineseNationalId: false,
          chineseBankCard: false,
          watchlistAml: false,
          chinaPoliceDB: false
        }
      },
      {
        _id: "0002",
        personalInformation: {
          fullName: "Yoh Linh",
          age: "24",
          gender: "Female",
        },
        status: "INCOMPLETE",
        verified: {
          chineseNationalId: true,
          chineseBankCard: false,
          watchlistAml: true,
          chinaPoliceDB: false
        }
      }
    ]
  }

  componentDidMount() {
    // axios.get(`http://localhost:3001/applicants/`)
    //   .then(res => {
    //     const persons = res.data.applicants
    //     this.setState({ persons })
    //     console.log(res.data.applicants)
    //   })
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
                <th>Status</th>
                <th>Verified</th>
              </tr>
            </thead>

            <tbody>
              { this.state.persons.map(person =>
                <tr key={person._id}>
                  <td>{person.personalInformation.fullName}</td>
                  <td>{person.personalInformation.age}</td>
                  <td>{person.personalInformation.gender}</td>
                  <td>{person.status}</td>
                  <td>
                    <span className={ person.verified.chineseNationalId ? 'verified' : 'unverified' }>CNID</span>
                    <span className={ person.verified.chineseBankCard ? 'verified' : 'unverified' }>CBD</span>
                    <span className={ person.verified.watchlistAml ? 'verified' : 'unverified' }>WAML</span>
                    <span className={ person.verified.chinaPoliceDB ? 'verified' : 'unverified' }>CPDB</span>
                  </td>
                </tr>
              )}
          </tbody>
        </table>
        </div>
      </section>
      
    )
  }
}