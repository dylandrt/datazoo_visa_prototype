import React, { Component } from 'react'
import axios from 'axios'
import Link from 'next/link'

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: ''
    }
  }

  componentDidMount() {
    axios.post(`http://172.17.160.49:3000/applicants/`, {
      step: '0'
    })
    .then(res => {
      console.log(res.data)
      
    })
    .catch(err => {
      console.log(err)
    })
  }

  render() {
    return (
      <h1>
        Yeah
      </h1>
    )
  }
}
