import React from "react";
import ReactDOM from "react-dom";
import {MainContainer} from '../raw_resources/js/src/components/main';
import {VideoList} from '../raw_resources/js/src/components/common';
import { shallow, mount, render } from 'enzyme';
import toJson from 'enzyme-to-json';

test('Video lists render correctly', () => {

  const wrapper = shallow(<MainContainer />); 
  let pr = wrapper.instance().moreResultsAction();
  
  const array = [0,1,2];

  const props = {
    loadMoreAction: jest.fn(),
    contentArray: array
  };
  

   const comp = shallow(<VideoList {...props} />); 

  expect(toJson(comp)).toMatchSnapshot();
});


