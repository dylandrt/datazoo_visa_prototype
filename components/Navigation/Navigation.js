 import React, { Component } from 'react'
 import Link from 'next/link'
 
export default class extends Component {
  render() {
    return (
      <nav className="navigation">
        <i className="material-icons navigation--burger">
          menu
        </i>
      
        <div className="navBox">
          <Link href="">
            <a className="navBox--link">Link</a>
          </Link>

          <Link href="">
            <a className="navBox--link">Link</a>
          </Link>

          <Link href="">
            <a className="navBox--link">Link</a>
          </Link>

          <Link href="">
            <a className="navBox--link">Link</a>
          </Link>
        </div>
      </nav>
    )
  }
}