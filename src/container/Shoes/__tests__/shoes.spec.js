import React from 'react'
import { shallow } from 'enzyme'
import Shoes from '../index'

describe('Shoes', () => {
  it('should render Shoes', () => {
    const shoes = shallow(<Shoes />)
    expect(shoes).toMatchSnapshot()
  })
})
