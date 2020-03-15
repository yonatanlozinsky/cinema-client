/* eslint-disable @typescript-eslint/no-explicit-any */

import React from 'react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, cleanup, act } from '@testing-library/react'
import stateWithMovies from '../../../mocks/stateWithMovies';
import movieMock from '../../../mocks/movie';
import { renderApp } from '../../../utils/testUtils';
import EditForm from './EditForm';

const modalOpenState = {
  ...stateWithMovies,
  modalReducer: {
    openModal: {
      openModal: 'editModal',
      movieId: 12345
    }
  }
};

describe('<EditForm />', ()=> {
  afterEach(()=> {
    cleanup();
  });
  const onSubmit = jest.fn();
    const props = {
      initialValues: movieMock,
      onSubmit
    };

  it('renders without crashing', () => {
    const { getByDisplayValue } = renderApp(<EditForm {...props} />, modalOpenState);
    expect(getByDisplayValue('A Rainy Day in New York')).toBeInTheDocument();
  });

  it('disables submit when value is incorrect', async () => {
    const { getByDisplayValue, getByText } = renderApp(<EditForm {...props} />, modalOpenState);
    const titleInput = getByDisplayValue('A Rainy Day in New York');
    await act(async()=> {
      fireEvent.change(titleInput, {target: {value: ''}});
    });
    expect(titleInput).toHaveValue('');
    const yesButton = getByText('Yes');
    expect(yesButton).toBeInTheDocument();
    expect(yesButton).toBeDisabled();

  });


  it('should render error message when input is invalid', async () => {
    const { getByDisplayValue, getByText } = renderApp(<EditForm {...props} />, modalOpenState);
    const titleInput = getByDisplayValue('A Rainy Day in New York');

    await act(async()=> {
      fireEvent.change(titleInput, {target: {value: ''}});
    });

    const err = getByText('Movie title is required!');
    expect(err).toBeDefined();
  });
});
