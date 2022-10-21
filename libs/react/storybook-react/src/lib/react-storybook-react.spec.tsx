import { render } from '@testing-library/react';

import ReactStorybookReact from './react-storybook-react';

describe('ReactStorybookReact', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactStorybookReact />);
    expect(baseElement).toBeTruthy();
  });
});
