import { render } from '@testing-library/react';
import Card from '../components/Card';
import '@testing-library/jest-dom';

describe('Card', () => {
  const car = {
    brand: 'Tesla',
    model: 'Model S',
    year: 2022,
    color: 'black',
    price: 100000,
    image: 'model-s.png',
  };

  it('renders the car brand correctly', () => {
    const { getByText } = render(<Card car={car} />);
    expect(getByText('Tesla')).toBeInTheDocument();
  });

  it('renders the car model correctly', () => {
    const { getByText } = render(<Card car={car} />);
    expect(getByText('Model S')).toBeInTheDocument();
  });

  it('renders the car year correctly', () => {
    const { getByText } = render(<Card car={car} />);
    expect(getByText('2022')).toBeInTheDocument();
  });

  it('renders the car color correctly', () => {
    const { getByText } = render(<Card car={car} />);
    expect(getByText('black')).toBeInTheDocument();
  });

  it('renders the car price correctly', () => {
    const { getByText } = render(<Card car={car} />);
    expect(getByText('100000')).toBeInTheDocument();
  });
});
