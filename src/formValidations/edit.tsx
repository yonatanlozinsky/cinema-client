import * as Yup from 'yup';

import i18n from '../i18n';

export default Yup.object().shape({
  title: Yup.string()
    .min(2, i18n.t('errors.tooShort'))
    .max(50, i18n.t('errors.tooLong'))
    .required(i18n.t('errors.titleRequired')),
  release_date: Yup.number()
    .typeError(i18n.t('errors.yearType'))
    .min(1900, i18n.t('errors.tooEarly'))
    .max(2025, i18n.t('errors.tooLate'))
    .required(i18n.t('errors.dateRequired')),
  vote_average: Yup.string()
    .required(i18n.t('errors.voteAverageRequired')),
});
