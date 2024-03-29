import { Box, Typography, Stack, TextField, Button } from "@mui/material";
import { textTransform, width } from "@mui/system";
import { useState } from "react";
const SearchExercise = (props) => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "d8be7b6efcmsh532b3212bfe193cp146183jsn37a829e7df5e",
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
  };

  const [search, setSearch] = useState("");
  const onChangeSearchHandler = (e) => {
    setSearch(e.target.value.toLowerCase());
  };
  const onSearchClickHandler = async (e) => {
    e.preventDefault();
    const response = await fetch(
      "https://exercisedb.p.rapidapi.com/exercises/bodyPart/",
      options
    );
    const data = await response.json();
    console.log(data);
  };
  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="50px"
        textAlign="center"
      >
        Awesome Exercise You <br /> Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: {
              fontWeigt: "700",
              border: "none",
              borderRadius: "4px",
            },
            width: {
              lg: "800px",
              xs: "350px",
            },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          height="76px"
          value={search}
          onChange={onChangeSearchHandler}
          placeholder="Search Excercises"
          type="text"
        />
        <Button
          variant="contained"
          className="search-btn "
          sx={{
            bgcolor: "#FF2625",
            color: "#fff",
            textTransform: "none",
            width: {
              lg: "175px",
              xs: "80px",
            },
            fontSize: {
              lg: "20px",
              xs: "14px",
            },
            height: "56px",
            position: "absolute",
            right: "0",
          }}
          onClick={onSearchClickHandler}
        >
          Search
        </Button>
      </Box>
    </Stack>
  );
};
export default SearchExercise;
