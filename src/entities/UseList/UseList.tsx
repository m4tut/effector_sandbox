import { FC } from 'react';

// Styles
import cn from 'classnames';
import styles from './UseList.module.scss';

interface UseListProps {
  className?: string;
}

export const UseList: FC<UseListProps> = ({ className }) => {
  return (
    <section className={cn(className, styles['use-list'])}>
      <h3>useList</h3>
      <div className={cn(className, styles['use-list__content'])}></div>
    </section>
  );
};
