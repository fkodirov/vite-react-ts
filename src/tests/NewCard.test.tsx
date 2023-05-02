import { render } from '@testing-library/react';
import NewCard from '../components/NewCard';
import '@testing-library/jest-dom';
describe('NewCard', () => {
  const formData = new FormData();
  formData.set('textinput', 'Test Name');
  formData.set('date-input', '2022-01-01');
  formData.set('color-selection', 'blue');
  formData.set('checkbox-1', 'on');
  formData.set('checkbox-2', 'on');
  formData.set('switcher', 'yes');

  it('renders with correct data', () => {
    const { queryByText } = render(<NewCard data={formData} />);
    expect(queryByText('Test Name')).toBeInTheDocument();
    expect(queryByText('2022-01-01')).toBeInTheDocument();
    expect(queryByText('blue')).toBeInTheDocument();
    expect(queryByText('Задняя/Передняя')).toBeInTheDocument();
    expect(queryByText('yes')).toBeInTheDocument();
  });
});
