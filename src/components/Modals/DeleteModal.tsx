import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import Modal from '../common/Modal/Modal';
import Button from '../common/Button/Button';
import { setOpenModal, deleteMovie } from '../../store/actionCreators';
import { currentMovieIdSelector, openModalSelector } from '../../store/selectors/modals';

const DeleteModal = () => {

    const dispatch = useDispatch();
    
    const isModalOpen = useSelector(openModalSelector) === 'deleteModal';
    const currentMovieId = useSelector(currentMovieIdSelector);

    const closeModalHandler = useCallback(()=>dispatch(setOpenModal()), [dispatch]);
    
    const deleteMovieHandler = useCallback(()=> {
        dispatch(deleteMovie(currentMovieId));
        closeModalHandler();
    }, [currentMovieId, dispatch, closeModalHandler])

    return (
        <Modal
            isOpen={isModalOpen}
            onClose={closeModalHandler}
            // TODO: i18n
            title="Are you sure you want to delete this movie?"
        >
            <Styled.Container>
                {/* TODO: i18n */}
                <Button text="Yes" onClick={deleteMovieHandler} />
                <Button text="No" onClick={closeModalHandler} />
            </Styled.Container>
        </Modal>
    );
};

export default DeleteModal;

const Styled: { [key: string]: React.FC } = {};

Styled.Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;