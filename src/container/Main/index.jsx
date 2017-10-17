import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'
import { connect } from 'react-redux'

class Main extends Component {

  render() {
    const { children } = this.props

    return (
      <main className="main">
        <div className="container-fluid">
          <Link to="/shoes">
            <h2>Clique aqui para visualizar os calçados</h2>
          </Link>
          {children}
        </div>
      </main>
    )
  }
}

Main.propTypes = {
  children: PropTypes.node
}

const mapActions = {}

function mapProps() {
  return {}
}


export default connect(mapProps, mapActions)(Main)
