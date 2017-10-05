import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { actions } from 'state/Shoes/actions'
import { connect } from 'react-redux'
import map from 'lodash/map'

class Shoes extends Component {

  componentWillMount() {
    this.props.loadShoes()
  }

  shoe(item) {
    const { id, name, store } = item
    return (
      <div key={`shoe-${id}`}>
        <div>Name: {name} </div>
        <div>Loja: {store} </div>
      </div>
    )
  }

  renderShoes() {
    const { shoes } = this.props
    return (
      <div>
        <h1>Shoes</h1>
        {map(shoes, this.shoe)}
      </div>
    )
  }

  render() {
    const { form } = this.props

    return (
      <div>rearae
        {this.renderShoes()}
      </div>
    )
  }
}

Shoes.propTypes = {
  form: PropTypes.object.isRequired,
  loadShoes: PropTypes.func.isRequired,
  shoes: PropTypes.array.isRequired
}

function mapProps({ stores }) {
  return {
    form: stores.shoesReducer.form,
    shoes: stores.shoesReducer.shoes
  }
}

const mapActions = {
  loadShoes: () => actions.loadShoes(),
  updateFieldForm: text => actions.updateFieldForm(text)
}

export default connect(mapProps, mapActions)(Shoes)
