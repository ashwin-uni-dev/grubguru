import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FoodCard from './FoodCard';

const mockFood = {
    imgUrl: 'https://example.com/food.jpg',
    name: 'Delicious Pizza',
    price: 9.99,
    storeInfo: {
        name: 'Pizza Place',
        address: '123 Main St',
        latitude: 51.5,
        longitude: -0.1
    },
    uberUrl: 'https://ubereats.com'
};

describe('FoodCard', () => {
    test('renders food name, store name, and price', () => {
        render(<FoodCard food={mockFood} />);
        expect(screen.getByText('Delicious Pizza')).toBeInTheDocument();
        expect(screen.getByText('Pizza Place')).toBeInTheDocument();
        expect(screen.getByText('£9.99')).toBeInTheDocument();
    });

    test('opens and closes modal on click', () => {
        render(<FoodCard food={mockFood} />);

        fireEvent.click(screen.getByText('Delicious Pizza'));
        expect(screen.getByText('View on Uber Eats')).toBeInTheDocument();

        fireEvent.click(screen.getByText('✕'));
        expect(screen.queryByText('View on Uber Eats')).not.toBeInTheDocument();
    });
});
