import React, { Component } from 'react'
import axios from 'axios'
import Heading from '../components/Heading/Heading'
import TextFieldGroup from '../components/Commons/TextFieldGroup'

export default class extends Component {
  constructor() {
    super()
    this.state = {
      data: {}
    }
  }
  
  getUserInfo() {
    axios.get(`http://172.17.160.49:3000/applicants/${localStorage.id}`)
    .then(res => {
      if (res.data.person) {
        this.setState({data: res.data.person})
      } else {
        console.log('user has no data')
      }
    })
    .catch(err => {
      console.log(err)
    })
  }

  componentDidMount() {
    this.getUserInfo()
  }

  render() {
    return (
      <section className="container">
        <div className="form-page">
          <Heading title="Success" />
          <h3 className="subheading">
            Personal Details
          </h3>
          <table>
            <tr>
              <td>Yeah</td>
              <td>Yeah</td>
            </tr>
          </table>
        </div>
      </section>
    )
  }
}
