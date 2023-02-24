import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import * as Styles from './Contact.styles';
import { section } from '../../../../constantes';
import { ContactForm } from './ContactForm';

export const Contact = () => (
  <Styles.Section id={section.contact.id}>
    <Styles.SectionTitle
      title={section.contact.title}
      subtitle={section.contact.subtitle}
    />
    <Styles.Content>
      <Styles.ContactInfo>
        <Styles.H3>Informações</Styles.H3>
        <Styles.ContactInfoBox>
          <Styles.Box>
            <Styles.Icon>
              <FontAwesomeIcon icon={faLocationDot} />
            </Styles.Icon>
            <Styles.Text>
              <Styles.H3>Endereço</Styles.H3>
              <p>
                Av qualquer uma, <br /> Criciúma, Santa Catarina, <br /> 55060
              </p>
            </Styles.Text>
          </Styles.Box>
          <Styles.Box>
            <Styles.Icon>
              <FontAwesomeIcon icon={faPhone} />
            </Styles.Icon>
            <Styles.Text>
              <Styles.H3>Telefone</Styles.H3>
              <p>(48) 9 9999-9999</p>
            </Styles.Text>
          </Styles.Box>
          <Styles.Box>
            <Styles.Icon>
              <FontAwesomeIcon icon={faEnvelope} />
            </Styles.Icon>
            <Styles.Text>
              <Styles.H3>E-mail</Styles.H3>
              <p>advogados@teste.com</p>
            </Styles.Text>
          </Styles.Box>
        </Styles.ContactInfoBox>
      </Styles.ContactInfo>
      <ContactForm />
    </Styles.Content>
  </Styles.Section>
);
