import { Section, SectionTitle } from '../../../../components';
import { section } from '../../../../constantes';
import * as Styles from './Operation.styles';

export const Work = () => (
  <Section id={section.operation.id}>
    <SectionTitle
      title={section.operation.title}
      subtitle={section.operation.subtitle}
    />
    <Styles.Content>
      <Styles.WorkBx>
        <Styles.Image
          src="https://sabatti.adv.br//wp-content/uploads/2020/11/Jus-A-13.jpg"
          alt="product 1"
        />
      </Styles.WorkBx>
      <Styles.WorkBx>
        <Styles.Image
          src="https://michelsesenisse.com.br/wp-content/uploads/2022/03/direito-empresarial-2.jpg"
          alt="product 2"
        />
      </Styles.WorkBx>
      <Styles.WorkBx>
        <Styles.Image
          src="https://s2.glbimg.com/gcex23ArHx4G-1xpZwCW4QkTDCw=/512x320/smart/e.glbimg.com/og/ed/f/original/2019/03/21/marieclairebr_53173219_156125195400702_2690791192579452744_n.jpg"
          alt="product 3"
        />
      </Styles.WorkBx>
      <Styles.WorkBx>
        <Styles.Image
          src="https://cdn.e-konomista.pt/uploads/2017/12/direito-a-advogado-gratuito-425x318.jpg"
          alt="product 4"
        />
      </Styles.WorkBx>
    </Styles.Content>
  </Section>
);
