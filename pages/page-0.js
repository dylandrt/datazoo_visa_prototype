import React, { Component } from 'react'
import axios from 'axios'
import Link from 'next/link'

export default class extends Component {
  constructor(props) {
    super(props)
  }

  createId(e) {
    axios.post(`http://104.248.54.56:8082/applicants/`, {
      step: '0'
    })
    .then(res => {
      localStorage.setItem('id', `${res.data.id}`)
      // this.setState({ id: res.data.id }) 
      console.log(localStorage.id)
    })
    .catch(err => {
      console.log(err)
    })
  }

  render() {
    return (
      <section className="container">
        <Link href="/steps/1">
          <a className="continue" onClick={this.createId}>Continue</a>
        </Link>
      </section>
    )
  }
}
