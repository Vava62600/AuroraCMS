import { render, screen } from '@testing-library/react';
import Modal from './Modal';

describe('Modal', () => {
  test('renders children when open', () => {
    render(
      <Modal isOpen={true} onClose={() => {}} title="Test Modal">
        <div>Test Content</div>
      </Modal>
    );
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });
});
