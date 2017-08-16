import React from "react";
import ReactDOM from "react-dom";
import {MainMenu} from '../raw_resources/js/src/components/main';
import renderer from 'react-test-renderer';

test('Main menu renders correctly', () => {
  const component = renderer.create(
    <MainMenu />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});