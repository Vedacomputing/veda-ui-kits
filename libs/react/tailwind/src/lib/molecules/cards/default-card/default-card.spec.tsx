import { render } from '@testing-library/react';

import DefaultCard from './default-card';

describe('DefaultCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DefaultCard />);
    expect(baseElement).toBeTruthy();
  });
});
