// import React from 'react';
// import { configure, shallow } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
// import toJson from 'enzyme-to-json';

// // Enzyme is a wrapper around React test utilities which makes it easier to
// // shallow render and traverse the shallow rendered tree.
// import LabeledText from '../client/components/LabeledText';
// import MarketDisplay from '../client/components/MarketDisplay';
// import MarketsDisplay from '../client/components/MarketsDisplay';

// // Newer Enzyme versions require an adapter to a particular version of React
// configure({ adapter: new Adapter() });

// describe('React unit tests', () => {
//   describe('LabeledText', () => {
//     let wrapper;
//     const props = {
//       label: 'Mega',
//       text: 'Markets',
//     };

//     beforeAll(() => {
//       wrapper = shallow(<LabeledText {...props} />);
//     });

//     it('Renders a <p> tag with the label in bold', () => {
//       expect(wrapper.type()).toEqual('p');
//       expect(wrapper.text()).toEqual('Mega: Markets');
//       expect(wrapper.find('strong').text()).toMatch('Mega');
//     });
//   });

//   describe('MarketDisplay', () => {
//     // TODO: Test the following:
//     // 1. A MarketDisplay should display all of its text props inside a
//     // LabeledText component
//     // 2. It should also contain a div with two buttons
//     // 3. The functions passed down should be invoked on click
//     // 4. MarketDisplay should render a div with a class of `marketBox`, and the
//     // interior div wrapping the two buttons should have a class of `flex`
//     let wrapper;
//     const props = {
//      index: 1,
//      location: 'boston',
//      cards: 10,
//      percentage: 100

//     };

//     beforeAll(() => {
//       wrapper = mount(<MarketDisplay {...props} />);
//     });

//     it('A MarketDisplay should display all of its text props inside a LabeledText component', () => {
//       expect(wrapper.type()).toEqual('p');
//       expect(wrapper.text()).toEqual('Mega: Markets');
//       expect(wrapper.find('strong').text()).toMatch('Mega');
//     });

//   });

//   describe('MarketsDisplay', () => {
//     // TODO: Test the following:
//     //   1. A MarketsDisplay should have an h4 element to display the 'Markets'
//     //   title
//     //   2. A single MarketDisplay is rendered for each market in the
//     //   marketList prop
//     //   3. The percentage prop should be a string calculated to two decimals.
//     //   Test for zero, a whole number, and a fractional value. (Right now this
//     //   is implemented incorrectly, so follow TDD here)
//     let wrapper;
//     // what does this do??
//     const mock1 = jest.fn();

//     const props = {
//       index: 1,
//       location: 'Hogwarts',
//       cards: 11,
//       percentage: 20,
//     };

//     beforeEach (() => {
//       wrapper = shallow(<MarketDisplay {...props} addCard={mock1}
//       deleteCard={mock1}/>)
//     });
//   });
// });
