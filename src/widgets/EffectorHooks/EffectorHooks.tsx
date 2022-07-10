import { FC } from 'react';

// Components
import { UseStore } from '~widgets/EffectorHooks/hooksExample/UseStore';
import { UseStoreMap } from '~widgets/EffectorHooks/hooksExample/UseStoreMap';
import { UseList } from '~widgets/EffectorHooks/hooksExample/UseList';

interface EffectorHooksProps {
  className?: string;
}

export const EffectorHooks: FC<EffectorHooksProps> = ({ className }) => {
  return (
    <section className={className}>
      <h2 className="mb-5 text-4xl font-semibold uppercase">hooks</h2>
      <div className="grid gap-6">
        <UseStore />
        <UseStoreMap />
        <UseList />
      </div>
    </section>
  );
};
