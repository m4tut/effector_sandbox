import { FC } from 'react';

// Components
import { Container } from '~shared/layouts/Container';
import { EffectorHooks } from '~widgets/EffectorHooks';

const Home: FC = () => {
  return (
    <Container>
      <h1 className="mt-4 mb-6 text-5xl font-semibold text-center uppercase">Effector Sandbox</h1>

      <EffectorHooks />
    </Container>
  );
};

export default Home;
