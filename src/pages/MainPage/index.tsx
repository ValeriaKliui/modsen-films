import { Sort } from '@components/Sort';
import { Button } from '@components/Button';
import { Films } from '@components/Films';
import { useAppDispatch, useAppSelector } from '@hooks/reduxHooks/hooks';
import { Main, Container } from './styled';
import { Video } from '@components/Video';
import { Modal } from '@components/Modal';
import { setFilmsPerPage, increasePage } from '@store/slices/filmsSlice';
import { FILMS_LIMIT } from '@constants/filmsConstants';

export const MainPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { filmsPerPage, films } = useAppSelector((store) => store.films);
  const increaseFilmsLimit = (): void => {
    dispatch(setFilmsPerPage(FILMS_LIMIT + filmsPerPage));
    if ((films.length - 2 * filmsPerPage) / filmsPerPage < 0) dispatch(increasePage());
  };

  return (
      <>
          <Sort />
          <Modal>
              <Video />
          </Modal>
          <Main>
              <Container>
                  <Films />
                  {films.length > filmsPerPage && <Button text="Show More" onClick={increaseFilmsLimit} />}{' '}
              </Container>
          </Main>
      </>
  );
};
