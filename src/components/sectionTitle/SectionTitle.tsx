import { FC } from 'react';
import * as Styles from './SectionTitle.styles';

interface Props {
  title: string;
  subtitle?: string;
  className?: string;
}

export const SectionTitle: FC<Props> = ({ title, subtitle, className }) => (
  <Styles.ContainerHeading className={className}>
    <Styles.Heading>{title}</Styles.Heading>
    {subtitle && <Styles.Paragraph>{subtitle}</Styles.Paragraph>}
  </Styles.ContainerHeading>
);
