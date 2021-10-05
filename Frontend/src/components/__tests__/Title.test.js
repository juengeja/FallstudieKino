import {render, screen, cleanup} from '@testing-library/react';
import Title from '../Title';

test('should render Banner component', () => {
    render(<Title/>)
    const titleElement = screen.getByTestId("title-1");
    expect(titleElement).toBeInTheDocument();
})