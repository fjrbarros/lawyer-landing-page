import {
  faInstagramSquare,
  faLinkedin,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { section } from '../../../../constantes';
import * as Styles from './Team.styles';

export const Team = () => (
  <Styles.Section id={section.team.id}>
    <Styles.SectionTitle
      title={section.team.title}
      subtitle={section.team.subtitle}
    />
    <Styles.Content>
      <Styles.Card>
        <Styles.ImageBox>
          <Styles.Image src="https://assets-blog.hostgator.com.br/wp-content/uploads/2021/05/como-criar-site-para-advogado.webp" />
        </Styles.ImageBox>
        <Styles.CardContent>
          <Styles.Details>
            <Styles.CardTitle>
              Vanessa
              <br />
              <span>Advogada criminal</span>
            </Styles.CardTitle>
            <Styles.CardData>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faInstagramSquare} />
              </a>
              <a
                href="https://br.linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                href="https://pt-br.facebook.com/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </Styles.CardData>
          </Styles.Details>
        </Styles.CardContent>
      </Styles.Card>
      <Styles.Card>
        <Styles.ImageBox>
          <Styles.Image src="https://fmp.edu.br/wp-content/uploads/2021/02/qual-e-o-papel-do-advogado-corporativo-a-fmp-te-mostra.jpg" />
        </Styles.ImageBox>
        <Styles.CardContent>
          <Styles.Details>
            <Styles.CardTitle>
              João
              <br />
              <span>Advogada criminal</span>
            </Styles.CardTitle>
            <Styles.CardData>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faInstagramSquare} />
              </a>
              <a
                href="https://br.linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                href="https://pt-br.facebook.com/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </Styles.CardData>
          </Styles.Details>
        </Styles.CardContent>
      </Styles.Card>
      <Styles.Card>
        <Styles.ImageBox>
          <Styles.Image src="https://almeidaleal.com/wp-content/uploads/2022/05/advogado-do-futuro.jpg" />
        </Styles.ImageBox>
        <Styles.CardContent>
          <Styles.Details>
            <Styles.CardTitle>
              Pedro
              <br />
              <span>Advogada criminal</span>
            </Styles.CardTitle>
            <Styles.CardData>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faInstagramSquare} />
              </a>
              <a
                href="https://br.linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                href="https://pt-br.facebook.com/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </Styles.CardData>
          </Styles.Details>
        </Styles.CardContent>
      </Styles.Card>
    </Styles.Content>
  </Styles.Section>
);
