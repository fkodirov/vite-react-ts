import React from 'react';
import { render } from '@testing-library/react';
import Card from '../components/card';
import '@testing-library/jest-dom';

describe('Card', () => {
  it('renders the car brand correctly', () => {
    const car = {
      brand: 'Tesla',
      model: 'Model S',
      year: 2022,
      color: 'black',
      price: 100000,
      image: 'model-s.png',
    };

    const { getByText } = render(<Card car={car} />);
    expect(getByText('Tesla')).toBeInTheDocument();
  });

  it('renders the car model correctly', () => {
    const car = {
      brand: 'Tesla',
      model: 'Model S',
      year: 2022,
      color: 'black',
      price: 100000,
      image: 'model-s.png',
    };

    const { getByText } = render(<Card car={car} />);
    expect(getByText('Model S')).toBeInTheDocument();
  });

  it('renders the car year correctly', () => {
    const car = {
      brand: 'Tesla',
      model: 'Model S',
      year: 2022,
      color: 'black',
      price: 100000,
      image: 'model-s.png',
    };

    const { getByText } = render(<Card car={car} />);
    expect(getByText('2022')).toBeInTheDocument();
  });

  it('renders the car color correctly', () => {
    const car = {
      brand: 'Tesla',
      model: 'Model S',
      year: 2022,
      color: 'black',
      price: 100000,
      image: 'model-s.png',
    };

    const { getByText } = render(<Card car={car} />);
    expect(getByText('black')).toBeInTheDocument();
  });

  it('renders the car price correctly', () => {
    const car = {
      brand: 'Tesla',
      model: 'Model S',
      year: 2022,
      color: 'black',
      price: 100000,
      image: 'model-s.png',
    };

    const { getByText } = render(<Card car={car} />);
    expect(getByText('100000')).toBeInTheDocument();
  });
});
