import { Section, SectionTitle } from '../../../../components';
import { section } from '../../../../constantes';
import * as Styles from './About.styles';

export const About = () => (
  <Section id={section.about.id}>
    <SectionTitle title={section.about.title} />
    <Styles.Content>
      <Styles.ContentBox>
        <Styles.Title>{section.about.subtitle}</Styles.Title>
        <Styles.Paragraph>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore iste
          minima odit tenetur perspiciatis, soluta corporis vero totam, deleniti
          adipisci ab velit vel, eligendi sapiente excepturi. At sed numquam
          maiores?
        </Styles.Paragraph>
        <br />
        <Styles.Paragraph>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore iste
          minima odit tenetur perspiciatis, soluta corporis vero totam, deleniti
          adipisci ab velit vel, eligendi sapiente excepturi. At sed numquam
          maiores?
        </Styles.Paragraph>
      </Styles.ContentBox>
      <Styles.W50>
        <Styles.Image src="https://www.monderlaw.com/wp-content/uploads/2020/07/types-criminal-lawyer-cases-deal.jpg" />
      </Styles.W50>
    </Styles.Content>
  </Section>
);
