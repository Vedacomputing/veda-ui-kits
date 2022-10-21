import styles from './react-storybook-react.module.css';

/* eslint-disable-next-line */
export interface ReactStorybookReactProps {}

export function ReactStorybookReact(props: ReactStorybookReactProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ReactStorybookReact!</h1>
    </div>
  );
}

export default ReactStorybookReact;
