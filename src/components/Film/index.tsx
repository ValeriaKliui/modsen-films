import { type FilmType } from '../../utils/FilmsApi/types';
import { FilmStyled, Poster, Text, InfoContainer, Details, SubDetails, Dot } from './styled';
import noImage from '../../assets/img/no-image.png';
import { useAppDispatch } from '../../store/hooks/hooks';
import { setMovieID } from '../../store/slices/ShowingFilmsSlice';

export const Film: React.FC<FilmType> = ({ title, backdrop_path, poster_path, release_date, vote_average, id }) => {
  const dispatch = useAppDispatch();
  const photo = (): JSX.Element => {
    if (backdrop_path.includes('null')) return <img src={noImage} alt={title} />;
    return <img src={backdrop_path} alt={title} />;
  };
  const handleFilmClick = (): void => {
    dispatch(setMovieID(id));
  };

  return (
      <FilmStyled onClick={handleFilmClick}>
          {photo()}
          <InfoContainer>
              <Poster src={poster_path} alt={title} />
              <Details>
                  <Text>{title}</Text>
                  <SubDetails>
                      <Text>{new Date(release_date).getFullYear()}</Text>
                      <Dot />
                      <Text>Rating: {vote_average}</Text>
                  </SubDetails>
              </Details>
          </InfoContainer>
      </FilmStyled>
  );
};
