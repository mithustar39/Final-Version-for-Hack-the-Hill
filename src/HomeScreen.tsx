import { SectionContainer, HomeContainer, Heading, Subtitle, DescriptionText, ListItem } from './styles';

const HomePage = () => {
  return (
    <SectionContainer>
      <HomeContainer>
        <Heading>Welcome to Sleep Tracker</Heading>
        <DescriptionText>Track your sleep and improve your health.</DescriptionText>

        <Subtitle color="#8a2be2">Why Track Your Sleep?</Subtitle>
        <DescriptionText>
          Sleep is essential for overall health and well-being. By tracking your sleep patterns,
          you can identify issues, improve your sleep quality, and wake up feeling refreshed.
        </DescriptionText>

        <Subtitle color="#6a0dad">Features of Sleep Tracker</Subtitle>
        <ul>
          <ListItem>Log your sleep duration and quality.</ListItem>
          <ListItem>View detailed sleep history and trends.</ListItem>
          <ListItem>Get personalized tips to improve your sleep.</ListItem>
          <ListItem>Set sleep goals and track your progress.</ListItem>
        </ul>

        <Subtitle color="#8a2be2">Benefits of Better Sleep</Subtitle>
        <DescriptionText>
          Improved sleep can lead to numerous benefits, including:
        </DescriptionText>
        <ul>
          <ListItem>Increased focus and productivity.</ListItem>
          <ListItem>Better mood and emotional well-being.</ListItem>
          <ListItem>Enhanced memory and cognitive function.</ListItem>
          <ListItem>Lower risk of chronic health issues.</ListItem>
        </ul>

        <Subtitle color="#6a0dad">Get Started Today!</Subtitle>
        <DescriptionText>
          Start tracking your sleep today and take the first step towards better health.
          Remember, good sleep leads to a better life!
        </DescriptionText>
      </HomeContainer>
    </SectionContainer>
  );
};

export default HomePage;
