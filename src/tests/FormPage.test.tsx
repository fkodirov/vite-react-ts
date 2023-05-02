import { render, fireEvent } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import { FormsPage } from '../pages/FormPage';
import { selectCardData } from '../store/features/formsSlice';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

describe('FormsPage', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  test('adds card data when form is submitted', () => {
    const dispatch = jest.fn();
    (useDispatch as jest.Mock).mockReturnValue(dispatch);

    const { getByLabelText, getByText } = render(<FormsPage />);

    const titleInput = getByLabelText('Title');
    fireEvent.change(titleInput, { target: { value: 'Test title' } });

    const submitButton = getByText('Submit');
    fireEvent.click(submitButton);

    expect(dispatch).toHaveBeenCalledWith(
      expect.objectContaining({
        type: 'forms/addCardData',
        payload: {
          title: 'Test title',
        },
      })
    );
    expect(useSelector).toHaveBeenCalledWith(selectCardData);
  });
});
