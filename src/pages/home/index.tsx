import { FC } from 'react';

// Components
import { Container } from '~shared/layouts/Container';
import { EffectorHooks } from '~widgets/EffectorHooks';

// Styles
import cn from 'classnames';
import styles from './Home.module.scss';

const Home: FC = () => {
  return (
    <Container className={cn(styles['home'])}>
      <h1 className={cn(styles['home__title'])}>Effector Sandbox</h1>

      <EffectorHooks />
    </Container>
  );
};

export default Home;
