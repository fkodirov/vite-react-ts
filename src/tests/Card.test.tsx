import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Card from '../components/card';

const testCar = {
  brand: 'Toyota',
  model: 'Camry',
  year: 2021,
  color: 'red',
  price: 25000,
  image: 'camry.jpg',
};

describe('Card', () => {
  it('renders car brand', () => {
    render(<Card car={testCar} />);
    const brandElement = screen.getByText(testCar.brand);
    expect(brandElement).toBeInTheDocument();
  });

  it('renders car model', () => {
    render(<Card car={testCar} />);
    const modelElement = screen.getByText(testCar.model);
    expect(modelElement).toBeInTheDocument();
  });

  it('renders car year', () => {
    render(<Card car={testCar} />);
    const yearElement = screen.getByText(testCar.year.toString());
    expect(yearElement).toBeInTheDocument();
  });

  it('renders car color', () => {
    render(<Card car={testCar} />);
    const colorElement = screen.getByText(testCar.color);
    expect(colorElement).toBeInTheDocument();
  });

  it('renders car price', () => {
    render(<Card car={testCar} />);
    const priceElement = screen.getByText(testCar.price.toString());
    expect(priceElement).toBeInTheDocument();
  });

  // it('renders car image', () => {
  //   render(<Card car={testCar} />);
  //   const imageElement = screen.getByAltText(
  //     `${testCar.brand} ${testCar.model}`
  //   ) as HTMLImageElement;
  //   expect(imageElement).toBeInTheDocument();
  //   expect(imageElement.src).toContain(`assets/cars/${testCar.image}`);
  // });

  it('matches snapshot', () => {
    const tree = renderer.create(<Card car={testCar} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
