import {
  faInstagramSquare,
  faLinkedin,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { section, teamData } from '../../../../constantes';
import * as Styles from './Team.styles';

export const Team = () => (
  <Styles.Section id={section.team.id}>
    <Styles.SectionTitle
      title={section.team.title}
      subtitle={section.team.subtitle}
    />
    <Styles.Content>
      {teamData.map(person => (
        <Styles.Card key={person.name}>
          <Styles.ImageBox>
            <Styles.Image src={person.imageSrc} />
          </Styles.ImageBox>
          <Styles.CardContent>
            <Styles.Details>
              <Styles.CardTitle>
                {person.name}
                <br />
                <span>{person.functionName}</span>
              </Styles.CardTitle>
              <Styles.CardData>
                <a href={person.instagramLink} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faInstagramSquare} />
                </a>
                <a href={person.linkedinLink} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href={person.facebookLink} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
              </Styles.CardData>
            </Styles.Details>
          </Styles.CardContent>
        </Styles.Card>
      ))}
    </Styles.Content>
  </Styles.Section>
);
