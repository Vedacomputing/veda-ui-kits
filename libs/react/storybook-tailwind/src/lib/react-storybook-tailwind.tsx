import styles from './react-storybook-tailwind.module.css';

/* eslint-disable-next-line */
export interface ReactStorybookTailwindProps {}

export function ReactStorybookTailwind(props: ReactStorybookTailwindProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ReactStorybookTailwind!</h1>
    </div>
  );
}

export default ReactStorybookTailwind;
