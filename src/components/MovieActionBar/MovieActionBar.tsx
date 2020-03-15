import React, { useCallback } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { setOpenModal } from '../../store/actionCreators';
import Button from '../common/Button/Button';

interface IProps {
    currentMovieId: number;
};

const MovieActionBar = ({ currentMovieId }: IProps) => {
    const dispatch = useDispatch();

    const { t } = useTranslation();

    const onClickDelete = useCallback(()=>(
        dispatch(setOpenModal({openModal: 'deleteModal', currentMovieId}))
    ), [dispatch, currentMovieId]);

    const onClickEdit = useCallback(()=>(
        dispatch(setOpenModal({openModal: 'editModal', currentMovieId}))
    ), [dispatch, currentMovieId]);


    return (
        <Styles.Container>
            <Button onClick={onClickDelete}>{t('actions.delete')}</Button>
            <Button onClick={onClickEdit}>{t('actions.edit')}</Button>
        </Styles.Container>
    );

};

export default MovieActionBar;


const Styles: {[key: string]: React.FC} = {};

Styles.Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;