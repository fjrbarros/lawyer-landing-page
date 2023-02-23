import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Styles from './WhatsappButton.styles';

export const WhatsappButton = () => (
  <Styles.WhatsappContainer href="#contact-form">
    <FontAwesomeIcon icon={faWhatsapp} />
  </Styles.WhatsappContainer>
);
