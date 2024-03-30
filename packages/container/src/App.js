import React from 'react';

import MarketingApp from './components/MarketingApp';
import { mount } from 'marketing/MarketingApp'
export default () => {
  console.log({ mount })
  return <div>
    <h1>Hi there!</h1>
    <hr />
    <MarketingApp />

  </div>
};
