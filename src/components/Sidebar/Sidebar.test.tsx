import { render } from '@testing-library/react';
import Sidebar from './Sidebar';

describe('Sidebar', () => {
  test('renders without crashing', () => {
    render(<Sidebar />);
  });
});
