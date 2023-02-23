import { FC, PropsWithChildren } from 'react';
import * as Styles from './Section.styles';

interface Props extends PropsWithChildren {
  className?: string;
  id?: string;
}
export const Section: FC<Props> = ({ id, className, children }) => (
  <Styles.Section id={id} className={className}>
    {children}
  </Styles.Section>
);
