import { render } from '@testing-library/react';
import Pagination from './Pagination';

describe('Pagination', () => {
  test('renders correct number of pages', () => {
    const { getAllByRole } = render(
      <Pagination totalPages={5} currentPage={1} onPageChange={() => {}} />
    );
    expect(getAllByRole('button')).toHaveLength(5);
  });
});