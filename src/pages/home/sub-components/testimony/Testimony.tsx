import { SectionTitle } from '../../../../components';
import { section } from '../../../../constantes';
import * as Styles from './Testimony.styles';

export const Testimony = () => (
  <Styles.Section id={section.testimony.id}>
    <SectionTitle
      title={section.testimony.title}
      subtitle={section.testimony.subtitle}
    />
    <Styles.Content>
      <Styles.TestimonialBx>
        <Styles.TestimonialP>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          esse, delectus ex earum aliquam laudantium ab nulla mollitia incidunt
          dicta consequuntur vero dignissimos! Incidunt nihil delectus alias
          pariatur in nemo.
        </Styles.TestimonialP>
        <Styles.TestimonialH3>
          Someone Famous <br />
          <Styles.TestimonialSpan>Creative Designer</Styles.TestimonialSpan>
        </Styles.TestimonialH3>
      </Styles.TestimonialBx>
      <Styles.TestimonialBx>
        <Styles.TestimonialP>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          esse, delectus ex earum aliquam laudantium ab nulla mollitia incidunt
          dicta consequuntur vero dignissimos! Incidunt nihil delectus alias
          pariatur in nemo.
        </Styles.TestimonialP>
        <Styles.TestimonialH3>
          Someone Famous <br />
          <Styles.TestimonialSpan>Creative Designer</Styles.TestimonialSpan>
        </Styles.TestimonialH3>
      </Styles.TestimonialBx>
    </Styles.Content>
  </Styles.Section>
);
