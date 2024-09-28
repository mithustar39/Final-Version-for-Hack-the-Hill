import React from 'react';
import { SectionContainer } from './styles';

const TodaysSleep = () => {
  return (
    <SectionContainer>
      <h2>Today's Sleep</h2>
      <p>Details for your sleep last night:</p>
      <ul>
        <li>Time asleep: 7 hours 20 minutes</li>
        <li>Time to fall asleep: 15 minutes</li>
        <li>Sleep cycles: 5</li>
        <li>Deep sleep: 2 hours</li>
        <li>REM sleep: 1 hour 30 minutes</li>
      </ul>
    </SectionContainer>
  );
};

export default TodaysSleep;
