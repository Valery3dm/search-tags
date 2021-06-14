import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { PreLoader } from '../../../components';

describe('PreLoader', () => {
    it('should render App component', () => {
        render(<PreLoader />);
        expect(screen.getByText(/Please/i)).toBeInTheDocument();
    });

    it('should find value in Router', () => {
        render(<PreLoader />);
        expect(screen.getByText('< 🌸 >')).toBeInTheDocument();
    });
});