import { FC } from 'react';

// Styles
import cn from 'classnames';
import styles from './UseStore.module.scss';

interface UseStoreProps {
  className?: string;
}

export const UseStore: FC<UseStoreProps> = ({ className }) => {
  return (
    <section className={cn(className, styles['use-store'])}>
      <h3>useStore</h3>
      <div className={cn(className, styles['use-store__content'])}></div>
    </section>
  );
};
