import React from "react";
import { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom";
import { Typography, Box, Stack } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import { fetchFromAPI } from "../utils/fetchFromApi";
import { Videos } from "../components";

function VideoDetail() {
  const { id } = useParams();
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    //video it self
    fetchFromAPI(`videos?id=${id}&part=contentDetails,snippet,statistics`).then(
      (response) => setVideoDetail(response?.items?.[0])
    );

    //related to the video
    fetchFromAPI(
      `search?part=id,snippet&relatedToVideoId=${id}&type=video,`
    ).then((response) => setVideos(response?.items));
  }, [id]);

  return (
    <Box minHeight={"95vh"}>
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "77px" }}>
            <ReactPlayer
              className="react-player"
              controls
              url={`https://www.youtube.com/watch?v=${videoDetail?.id}`}
            />
            <Typography
              color="#FFF"
              variant="h5"
              fontWeight="bold"
              p={2}
              pb={0}
            >
              {videoDetail?.snippet?.title}
            </Typography>

            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              sx={{ color: "#FFF" }}
              py={1}
              px={2}
            >
              <Link
                to={`/channel/${videoDetail?.snippet?.channelId}`}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant={{ sm: "subtitle1", md: "h6" }}
                  sx={{ color: "#FFF" }}
                >
                  {videoDetail?.snippet?.channelTitle}
                </Typography>
                <CheckCircle
                  sx={{ fontSize: "16px", color: "gray", marginLeft: "5px" }}
                />
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ opacity: ".7" }}>
                  {parseInt(
                    videoDetail?.statistics?.viewCount
                  ).toLocaleString()}
                  views
                </Typography>
                <Typography variant="body1" sx={{ opacity: ".7" }}>
                  {parseInt(
                    videoDetail?.statistics?.likeCount
                  ).toLocaleString()}
                  likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent="center"
          alignItems="center"
        >
          <Videos videos={videos} direction="column" />
        </Box>
      </Stack>
    </Box>
  );
}

export default VideoDetail;
