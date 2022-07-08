import { FC } from 'react';

// Components
import { UseStore } from '~entities/UseStore';

// Styles
import cn from 'classnames';
import styles from './EffectorHooks.module.scss';
import { UseStoreMap } from '~entities/UseStoreMap';
import { UseList } from '~entities/UseList';

interface EffectorHooksProps {
  className?: string;
}

export const EffectorHooks: FC<EffectorHooksProps> = ({ className }) => {
  return (
    <section className={cn(className, styles['hooks'])}>
      <h2 className={cn(styles['hooks__title'])}>Effector hooks</h2>
      <UseStore />
      <UseStoreMap />
      <UseList />
    </section>
  );
};
