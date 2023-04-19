import { render, screen, waitFor } from '@testing-library/react';
import UncontrolledComponent from '../components/Form';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';

describe('UncontrolledComponent', () => {
  let onSubmitMock: jest.Mock<void, [FormData]>;

  beforeEach(() => {
    onSubmitMock = jest.fn();
  });

  it('should render component with initial state', () => {
    render(<UncontrolledComponent onSubmit={onSubmitMock} />);

    expect(screen.getByLabelText('Название:')).toBeInTheDocument();
    expect(screen.getByLabelText('Дата выпуска:')).toBeInTheDocument();
    expect(screen.getByLabelText('Цвет:')).toBeInTheDocument();
    expect(screen.getByLabelText('Передняя')).toBeInTheDocument();
    expect(screen.getByLabelText('Задняя')).toBeInTheDocument();
    expect(screen.getByLabelText('Картинка')).toBeInTheDocument();

    expect(screen.getByLabelText('Название:')).toHaveStyle('color: inherit');
    expect(screen.getByLabelText('Дата выпуска:')).toHaveStyle('color: inherit');
    expect(screen.getByLabelText('Картинка')).toHaveStyle('color: inherit');
  });

  it('should show red color for empty input', () => {
    render(<UncontrolledComponent onSubmit={onSubmitMock} />);

    expect(screen.getByLabelText('Название:')).toHaveStyle('color: inherit');
    expect(screen.getByLabelText('Дата выпуска:')).toHaveStyle('color: inherit');
    expect(screen.getByLabelText('Картинка')).toHaveStyle('color: inherit');
    expect(onSubmitMock).not.toHaveBeenCalled();
  });
  it('should show an error message when "Название" is left empty and the form is submitted', async () => {
    render(<UncontrolledComponent onSubmit={onSubmitMock} />);

    const submitButton = screen.getByText('Добавить');

    userEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getAllByText('Пожалуйста, заполните поле')[0]).toBeInTheDocument();
      expect(onSubmitMock).not.toHaveBeenCalled();
    });
  });
  it('should show an error message when "Дата выпуска" is left empty and the form is submitted', async () => {
    render(<UncontrolledComponent onSubmit={onSubmitMock} />);

    const submitButton = screen.getByText('Добавить');

    userEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getAllByText('Пожалуйста, заполните поле')[0]).toBeInTheDocument();
      expect(onSubmitMock).not.toHaveBeenCalled();
    });
  });
  test('renders UncontrolledComponent without crashing', () => {
    const onSubmit = jest.fn();
    render(<UncontrolledComponent onSubmit={onSubmit} />);
  });
});
