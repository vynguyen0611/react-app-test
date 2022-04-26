import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import Greeting from './Greeting'

describe('Greeting component', () => {
    test('renders Hello World', () => {
        // 1. Arrange
        render(<Greeting />); 
        // 2. Act
        // nothing
    
        // 3. Assert
        const helloWorldElement = screen.getByText('Hello World', { exact: false } ); // { exact: true} is default
        expect(helloWorldElement).toBeInTheDocument();
    });  

    test('renders "It\'s good to see you!" if the button was NOT clicked', () => {
        render(<Greeting />); 

        const outputElement = screen.getByText('good to see you', { exact: false });
        expect(outputElement).toBeInTheDocument();
    });  

    test('renders "Text changed!" if the button was clicked', () => {
        render(<Greeting />); 

        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);

        const outputElement = screen.getByText('Text changed!');
        expect(outputElement).toBeInTheDocument();
    }); 

    test('does not render "It\'s good to see you!" after the button was clicked', () => {
        render(<Greeting />); 

        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);

        // queryByText wont throw error when element not found and return null
        const outputElement = screen.queryByText('good to see you', { exact: false});
        // expect(outputElement).not.toBeInTheDocument();
        expect(outputElement).toBeNull();
    }); 
});

