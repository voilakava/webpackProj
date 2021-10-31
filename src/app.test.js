import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import ReactDOM from 'react-dom';
import App from "./App/app.js"

Enzyme.configure({adapter: new Adapter()})

describe('App component', () => {
    it('starts with a count of 0', () => {
      const wrapper = shallow(<App />);
      const text = wrapper.find('div').text();
      console.log(text);
      expect(text).toEqual('Returt App with webpack alias');
    });
  });



