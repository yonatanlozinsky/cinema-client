import instance from '../network';

export const fetchPopularMovies = (params?: {}) => {
    return instance.get('/discover/movie', {
        params: {
            page: 1,
            include_video: false,
            include_adult: false,
            sort_by: 'popularity.desc',
            language: 'en-US',
            append_to_response: 'credits',
            ...params
        }
    });
};