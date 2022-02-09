import { shallow } from 'enzyme'
import React from 'react'
import { IoMdCloseCircleOutline, IoMdInformationCircleOutline } from '../icons'
import { UALLearnMore } from './UALLearnMore'

describe('UALLearnMore', () => {
  let wrapper

  beforeAll(() => {
    wrapper = shallow(<UALLearnMore />)
  })

  it('loads in a collapsed state with info icon', () => {
    expect(wrapper.find(IoMdInformationCircleOutline).length).toBe(1)
  })

  it('expands on info icon click', () => {
    wrapper.instance().toggleMoreInfo()
    expect(wrapper.find(IoMdCloseCircleOutline).length).toBe(1)
  })

  it('collapses on close icon click', () => {
    wrapper.instance().toggleMoreInfo()
    expect(wrapper.find(IoMdInformationCircleOutline).length).toBe(1)
  })
})
