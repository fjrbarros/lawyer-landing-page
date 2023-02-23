import { Header, WhatsappButton } from '../../components';
import { Home, About, Team, Testimony, Work, Contact } from './sub-components';

const HomePage = () => {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Team />
      <Work />
      <Testimony />
      <Contact />
      <WhatsappButton />
    </>
  );
};

export default HomePage;
