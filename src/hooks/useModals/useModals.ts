import type { useModalI } from '@constants/types/interfaces';
import { useAppDispatch, useAppSelector } from '@hooks/reduxHooks/hooks';
import {
  setIsModalOpened,
  setIsSearchOpened,
  toggleMenu as toggle,
} from '@store/slices/modalsSlice';

export const useModals = (): useModalI => {
  const dispatch = useAppDispatch();
  const { isModalOpened, isSearchOpened, isMenuOpened } = useAppSelector(
    store => store.modals,
  );

  const openModal = (): void => {
    dispatch(setIsModalOpened(true));
  };
  const closeModal = (): void => {
    dispatch(setIsModalOpened(false));
  };
  const openSearch = (): void => {
    dispatch(setIsSearchOpened(true));
  };
  const closeSearch = (): void => {
    dispatch(setIsSearchOpened(false));
  };
  const toggleMenu = (): void => {
    dispatch(toggle());
  };

  return {
    openModal,
    closeModal,
    openSearch,
    closeSearch,
    toggleMenu,
    isModalOpened,
    isSearchOpened,
    isMenuOpened,
  };
};
