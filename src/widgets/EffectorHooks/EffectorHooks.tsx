import { FC } from 'react';

// Components
import { UseStore } from '~widgets/EffectorHooks/hooks/UseStore';
import { UseStoreMap } from '~widgets/EffectorHooks/hooks/UseStoreMap';
import { UseList } from '~widgets/EffectorHooks/hooks/UseList';

interface EffectorHooksProps {
  className?: string;
}

export const EffectorHooks: FC<EffectorHooksProps> = ({ className }) => {
  return (
    <section className={className}>
      <h2 className="mb-5 text-4xl font-semibold uppercase">hooks</h2>
      <UseStore />
      <UseStoreMap />
      <UseList />
    </section>
  );
};
