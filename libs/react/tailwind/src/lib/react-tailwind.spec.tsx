import { render } from '@testing-library/react';

import ReactTailwind from './react-tailwind';

describe('ReactTailwind', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactTailwind />);
    expect(baseElement).toBeTruthy();
  });
});
