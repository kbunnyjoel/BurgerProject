
import { Grommet, Box } from 'grommet';
import styled from 'styled-components';
import BurgerBuilder from '../containers/BurgerBuilder/BurgerBuilder'


const StyledGrommet = styled(Grommet)`
  height: 100vh;
`;

function Home() {

  return (
    <StyledGrommet>
      <Box responsive={true} align="center" fill="vertical" flex="grow" direction="column">
        <BurgerBuilder />
      </Box>
    </StyledGrommet>
  )
}

export default Home;