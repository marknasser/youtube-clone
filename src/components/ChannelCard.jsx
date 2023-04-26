import React from "react";
import { Typography, Box, CardContent, CardMedia, box } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { demoProfilePicture } from "../utils/constants";

function ChannelCard({ channelDetail, marginTop }) {
  return (
    <Box
      sx={{
        boxShadow: "none",
        borderRadius: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: { md: "320px", xs: "356px" },
        height: "286px",
        margin: "auto",

        marginTop,
      }}
    >
      <Link
        to={`/channel/${channelDetail?.id?.channelId || channelDetail?.id}`}
      >
        <CardMedia
          component="img"
          sx={{
            width: 180,
            height: 180,
            margin: "auto",
            marginBottom: "16px",
            borderRadius: "50%",
            // overflow: "none",
            border: "1px solid #e3e3e3",
          }}
          image={
            channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture
          }
          alt={
            channelDetail?.snippet?.channelTitle ||
            channelDetail?.snippet?.title
          }
        />
        <CardContent sx={{ background: "#000" }}>
          <Typography
            sx={{
              fontWeight: "bold",
              color: "white",
              textAlign: "center",
            }}
          >
            {channelDetail?.snippet?.channelTitle ||
              channelDetail?.snippet?.title}
            <CheckCircle sx={{ color: "gray", fontSize: 12, ml: "10px" }} />
          </Typography>
          {channelDetail?.statistics?.subscriberCount && (
            <Typography
              sx={{ fontSize: "15px", fontWeight: 500, color: "gray" }}
            >
              {parseInt(
                channelDetail?.statistics?.subscriberCount
              ).toLocaleString("en-US")}{" "}
              Subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  );
}

export default ChannelCard;
