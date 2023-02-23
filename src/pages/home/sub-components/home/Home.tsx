import { section } from '../../../../constantes';
import * as Styles from './Home.styles';

export const Home = () => {
  return (
    <Styles.Banner id={section.home.id}>
      <Styles.TextBox>
        <Styles.Name>
          Olá, Somos <br /> <span>Advogados</span>
        </Styles.Name>
        <Styles.Description>
          Melhor escritório de advogados da região
        </Styles.Description>
        <Styles.AboutMe href={`#${section.about.id}`}>Sobre nós</Styles.AboutMe>
      </Styles.TextBox>
    </Styles.Banner>
  );
};
