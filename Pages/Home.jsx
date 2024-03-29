import { Box } from "@mui/material";
import Exerciese from "../Component/Exercises";
import HeroBaneer from "../Component/HeroBanner";
import SearchExercise from "../Component/SearchExercise";
const Home = () => {
  return (
    <Box>
      <HeroBaneer />
      <SearchExercise />
      <Exerciese />
    </Box>
  );
};
export default Home;
