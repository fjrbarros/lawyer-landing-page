import { useEffect, useState } from 'react';
import * as Styles from './Header.styles';
import { section } from '../../constantes';

export const Header = () => {
  const [isStick, setStick] = useState(false);
  const [isToggle, setToggle] = useState(false);

  const classStick = isStick ? 'stick' : '';

  const onScroll = () => {
    setStick(window.scrollY > 0);
  };

  const handleClick = () => {
    setToggle(prev => !prev);
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <Styles.Header className={classStick}>
      <Styles.Logo href={`#${section.home.id}`} className={classStick}>
        Advogados
      </Styles.Logo>
      <Styles.Toggle
        className="toggle"
        isToggle={isToggle}
        isStick={isStick}
        onClick={handleClick}
      />
      <Styles.List isToggle={isToggle}>
        {Object.keys(section).map(item => {
          const obj = section[item as keyof typeof section];
          return (
            <Styles.ItemList key={item}>
              <Styles.Menu
                href={`#${obj.id}`}
                className={classStick}
                onClick={handleClick}
                isStick={isStick}
              >
                {obj.headerTitle}
              </Styles.Menu>
            </Styles.ItemList>
          );
        })}
      </Styles.List>
    </Styles.Header>
  );
};
