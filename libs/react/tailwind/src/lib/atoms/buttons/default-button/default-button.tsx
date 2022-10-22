import styles from './default-button.module.css';

/* eslint-disable-next-line */
export interface DefaultButtonProps {}

export function DefaultButton(props: DefaultButtonProps) {
  return (
    <a
  href="/"
  className={styles['container']}>
  Get Started
</a>
  );
}

export default DefaultButton;
