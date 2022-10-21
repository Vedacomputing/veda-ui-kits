import styles from './react-tailwind.module.css';

/* eslint-disable-next-line */
export interface ReactTailwindProps {}

export function ReactTailwind(props: ReactTailwindProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ReactTailwind!</h1>
    </div>
  );
}

export default ReactTailwind;
