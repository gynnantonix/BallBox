import * as React from "react"
import { Link } from 'gatsby'

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 24,
}

const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>

      <ul style={listStyles}>
        <li style={docLinkStyle}>
          <Link to='/demo'>Ball/Box Demo</Link>
        </li>
      </ul>
 
    </main>
  )
}

export default IndexPage