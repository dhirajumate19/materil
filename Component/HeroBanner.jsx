import { Box, Stack, Typography, Button } from "@mui/material";
import img from "../asset/image/banner.png";
const HeroBaneer = () => {
  return (
    <Box
      sx={{
        mt: { lg: "212px", xs: "70px" },
        ml: {
          sm: "50px",
        },
      }}
      position="relative"
      p="20px"
    >
      <Typography color="#e37b19" fontSize="30px" fontWeight="600">
        Fitness Club
      </Typography>
      <Typography
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        color="#000000"
        fontSize="22px"
        fontWeight={700}
        mb="20px"
        mt="30px"
      >
        Decide.Commit.Succeed.
      </Typography>
      <Typography
        color="#000000"
        lineHeight="35px"
        fontSize="20px"
        fontWeight={500}
        mb={2}
      >
        Check out the most effective excercises
      </Typography>
      <Button
        variant="contained"
        color="error"
        sx={{ background: "#FF2625", padding: "15px" }}
      >
        Explore Exeercises
      </Button>
      <Typography
        fontWeight={600}
        color="#ed002a"
        fontSize={200}
        sx={{ opacity: 0.1, display: { lg: "block", xs: "none" } }}
      >
        Exercises
      </Typography>
      <img src={img} alt="banner" className="hero-banner-img" />
    </Box>
  );
};
export default HeroBaneer;
