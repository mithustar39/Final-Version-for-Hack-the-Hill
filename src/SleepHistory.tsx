import React from 'react';
import { SectionContainer } from './styles';

const SleepHistory = () => {
  return (
    <SectionContainer>
      <h2>Your Sleep History</h2>
      <p>Track and view detailed sleep reports from the past weeks.</p>
      <ul>
        <li>Week 1: 7 hours 30 minutes average</li>
        <li>Week 2: 6 hours 45 minutes average</li>
        <li>Week 3: 7 hours 15 minutes average</li>
        <li>Week 4: 5 hours 50 minutes average</li>
      </ul>
    </SectionContainer>
  );
};

export default SleepHistory;
