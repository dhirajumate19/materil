import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import Logo from "../asset/image/Logo.png";
import Home from "../Pages/Home";
import classes from "./Navbar.module.css";
const Navbar = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{
        gap: { sx: "122px", xs: "40px" },
        mt: { sm: "32px", xs: "20px" },
        justifyContent: "none",
      }}
      px="20px"
    >
      <Link to="/">
        <img alt="Logo" className={classes.image} src={Logo} />
      </Link>
      <Stack direction="row" gap="40px" alignItems="flex-end" fontSize="24px">
        <Link className={classes.link} to="/">
          Home
        </Link>
        <a href="">Exercises</a>
      </Stack>
    </Stack>
  );
};
export default Navbar;
