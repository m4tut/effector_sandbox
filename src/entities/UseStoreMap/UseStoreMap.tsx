import { FC } from 'react';

// Styles
import cn from 'classnames';
import styles from './UseStoreMap.module.scss';

interface UseStoreMapProps {
  className?: string;
}

export const UseStoreMap: FC<UseStoreMapProps> = ({ className }) => {
  return (
    <section className={cn(className, styles['use-store-map'])}>
      <h3>useStoreMap</h3>
      <div className={cn(className, styles['use-store-map__content'])}></div>
    </section>
  );
};
