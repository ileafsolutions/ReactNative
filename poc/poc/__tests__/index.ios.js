import 'react-native';
import React from 'react';
import Index from '../App/EntryPoint.js';
import GridView from '../App/components/GridView.js';
import MenuList from '../App/components/MenuList.js'
import Billing from '../App/components/Billing.js'
import * as actions from '../App/actions/reducerActions'
import * as types from '../App/actions/ActionTypes'
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <Index />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
//
it('renders correctly', () => {
  const tree = renderer.create(
    <Billing cartList={[]}/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
//MenuList need an input array named itemList to render correctly
it('renders correctly', () => {
  const tree = renderer.create(
    <MenuList itemsList={[]}/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

describe('actions', () => {
  it('should create an action to change the loader', () => {
    const value = true
    const expectedAction = {
      type: types.LOADING,
      value
    }
    expect(actions.loading(value)).toEqual(expectedAction)
  })
})


describe('actions', () => {
  it('should create an action to add an item to cart', () => {
    const item = {}
    const expectedAction = {
      type: types.ADD_TO_CART,
      item
    }
    expect(actions.addToCart(item)).toEqual(expectedAction)
  })
})

describe('actions', () => {
  it('should create an action to change the loader', () => {
    const res = {"products":[]}
    const response = res.products
    const expectedAction = {
      type: types.FETCH_ITEMS,
      response
    }
    expect(actions.fetchItems(res)).toEqual(expectedAction)
  })
})
