import React from "react";
import { Link } from "react-router-dom";

import SearchBar from "./SearchBar";
import { Stack } from "@mui/material";
import { logo } from "../utils/constants";

function Navbar() {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        zIndex: "10",
        position: "sticky",
        background: "#000",
        top: "0",
        justifyContent: "space-between",
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="Logo" height={45} />
      </Link>

      <SearchBar />
    </Stack>
  );
}

export default Navbar;
