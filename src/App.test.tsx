import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { useQuery } from '@tanstack/react-query';
import FetchApi from './components/FetchApi';
jest.mock('@tanstack/react-query');
describe("demo Appp",() => {
    it("render app api",() => {

        render(<FetchApi/>)
    })
})
// // Demo.test.js
// import React from 'react';
// import { render, screen, fireEvent } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect';
// import Demo from '../components/Demo';


// jest.mock('react', () => ({
//   ...jest.requireActual('react'),
//   useState: jest.fn(),
// }));

// test('renders initial count value and mocks setCount', () => {
//   const setCount = jest.fn();
//   const setName = jest.fn();
//   jest.spyOn(React, 'useState')
//   .mockImplementationOnce((init:any) => [1002, setCount])
//   .mockImplementationOnce((initName) => ["chien",setName])

//   render(<Demo />);
  
//   // Kiểm tra xem giá trị ban đầu của count là 10
// //   expect(screen.getByText('11')).toBeInTheDocument();
// screen.debug(undefined,100000)
  
  
// });