import React, { useCallback } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { setOpenModal } from '../../store/actionCreators';
import Button from '../common/Button/Button';

interface IProps {
    currentMovieId: number;
};

const MovieActionBar = ({ currentMovieId }: IProps) => {
    const dispatch = useDispatch();

    const onClickDelete = useCallback(()=>(
        dispatch(setOpenModal({openModal: 'deleteModal', currentMovieId}))
    ), [dispatch, currentMovieId]);

    const onClickEdit = useCallback(()=>(
        dispatch(setOpenModal({openModal: 'editModal', currentMovieId}))
    ), [dispatch, currentMovieId]);


    return (
        <Styles.Container>
            {/* TODO: i18n */}
            <Button onClick={onClickDelete}>Delete</Button>
            <Button onClick={onClickEdit}>Edit</Button>
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