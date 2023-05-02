import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import UncontrolledComponent from '../components/Form';
import { act } from 'react-dom/test-utils';
import '@testing-library/jest-dom/extend-expect';

describe('UncontrolledComponent', () => {
  test('renders all form elements', () => {
    render(<UncontrolledComponent onSubmit={() => {}} />);
    expect(screen.getByLabelText('Название:')).toBeInTheDocument();
    expect(screen.getByLabelText('Дата выпуска:')).toBeInTheDocument();
    expect(screen.getByLabelText('Цвет:')).toBeInTheDocument();
    expect(screen.getByLabelText('Передняя')).toBeInTheDocument();
    expect(screen.getByLabelText('Задняя')).toBeInTheDocument();
    expect(screen.getByLabelText('Да')).toBeInTheDocument();
    expect(screen.getByLabelText('Нет')).toBeInTheDocument();
    expect(screen.getByLabelText('Картинка')).toBeInTheDocument();
    expect(screen.getByTestId('my-form')).toBeInTheDocument();
  });

  test('submits form with entered data', () => {
    act(() => {
      const onSubmitMock = jest.fn();
      render(<UncontrolledComponent onSubmit={onSubmitMock} />);

      const textInput = screen.getByLabelText('Название:');
      fireEvent.change(textInput, { target: { value: 'Test product' } });

      const dateInput = screen.getByLabelText('Дата выпуска:');
      fireEvent.change(dateInput, { target: { value: '2022-05-01' } });

      const colorSelection = screen.getByLabelText('Цвет:');
      fireEvent.change(colorSelection, { target: { value: 'Зеленый' } });

      const checkbox1 = screen.getByLabelText('Передняя');
      fireEvent.click(checkbox1);

      const switcherNo = screen.getByLabelText('Нет');
      fireEvent.click(switcherNo);

      const imageInput = screen.getByLabelText('Картинка');
      fireEvent.change(imageInput, {
        target: { files: [new File(['(img'], 'test.png', { type: 'image/png' })] },
      });

      const submitButton = screen.getByRole('button', { name: /Добавить/ });
      console.log(submitButton.outerHTML); // Check that the button has the correct type attribute
      fireEvent.click(submitButton);

      expect(onSubmitMock).toHaveBeenCalled();
      expect(onSubmitMock).toHaveBeenCalledWith(expect.any(FormData));
    });
  });

  // test('displays error messages for required fields when submitted with empty values', () => {
  //   render(<UncontrolledComponent onSubmit={() => {}} />);

  //   fireEvent.submit(screen.getByTestId('my-form'));

  //   expect(screen.findByText('Пожалуйста, заполните поле')).toBeInTheDocument();
  //   expect(screen.getByText('Пожалуйста, выберите хотя бы один вариант')).toBeInTheDocument();
  //   expect(screen.getByText('Пожалуйста, добавьте изображение')).toBeInTheDocument();
  // });
});
