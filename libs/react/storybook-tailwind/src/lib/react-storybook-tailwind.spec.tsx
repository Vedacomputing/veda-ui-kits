import { render } from '@testing-library/react';

import ReactStorybookTailwind from './react-storybook-tailwind';

describe('ReactStorybookTailwind', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactStorybookTailwind />);
    expect(baseElement).toBeTruthy();
  });
});
