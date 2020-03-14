import React, { useCallback } from 'react';
import { Formik, FormikProps, FormikValues } from 'formik';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { setOpenModal } from '../../store/actionCreators';
import Input from '../common/Input/Input';
import Button from '../common/Button/Button';
import { IMovie } from '../../interfaces/movie';

interface IProps {
    initialValues: IMovie,
    onSubmit: (values: any) => void;
};

const EditForm = (props: IProps) => {
    const { initialValues, onSubmit } = props;

    const dispatch = useDispatch();

    const closeModalHandler = useCallback(()=>dispatch(setOpenModal()), [dispatch]);

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}    
        >
        {(formikProps: FormikProps<FormikValues>) => {
            // TODO: i18n
            return (
                <form>
                    <Styles.FieldContainer>
                        <Input
                            onChange={formikProps.handleChange}
                            name="title"
                            value={formikProps.values.title}
                            label="Title"
                        />
                        <Input
                            onChange={formikProps.handleChange}
                            name="release_date"
                            value={formikProps.values.release_date}
                            label="Release date"
                        />
                        <Input
                            onChange={formikProps.handleChange}
                            name="vote_average"
                            value={formikProps.values.vote_average}
                            label="Rating"
                        />
                        <Styles.ButtonContainer>
                            <Button text="Yes" onClick={formikProps.handleSubmit} />
                            <Button text="No" onClick={closeModalHandler} />
                        </Styles.ButtonContainer>

                    </Styles.FieldContainer>
                </form>
        )}}
    </Formik>
    );
};

export default EditForm;

const Styles: { [key: string]: React.FC } = {};

Styles.Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

Styles.FieldContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

Styles.ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 5% 0;
`;