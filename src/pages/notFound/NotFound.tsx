import { useNavigate } from 'react-router-dom';
import * as Styles from './NotFound.styles';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Styles.Container>
      <Styles.Text404>404</Styles.Text404>
      <Styles.Text>
        Ops... <br /> Página não encontrada
      </Styles.Text>
      <Styles.Button onClick={() => navigate('/')}>
        Página inicial
      </Styles.Button>
    </Styles.Container>
  );
};

export default NotFound;
