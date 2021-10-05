import {render, screen, cleanup} from '@testing-library/react';
import Services from '../Services';

test('should render Services component', () => {
    render(<Services/>)
    const servicesElement = screen.getByTestId("services-1");
    expect(servicesElement).toBeInTheDocument();
})