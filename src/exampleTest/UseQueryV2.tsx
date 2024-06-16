import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { useQuery } from 'react-query';
import MyComponent from './MyComponent';

jest.mock('react-query', () => ({
  useQuery: jest.fn(),
}));

test('renders loading state when one or both queries are loading', () => {
  useQuery
    .mockReturnValueOnce({
      data: null,
      error: null,
      isLoading: true,
    })
    .mockReturnValueOnce({
      data: null,
      error: null,
      isLoading: false,
    });

  render(<MyComponent />);
  expect(screen.getByText('Loading...')).toBeInTheDocument();
});

test('renders error state when one or both queries have error', () => {
  useQuery
    .mockReturnValueOnce({
      data: null,
      error: new Error('Error fetching data1'),
      isLoading: false,
    })
    .mockReturnValueOnce({
      data: null,
      error: new Error('Error fetching data2'),
      isLoading: false,
    });

  render(<MyComponent />);
  expect(screen.getByText('Error: Error fetching data1')).toBeInTheDocument();
});

test('renders data when both queries have data', () => {
  useQuery
    .mockReturnValueOnce({
      data: { message: 'Data1 message' },
      error: null,
      isLoading: false,
    })
    .mockReturnValueOnce({
      data: { message: 'Data2 message' },
      error: null,
      isLoading: false,
    });

  render(<MyComponent />);
  expect(screen.getByText('Data1')).toBeInTheDocument();
  expect(screen.getByText(/Data1 message/)).toBeInTheDocument();
  expect(screen.getByText('Data2')).toBeInTheDocument();
  expect(screen.getByText(/Data2 message/)).toBeInTheDocument();
});
