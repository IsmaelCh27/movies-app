export interface MDBCreditsResponse {
  id: number;
  cast: MDBCast[];
  crew: MDBCast[];
}

export interface MDBCast {
  adult: boolean;
  cast_id: number;
  character: string;
  credit_id: string;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  order: number;
  original_name: string;
  popularity: number;
  profile_path: null | string;
}
