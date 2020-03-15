export interface IMovie {
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection?: IBelongsToCollection;
    budget?: number;
    genres?: IGenre[];
    homepage?: string;
    id: number;
    imdb_id?: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies?: IProductionCompany[];
    production_countries?: IProductionCountry[];
    release_date: string;
    revenue?: number;
    runtime?: number;
    spoken_languages?: ISpokenLanguage[];
    status?: string;
    tagline?: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    credits?: ICredits;
  }
  
  interface ICredits {
    cast: ICast[];
    crew: ICrew[];
  }
  
  interface ICrew {
    credit_id: string;
    department: string;
    gender: number;
    id: number;
    job: string;
    name: string;
    profile_path?: string;
  }
  
  interface ICast {
    cast_id: number;
    character: string;
    credit_id: string;
    gender: number;
    id: number;
    name: string;
    order: number;
    profile_path?: string;
  }
  
  interface ISpokenLanguage {
    iso_639_1: string;
    name: string;
  }
  
  interface IProductionCountry {
    iso_3166_1: string;
    name: string;
  }
  
  interface IProductionCompany {
    id: number;
    logo_path?: string;
    name: string;
    origin_country: string;
  }
  
  interface IGenre {
    id: number;
    name: string;
  }
  
  interface IBelongsToCollection {
    id: number;
    name: string;
    poster_path: string;
    backdrop_path: string;
  }