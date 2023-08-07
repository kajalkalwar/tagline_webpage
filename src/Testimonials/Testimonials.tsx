import {
  Button,
  Card,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useStyles } from "./TestimonialsStyles";
import { TestimonialsData } from "../data/data";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const { id, photo, para, name } = TestimonialsData[index];
  const classes = useStyles();

  const backWardBtn = () => {
    setIndex(index - 1 < 0 ? TestimonialsData.length - 1 : index - 1);
  };

  const forWardBtn = () => {
    setIndex(index + 1 >= TestimonialsData.length ? 0 : index + 1);
  };

  return (
    <Stack margin="100px 0px">
      <Stack>
        <Typography className={classes.title}>
          Testimonials
        </Typography>
      </Stack>

      <Stack className={classes.main_card}>
        <Stack direction="row" className={classes.btn_container}>
          <Button>
            <ArrowBackIcon onClick={backWardBtn} />
          </Button>
          <Button>
            <ArrowForwardIcon onClick={forWardBtn} />
          </Button>
        </Stack>
        <Card key={id} className={classes.card_container}>
          <CardContent className={classes.card_content}>
            <img
              src={photo}
              alt="girl with book"
              className={classes.card_image}
            />
            <Stack className={classes.card_details}>
              <Typography className={classes.card_paragraph}>
                {para}
              </Typography>
              <Typography className={classes.card_info}>
                {name}
              </Typography>
            </Stack>
          </CardContent>
        </Card>
      </Stack>
    </Stack>
  );
};

export default Testimonials;
