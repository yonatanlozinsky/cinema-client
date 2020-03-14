import * as Yup from 'yup';

// TODO: i18n
export default Yup.object().shape({
  title: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Title is required'),
  release_date: Yup.number()
    .typeError('Must be a year!')
    .min(1900, 'Too early')
    .max(2025, 'Too late!')
    .required('Date is required'),
  vote_average: Yup.string()
    .required('Vote average is required'),
});
