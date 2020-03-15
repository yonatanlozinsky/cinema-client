import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import Modal from '../../common/Modal/Modal';
import Button from '../../common/Button/Button';
import { setOpenModal, deleteMovie } from '../../../store/actionCreators';
import { currentMovieIdSelector, openModalSelector } from '../../../store/selectors/modals';
import { useTranslation } from 'react-i18next';

const DeleteModal = () => {

    const dispatch = useDispatch();

    const { t } = useTranslation();
    
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
            title={t('deleteModal.title')}
        >
            <Styled.Container data-testid="delete-modal">
                <Button data-testid="delete-modal-yes" text={t('general.yes')} onClick={deleteMovieHandler} />
                <Button data-testid="delete-modal-no" text={t('general.no')} onClick={closeModalHandler} />
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