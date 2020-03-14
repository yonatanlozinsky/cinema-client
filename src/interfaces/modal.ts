type modalType = 'deleteModal' | 'editModal';

export interface IOpenModal {
    openModal?: modalType;
    currentMovieId?: number;
};