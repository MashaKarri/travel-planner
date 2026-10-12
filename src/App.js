import { Stats } from "./components/Stats/Stats";
import { Filters } from "./components/Filters/Filters";
import { TripList } from "./components/TripList/TripList";

import { GlobalStyles } from "./styles/GlobalStyles";
import { Container, Title } from "./App.styled";

function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Title>Travel Planner</Title>
        <Stats />
        <Filters />
        <TripList />
      </Container>
    </>
  );
}

export default App;
