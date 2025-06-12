import type { Genre } from '../interfaces/mdb-genres-response';

export const fromTheGenreDBToGenre = (genre: Genre) => {
  return {
    id: genre.id,
    name: genre.name,
  };
};
