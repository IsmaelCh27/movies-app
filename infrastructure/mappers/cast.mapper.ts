import type { Cast } from '../interfaces/cast.interface';
import type { MDBCast } from '../interfaces/mdb-credits.response';

export const fromMovieDBCreditsToCast = (cast: MDBCast): Cast => {
  return {
    id: cast.id,
    name: cast.name,
    character: cast.character,
    avatar: cast.profile_path
      ? `https://image.tmdb.org/t/p/w500${cast.profile_path}`
      : 'https://img.myloview.com/stickers/default-avatar-profile-icon-vector-social-media-user-photo-700-205577532.jpg',
  };
};
