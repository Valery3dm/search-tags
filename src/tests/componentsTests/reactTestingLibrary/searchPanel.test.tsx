import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../../../store';
import { BrowserRouter } from 'react-router-dom';

import { SearchPanel } from '../../../components';

describe('SearchPanel', () => {
    it('should render Search', () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <SearchPanel />
                </BrowserRouter>
            </Provider>
        );
        expect(screen.getByText(/Search/i)).toBeInTheDocument();
    });

    it('should render textbox', () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <SearchPanel />
                </BrowserRouter>
            </Provider>
        );
        expect(screen.getByRole('textbox')).toBeInTheDocument();
    });

    it('should work onChange', () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <SearchPanel />
                </BrowserRouter>
            </Provider>
        );
        fireEvent.change(screen.getByRole('textbox'), {
            target: { value: 'React' }
        });
    });

    it('should run click key', () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <SearchPanel />
                </BrowserRouter>
            </Provider>
        );
        fireEvent.keyDown(screen.getByLabelText("Recipient's username"), {
            key: 'Enter',
            code: 'Enter' 
        })
    });

    it('should run fucntion on click', () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <SearchPanel />
                </BrowserRouter>
            </Provider>
        );
        const button = screen.getByText("Search");
        fireEvent.click(button)
    });
});
