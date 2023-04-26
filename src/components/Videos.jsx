import React from "react";
import { Stack, Box } from "@mui/material";

import { VideoCard, ChannelCard } from "./";

function Videos({ videos, direction }) {
  if (!videos?.length) return "loading .... ";
  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="start"
      alignItems="center"
      gap={2}
      margin={"auto"}
      sx={{ justifyContent: { xs: "center", md: "start" } }}
      // sx={{ overflowY: "auto" }}
    >
      {videos.map((item, i) => (
        <Box key={i}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
}

export default Videos;
