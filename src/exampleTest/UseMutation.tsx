// MutationComponent.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MutationComponent from './MutationComponent';
import { useMutation } from 'react-query';

jest.mock('react-query');

describe('MutationComponent', () => {
  test('renders send button', () => {
    useMutation.mockReturnValue({
      mutate: jest.fn(),
      isLoading: false,
      isError: false,
      isSuccess: false,
      error: null,
    });

    render(<MutationComponent />);
    expect(screen.getByText('Send Data')).toBeInTheDocument();
  });

  test('renders loading state when sending data', () => {
    const mockMutate = jest.fn();

    useMutation.mockReturnValue({
      mutate: mockMutate,
      isLoading: true,
      isError: false,
      isSuccess: false,
      error: null,
    });

    render(<MutationComponent />);
    fireEvent.click(screen.getByText('Send Data'));
    expect(screen.getByText('Sending...')).toBeInTheDocument();
  });

  test('renders error state when there is an error', () => {
    const mockMutate = jest.fn();

    useMutation.mockReturnValue({
      mutate: mockMutate,
      isLoading: false,
      isError: true,
      isSuccess: false,
      error: new Error('Failed to send data'),
    });

    render(<MutationComponent />);
    fireEvent.click(screen.getByText('Send Data'));
    expect(screen.getByText('Error: Failed to send data')).toBeInTheDocument();
  });

  test('renders success state when data is sent successfully', () => {
    const mockMutate = jest.fn();

    useMutation.mockReturnValue({
      mutate: mockMutate,
      isLoading: false,
      isError: false,
      isSuccess: true,
      error: null,
    });

    render(<MutationComponent />);
    fireEvent.click(screen.getByText('Send Data'));
    expect(screen.getByText('Data sent successfully!')).toBeInTheDocument();
  });
});
