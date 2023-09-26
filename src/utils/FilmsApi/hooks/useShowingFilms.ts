import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/hooks/hooks';
import { selectGenre, selectPage, selectShowingFilms, setFilms } from '../../../store/slices/ShowingFilmsSlice';
import { useGetFilmsQuery } from '../FilmsApi';
import { type FilmType } from '../types';

interface hookProps {
  films: FilmType[];
  isLoading: boolean;
  isFetching: boolean;
  isError: boolean;
  showingFilms: FilmType[];
  page: number;
  genre: number | null;
}

export const useShowingFilms = (): hookProps => {
  const page = useAppSelector(selectPage);
  const genre = useAppSelector(selectGenre) === 0 ? null : useAppSelector(selectGenre);
  const dispatch = useAppDispatch();
  const { isLoading, data, isFetching, isError } = useGetFilmsQuery({ page, genre });
  const films: FilmType[] = (data && data.results) || [];
  const showingFilms = useAppSelector(selectShowingFilms);

  useEffect(() => {
    if (!isLoading) {
      dispatch(setFilms(films));
    }
  }, [isLoading]);

  return { showingFilms, isLoading, isFetching, films, isError, page, genre };
};