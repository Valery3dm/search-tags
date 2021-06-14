import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import store from '../../../store';

import { LastSearch } from '../../../components';

describe('LastSearch', () => {
    const props = ['firstValue','secondValue'];

    it('should render firstValue', () => {
        const { queryByText } = render(
            <Provider store = {store}>
                <BrowserRouter>
                    <LastSearch listOfThreeLastItems={props}/>
                </BrowserRouter>
            </Provider>
        );
        const linkFirstElement = queryByText('firstValue');
        expect(linkFirstElement).toBeTruthy();
        expect(linkFirstElement).toBeInTheDocument();

        const firstButton = screen.getByText('firstValue');
        fireEvent.click(firstButton);
    });
    
    it('should render secondValue', () => {
        const { queryByText } = render(
            <Provider store = {store}>
                <BrowserRouter>
                    <LastSearch listOfThreeLastItems={props}/>
                </BrowserRouter>
            </Provider>
        );
        const linkSecondElement = queryByText('secondValue');
        expect(linkSecondElement).toBeTruthy();
        expect(linkSecondElement).toBeInTheDocument();

        const secondButton = screen.getByText('secondValue');
        fireEvent.click(secondButton);
    });
});