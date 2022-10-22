import styles from './default-alert.module.css';

/* eslint-disable-next-line */
export interface DefaultAlertProps {}

export function DefaultAlert(props: DefaultAlertProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to DefaultAlert!</h1>
    </div>
  );
}

export default DefaultAlert;
