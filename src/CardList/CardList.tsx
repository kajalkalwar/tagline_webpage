import {
  Button,
  Card,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { CardData } from "../data/data";
import { useStyles } from "./CardListStyles";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
const CardList = () => {
  const classes = useStyles();
  const [index, setIndex] = useState(0);

  const backWard = () => {
    setIndex(index - 4 < 0 ? CardData.length - 4 : index - 4);
  };

  const forWard = () => {
    setIndex(index + 4 >= CardData.length ? 0 : index + 4);
  };

  return (
    <Stack marginTop="150px">
      <Stack className={classes.main_card_container}>
        <Stack direction="row" className={classes.btncontainer}>
          <Button>
            <ArrowBackIcon onClick={backWard} />
          </Button>
          <Button>
            <ArrowForwardIcon onClick={forWard} />
          </Button>
        </Stack>
        {CardData.slice(index, index + 4).map((item) => (
          <Card
            key={item.id}
            className={classes.card_container}
            style={{ backgroundColor: item.color }}
          >
            <CardContent>
              <input className={classes.input_btn} />
              <Typography className={classes.card_para}>
                {item.paragraph}
              </Typography>
              <Stack direction="row">
                <Button size="small" className={classes.card_btn}>
                  {item.btn}
                </Button>
              </Stack>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Stack>
  );
};

export default CardList;
