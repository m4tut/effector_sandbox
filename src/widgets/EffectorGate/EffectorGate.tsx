import { FC } from 'react';

interface EffectorGateProps {
  className?: string;
}

export const EffectorGate: FC<EffectorGateProps> = ({ className }) => {
  return (
    <section className={className}>
      <h2 className="mb-5 text-4xl font-semibold uppercase">Gate</h2>
    </section>
  );
};
