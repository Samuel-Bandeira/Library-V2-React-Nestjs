import { Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import BookCard from "./Cards/BookCard";
import axios from "axios";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import CircleIcon from "@mui/icons-material/Circle";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import PlusInfo from "./Utils/PlusInfo";
import Dot from "./Utils/Dot";
import TextAndLink from "./Utils/TextAndLink";

const CButton = ({ children }) => {
  return (
    <Button
      sx={{
        fontSize: "12px",
        textTransform: "none",
      }}
    >
      {children}
    </Button>
  );
};

const RightContent = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "310px",
        mt: "20px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Button
          variant="outlined"
          sx={{
            color: "gray",
            borderColor: "gray",
            "&:hover": {
              borderColor: "gray",
            },
            mb: "20px",
          }}
        >
          Edit
        </Button>
        <Box>
          <TextAndLink
            font="10px"
            link="/"
            typographyText="List edited by"
            linkText="Lise"
          />
          <TextAndLink
            font="10px"
            link="/"
            typographyText="Februart 26, 2021 |"
            linkText="History"
          />
        </Box>
      </Box>
      <Box>
        <Typography variant="h4">Diary of a Minecraft Zombie</Typography>
        <Box
          sx={{
            display: "flex",
            mb: "20px",
          }}
        >
          <Typography
            sx={{
              mr: "5px",
            }}
          >
            by
          </Typography>
          <Link to="/">
            <Typography>Heater E. schwartz</Typography>
          </Link>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          mb: "20px",
        }}
      >
        <StarIcon />
        <Typography>1.00</Typography>
        <Dot />
        <Typography>1 Ratings</Typography>
        <Dot />
        <Typography>2 Want to read</Typography>
        <Dot />
        <Typography>0 Currently reading</Typography>
        <Dot />
        <Typography>1 Have read</Typography>
      </Box>

      {/* <ButtonGroup variant="text">
        <CButton>Overview</CButton>
        <CButton>View 2 editions</CButton>
        <CButton>Details</CButton>
        <CButton>Reviews</CButton>
        <CButton>Lists</CButton>
      </ButtonGroup> */}
      <Box
        sx={{
          border: "1px solid red",
          display: {
            xs: "none",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
          }}
        >
          <Typography>Previews available in:</Typography>
          <Link to="/">English</Link>
        </Box>

        <Typography
          sx={{
            fontSize: "12px",
          }}
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia
          explicabo magnam distinctio quaerat aperiam saepe nemo sed dicta
          laudantium beatae.
        </Typography>

        <Typography
          sx={{
            fontSize: "13px",
          }}
        >
          Set in England during the late Victorian era, the play's humour
          derives in part from characters maintaining fictitious identities to
          escape unwelcome social obligations. It is replete with witty dialogue
          and satirises some of the foibles and hypocrisy of late Victorian
          society. It has proved Wilde's most enduringly popular play. -
          Wikipedia. Play script, including biographical notes, textual details
          and
        </Typography>

        <Link to="/">Read more</Link>
        <PlusInfo
          subject="subjects"
          links={[
            "Juvenile literature",
            "Girls",
            "Engineering",
            "Experiments",
            "Education",
            "Science projects",
            "Education(Middle school)",
          ]}
        />
        <PlusInfo subject="people" links={["Oscar Wilde"]} />
        <PlusInfo subject="places" links={["England"]} />
        <PlusInfo subject="times" links={["19th century"]}></PlusInfo>
      </Box>
    </Box>
  );
};

export default RightContent;
