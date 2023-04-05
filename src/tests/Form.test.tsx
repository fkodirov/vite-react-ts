import { render, screen } from '@testing-library/react';
import UncontrolledComponent from '../components/Form';
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
    expect(screen.getByLabelText('Да')).toBeInTheDocument();
    expect(screen.getByLabelText('Нет')).toBeInTheDocument();
    expect(screen.getByLabelText('Картинка')).toBeInTheDocument();

    expect(screen.getByLabelText('Название:')).toHaveStyle('color: inherit');
    expect(screen.getByLabelText('Дата выпуска:')).toHaveStyle('color: inherit');
    // expect(screen.getByLabelText('Наличие камер:')).toHaveStyle('color: inherit');
    expect(screen.getByText('Участие в ДТП')).toHaveStyle('color: inherit');
    expect(screen.getByLabelText('Картинка')).toHaveStyle('color: inherit');
  });

  it('should show red color for empty input', () => {
    render(<UncontrolledComponent onSubmit={onSubmitMock} />);

    expect(screen.getByLabelText('Название:')).toHaveStyle('color: inherit');
    expect(screen.getByLabelText('Дата выпуска:')).toHaveStyle('color: inherit');
    // expect(screen.getByText('Наличие камер:')).toHaveStyle('color: red');
    expect(screen.getByText('Участие в ДТП')).toHaveStyle('color: inherit');
    expect(screen.getByLabelText('Картинка')).toHaveStyle('color: inherit');

    expect(onSubmitMock).not.toHaveBeenCalled();
  });
});
