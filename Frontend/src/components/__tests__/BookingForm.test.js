import {render, screen, cleanup} from '@testing-library/react';
import BookingForm from '../BookingForm';

test('should render BookingForm component', () => {
    render(<BookingForm/>)
    const bookingElement = screen.getByTestId("booking-1");
    expect(bookingElement).toBeInTheDocument();
})

