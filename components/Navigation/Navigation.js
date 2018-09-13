 import React, { Component } from 'react'
 import Link from 'next/link'
 
export default class extends Component {
  render() {
    return (
      <nav className="navigation">
        <i className="material-icons navigation--burger">
          menu
        </i>
      


        <Link href="">
          <a>Link</a>
        </Link>
      </nav>
    )
  }
}