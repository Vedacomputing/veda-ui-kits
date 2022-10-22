import styles from './default-card.module.css';

/* eslint-disable-next-line */
export interface DefaultCardProps {}

export function DefaultCard(props: DefaultCardProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to DefaultCard!</h1>
    </div>
  );
}

export default DefaultCard;
