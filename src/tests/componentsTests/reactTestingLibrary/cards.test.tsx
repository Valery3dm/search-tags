import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Cards } from '../../../components';

describe('Cards', () => {

    const itemsList = [
        {
            id: 1,
            largeImageURL: 'qweasdzxc123',
            tags: 'item1'
        },
        {
            id: 2,
            largeImageURL: 'asdzxc123',
            tags: 'item2'
        },
        {
            id: 3,
            largeImageURL: 'zxc123',
            tags: 'item3'
        }
    ];

    it('should check render first items', () => {
        render(<Cards itemsList={itemsList}/>);
        expect(screen.getByText(/item1/i)).toBeInTheDocument();
    });

    it('should check render second items', () => {
        render(<Cards itemsList={itemsList}/>);
        expect(screen.getByText(/item2/i)).toBeInTheDocument();
    });

    it('should check render third items', () => {
        render(<Cards itemsList={itemsList}/>);
        expect(screen.getByText(/item3/i)).toBeInTheDocument();
    });

    it('should check render list items', () => {
        render(<Cards itemsList={itemsList}/>);
        expect(screen.getByRole('list')).toBeInTheDocument();
    });
});
