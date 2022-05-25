import { describe, expect, it } from 'vitest';

import App from './App';
import { render, screen } from './test/utils';

describe('Simple working test', () => {
  it('the title is visible', () => {
    render(<App />);
    expect(screen.getByText(/connect wallet/i)).toBeInTheDocument();
  });
});
