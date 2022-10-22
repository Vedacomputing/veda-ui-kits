import { render } from '@testing-library/react';

import DefaultAlert from './default-alert';

describe('DefaultAlert', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DefaultAlert />);
    expect(baseElement).toBeTruthy();
  });
});
