import React from "react"
import {Link} from "gatsby"

export default function Home() {
  return (
    <div style={{ color: `purple` }}>
      <h1>Hello Gatsby!</h1>
      <Link to="/contact/">Contact</Link>
      <p>What a world.</p>
    </div>
  )
}
