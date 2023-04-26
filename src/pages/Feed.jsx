import React from "react";
import { useState, useEffect, useLayoutEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { SideBar, Videos } from "../components";
import { fetchFromAPI } from "../utils/fetchFromApi";

function Feed() {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items))
      .catch((err) => console.error(err));
  }, [selectedCategory]);

  // let navH;
  // useLayoutEffect(() => {
  //   navH = document.getElementsByClassName("topNavbar")[0]?.clientHeight;
  // }, []);

  return (
    <Stack sx={{ display: "flex", flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "89.5vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <Typography
          className="copyright"
          variant="body2"
          sx={{ color: "#fff" }}
        >
          Frequently Searched Keywords
        </Typography>
      </Box>

      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{
            color: "white",
          }}
        >
          {selectedCategory}
          <span style={{ color: "#F31503", marginLeft: "10px" }}>videos</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
}

export default Feed;

/*
// https://youtube-v31.p.rapidapi.com/search?maxResults=50&relatedToVideoId=7ghhRHRP6t4&type=video&part=snippet,id
// fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
______________________
//with asynchronous funcs we have to chain ".then" to it ... we can't set it to a variable because it returns a promise XXXconst data = fechFromAPI()XXX.
//is a life cycle hook which gets called when the component initially load ,  and we provide her an empty dependency array meaning that the code inside that func will only run when we reload the page
*/
