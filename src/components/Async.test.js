import { render, screen } from '@testing-library/react';
import Async from './Async';

describe('Async component', () => {
    test('renders posts if request succeed', async() => {
        render(<Async />);

    // findAllByRole used on promises
    const outputElement = await screen.findAllByRole('listitem', {}, {});
    expect(outputElement).not.toHaveLength(0);
    });

    // Working with Mocks
    
})