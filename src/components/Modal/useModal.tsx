import { useState } from 'react';
export const useModal = () => {
  const [isShown, setIsShown] = useState<boolean>(false);
  const toggleModal = () => setIsShown(!isShown);
  return {
    isShown,
    toggleModal,
  };
};