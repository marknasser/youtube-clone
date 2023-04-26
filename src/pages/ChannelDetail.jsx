import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { Videos, ChannelCard } from "../components";
import { fetchFromAPI } from "../utils/fetchFromApi";

function ChannelDetail() {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    //channel details
    fetchFromAPI(`channels?id=${id}`).then((response) => {
      console.log("responseDDD", response?.items?.[0]);
      setChannelDetail(response?.items?.[0]);
    });

    //channel videos
    fetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`).then(
      (response) => {
        setVideos(response?.items);
      }
    );
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            height: "300px",
            zIndex: 10,
            background:
              "linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)",
          }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop="-93px" />
      </Box>

      <Box p={2} display="flex">
        <Box sx={{ mr: { sm: "100px" } }} />
        <Videos videos={videos} />
      </Box>
    </Box>
  );
}

export default ChannelDetail;
