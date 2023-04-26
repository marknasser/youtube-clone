import { BrowserRouter, Route, Routes, HashRouter } from "react-router-dom";
import { Box } from "@mui/material";

// we are using HashRouter instead just to deal with github pages

import {
  Navbar,
  VideoDetail,
  ChannelDetail,
  SearchFeed,
  Feed,
} from "./components";

const App = () => (
  <HashRouter>
    <Box sx={{ backgroundColor: "#000" }}>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Feed />} />
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/channel/:id" element={<ChannelDetail />} />
        <Route path="/search/:searchTerm" element={<SearchFeed />} />
      </Routes>
    </Box>
  </HashRouter>
);

export default App;
