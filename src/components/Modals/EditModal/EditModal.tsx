import React, { useCallback, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import Modal from '../../common/Modal/Modal';
import { setOpenModal, editMovie } from '../../../store/actionCreators';
import { currentMovieIdSelector, openModalSelector } from '../../../store/selectors/modals';
import { moviesSelector } from '../../../store/selectors/movies';
import { IMovie } from '../../../interfaces/movie';
import EditForm from './EditForm';


const DeleteModal = () => {

    const dispatch = useDispatch();

    const { t } = useTranslation();

    const isModalOpen = useSelector(openModalSelector) === 'editModal';
    const currentMovieId = useSelector(currentMovieIdSelector);
    const movies = useSelector(moviesSelector);

    const currentMovieData = movies
    ? movies.results.filter((movie: IMovie) => movie.id === currentMovieId)[0]
    : undefined;

    const [ editedMovieData, setEditedMovieData ] = useState<IMovie>(currentMovieData);

    useEffect(()=> setEditedMovieData(currentMovieData), [currentMovieData]);

    const closeModalHandler = useCallback(()=>dispatch(setOpenModal()), [dispatch]);
    
    const editMovieHandler = useCallback((movie: IMovie)=> {
        dispatch(editMovie(movie));
        closeModalHandler();
    }, [dispatch, closeModalHandler]);

    return (
        <Modal
            isOpen={isModalOpen}
            onClose={closeModalHandler}
            title={t('editModal.title')}
        >
            <Styles.Container>
                <EditForm initialValues={editedMovieData} onSubmit={(values)=>editMovieHandler(values)} />
            </Styles.Container>
        </Modal>
    );
};

export default DeleteModal;

const Styles: { [key: string]: React.FC } = {};

Styles.Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
