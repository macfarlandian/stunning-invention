import React from 'react';
import { render } from '@testing-library/react';

import Metadata from './';

jest.mock('../data/metadata.json', () => ({
  title: 'test title',
  description: 'test description',
  lastUpdated: '2020-02-02',
  sources: [{ name: 'test source' }],
}));

describe('<Metadata>', () => {
  test('should localize ISO 8601 dates', async () => {
    const { findByText } = render(<Metadata />);
    // if you ran this test in a non-US locale it would probably fail ... fine for now
    expect(await findByText('Feb 2, 2020')).toBeVisible();
  });
});