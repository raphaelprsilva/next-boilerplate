import * as S from './styles';

const Main = ({
  title = 'React Avançado',
  description = 'Typescript, React, Next e Styled Components',
}) => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Imagem de um átomo e React Avançado escrito ao lado"
    />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Uma pessoa desenvolvedora na frente de um computador com código na tela"
    />
  </S.Wrapper>
);

export default Main;
