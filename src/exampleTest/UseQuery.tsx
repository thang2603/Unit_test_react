// MultiQueryComponent.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MultiQueryComponent from './MultiQueryComponent';
import { useQuery } from 'react-query';

jest.mock('react-query');

describe('MultiQueryComponent', () => {
  test('renders loading state initially', () => {
    useQuery.mockImplementation((key) => {
      if (key === 'fetchUser') {
        return { data: null, isLoading: true, error: null };
      }
      if (key === 'fetchPosts') {
        return { data: null, isLoading: true, error: null };
      }
    });

    render(<MultiQueryComponent />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  test('renders user error state', () => {
    useQuery.mockImplementation((key) => {
      if (key === 'fetchUser') {
        return { data: null, isLoading: false, error: new Error('Failed to fetch user') };
      }
      if (key === 'fetchPosts') {
        return { data: null, isLoading: false, error: null };
      }
    });

    render(<MultiQueryComponent />);
    expect(screen.getByText('Error loading user: Failed to fetch user')).toBeInTheDocument();
  });

  test('renders posts error state', () => {
    useQuery.mockImplementation((key) => {
      if (key === 'fetchUser') {
        return { data: null, isLoading: false, error: null };
      }
      if (key === 'fetchPosts') {
        return { data: null, isLoading: false, error: new Error('Failed to fetch posts') };
      }
    });

    render(<MultiQueryComponent />);
    expect(screen.getByText('Error loading posts: Failed to fetch posts')).toBeInTheDocument();
  });

  test('renders data correctly', () => {
    useQuery.mockImplementation((key) => {
      if (key === 'fetchUser') {
        return { data: { name: 'John Doe' }, isLoading: false, error: null };
      }
      if (key === 'fetchPosts') {
        return { data: [{ id: 1, title: 'Post 1' }], isLoading: false, error: null };
      }
    });

    render(<MultiQueryComponent />);
    expect(screen.getByText('User:')).toBeInTheDocument();
    expect(screen.getByText(/John Doe/)).toBeInTheDocument();
    expect(screen.getByText('Posts:')).toBeInTheDocument();
    expect(screen.getByText(/Post 1/)).toBeInTheDocument();
  });
});
