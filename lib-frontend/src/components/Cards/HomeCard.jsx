import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { CardMedia, Typography } from "@mui/material";
import PhonelinkIcon from "@mui/icons-material/Phonelink";
import { Box } from "@mui/system";
const HomeCard = () => {
  return (
    <Card
      sx={{
        width: "80%",
        border: "1px solid #ddd",
        background: "#fcfbf7",
        // height: "130px",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          justifyContent: "space-around",
          // alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "30%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <PhonelinkIcon
            sx={{
              fontSize: "70px",
              color: "#4a4948",
            }}
          />
        </Box>

        <Box
          sx={{
            width: "60%",
          }}
        >
          <Typography
            sx={{
              lineHeight: "20px",
            }}
          >
            Read Free Library Books Online
          </Typography>
          <Typography
            sx={{
              fontSize: "13px",
              lineHeight: "15px",
              color: "#a19b9e",
            }}
          >
            Millions of books available through Controlled Digital Lending
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default HomeCard;
