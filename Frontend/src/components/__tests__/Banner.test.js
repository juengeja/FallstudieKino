import {render, screen, cleanup} from '@testing-library/react';
import Banner from '../Banner';

// render testing

test('should render Banner component', () => {
    render(<Banner/>)
    const bannerElement = screen.getByTestId("banner-1");
    expect(bannerElement).toBeInTheDocument();
})

// 



