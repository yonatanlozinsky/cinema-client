/* eslint-disable @typescript-eslint/no-explicit-any */

import React from 'react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { cleanup } from '@testing-library/react';
import stateWithMovies from '../../../mocks/stateWithMovies';
import { renderApp } from '../../../utils/testUtils';
import DeleteModal from './DeleteModal';

const modalOpenState = {
  ...stateWithMovies,
  modalReducer: {
    openModal: {
      openModal: 'deleteModal',
      movieId: 12345
    }
  }
};


describe('deleteModal', ()=> {
  afterEach(()=> {
    cleanup();
  });

  it('renders without crashing', () => {
    const { getByTestId } = renderApp(<DeleteModal />, modalOpenState);
    expect(getByTestId('delete-modal')).toBeInTheDocument();
  });
});

describe('deleteModal yes button', ()=> {
  afterEach(()=> {
    cleanup();
  });
  
  it('should be rendered correctly', ()=> {
    const { getByTestId } = renderApp(<DeleteModal />, modalOpenState);
    expect(getByTestId('delete-modal-yes')).toBeInTheDocument();

  });
});

describe('deleteModal no button', ()=> {
  afterEach(()=> {
    cleanup();
  });
  
  it('should be rendered correctly', ()=> {
    const { getByTestId } = renderApp(<DeleteModal />, modalOpenState);
    expect(getByTestId('delete-modal-no')).toBeInTheDocument();

  });
});
