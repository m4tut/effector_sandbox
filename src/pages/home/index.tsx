import { FC } from 'react';

// Components
import { Container } from '~shared/layouts/Container';
import { EffectorGate } from '~widgets/EffectorGate';
import { EffectorHooks } from '~widgets/EffectorHooks';

const Home: FC = () => {
  return (
    <Container>
      <h1 className="mt-4 mb-6 text-5xl font-semibold text-center uppercase">Effector Sandbox</h1>

      <div className="grid gap-10">
        <EffectorHooks />
        <EffectorGate />
      </div>
    </Container>
  );
};

export default Home;
