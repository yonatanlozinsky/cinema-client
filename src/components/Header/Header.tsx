import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { REACT_APP_ENV_NAME } from '../../config';

const Header = () => {
  const { t } = useTranslation();

  return (
    <Styles.Container>
      <Styles.HeaderText>{t('general.title')}</Styles.HeaderText>
      <Styles.EnvText>{REACT_APP_ENV_NAME}</Styles.EnvText>
    </Styles.Container>
  );
};

export default Header;

const Styles: {[key: string]: React.FC} = {};

Styles.Container = styled.div`
  width: 100%;
  height: 20vh;
  background-color: ${props => props.theme.cardOverlay};
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 700px) {
    height: 10%;
}
`;

Styles.BaseText = styled.div`
color: ${props => props.theme.primaryColor};
font-weight: bold;
`;

Styles.HeaderText = styled(Styles.BaseText)`
  font-size: 3em;

  @media screen and (max-width: 700px) {
      font-size: 2em;
  }
`;

Styles.EnvText = styled(Styles.BaseText)`
  font-size: 2.5em;
  color: white;

  @media screen and (max-width: 700px) {
    font-size: 1.5em;
}
`;