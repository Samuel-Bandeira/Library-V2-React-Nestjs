import { Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const SocialMediaCard = () => {
  const socialMedia = [
    {
      url: "https://logodownload.org/wp-content/uploads/2014/09/facebook-logo-3-1.png",
      name: "Facebook",
    },
    {
      url: "https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1.png",
      name: "Twitter",
    },
    {
      url: "https://icons.iconarchive.com/icons/danleech/simple/1024/pinterest-icon.png",
      name: "Pinterest",
    },
    {
      url: "http://simpleicon.com/wp-content/uploads/embeb.png",
      name: "Embed",
    },
  ];

  return (
    <Paper
      elevation={3}
      sx={{
        padding: "20px",
      }}
    >
      <Box
        sx={{
          mb: "20px",
        }}
      >
        <Typography>Share this book</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        {socialMedia.map((each) => (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: "40px",
                heigth: "40px",
                overflow: "hidden",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "50%",
              }}
            >
              <img
                src={each.url}
                alt="social_media"
                width="36px"
                height="36px"
              />
            </Box>
            <Typography
              sx={{
                fontSize: "13px",
              }}
            >
              {each.name}
            </Typography>
          </Box>
        ))}
      </Box>
    </Paper>
  );
};

export default SocialMediaCard;
