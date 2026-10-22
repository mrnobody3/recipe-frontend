'use client';

import { useActiveModal, useCloseModal } from '../../../store/hooks/useUI';
import { LoginModalView } from './LoginModalView';

export function LoginModalContainer() {
  const activeModal = useActiveModal();
  const closeModal = useCloseModal();

  const isOpen = activeModal === 'login';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Authentication API endpoint integration with Django REST Framework in progress.');
    closeModal();
  };

  return (
    <LoginModalView
      isOpen={isOpen}
      onClose={closeModal}
      onSubmit={handleSubmit}
    />
  );
}
