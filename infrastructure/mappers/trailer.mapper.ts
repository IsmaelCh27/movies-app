import type { Result } from '../interfaces/mdb-trailer-response';
import type { Trailer } from '../interfaces/trailer.interface';

export const fromMDBTrailerToTrailer = (trailer: Result): Trailer => {
  return {
    name: trailer.name,
    key: trailer.key,
    published_at: new Date(trailer.published_at),
  };
};
