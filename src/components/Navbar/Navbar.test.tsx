import { render } from '@testing-library/react';
import Navbar from './Navbar';

describe('Navbar', () => {
  test('renders logo', () => {
    const { getByText } = render(<Navbar />);
    expect(getByText('AuroraCMS')).toBeInTheDocument();
  });
});
