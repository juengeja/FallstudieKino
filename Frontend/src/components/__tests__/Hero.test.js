import {render, screen, cleanup} from '@testing-library/react';
import Hero from '../Hero';

test('should render Hero component', () => {
    render(<Hero/>)
    const heroElement = screen.getByTestId("hero-1");
    expect(heroElement).toBeInTheDocument();
})