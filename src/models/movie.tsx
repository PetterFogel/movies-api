export interface Movie {
    id: string,
    title: string,
    poster_path: string,
    vote_average: string,
    overview?: string,
    release_date?: string,
    genres?: string[],
}