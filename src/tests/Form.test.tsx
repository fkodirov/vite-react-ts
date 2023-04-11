import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import UncontrolledComponent from '../components/Form';
import '@testing-library/jest-dom';

describe('UncontrolledComponent', () => {
  test('renders all form inputs', () => {
    render(<UncontrolledComponent onSubmit={() => {}} />);
    expect(screen.getByLabelText(/название/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/дата выпуска/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/цвет/i)).toBeInTheDocument();
    expect(screen.getByText(/наличие камер/i)).toBeInTheDocument();
    expect(screen.getByText(/наличие дтп/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/картинка/i)).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  test('calls onSubmit with form data when submitted', () => {
    const onSubmit = jest.fn();
    render(<UncontrolledComponent onSubmit={onSubmit} />);

    const formData = new FormData();
    formData.set('textinput', 'Test car');
    formData.set('date-input', '2022-01-01');
    formData.set('color-selection', 'Зеленый');
    formData.set('checkbox-1', 'true');
    formData.set('checkbox-2', 'false');
    formData.set('switcher', 'Да');
    const file = new File([''], 'test.png', { type: 'image/png' });
    formData.set('image-input', file);

    fireEvent.submit(screen.getByTestId('my-form'));
  });
});
