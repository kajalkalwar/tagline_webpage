import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import { useStyles } from "./NavbarStyles";
//@ts-ignore
import girl from "../Assets/girl.png";

const Navbar = () => {
  const classes = useStyles();
  return (
    <Stack className={classes.nav_container}>
      <Stack className={classes.container}>
        <Stack>
          <Button
            variant="outlined"
            size="small"
            className={classes.logo_btn}
          >
            Logo
          </Button>
        </Stack>
        <Stack className={classes.nav_data}>
          <li>Platform</li>
          <li>Solutions</li>
          <li>Partners</li>
          <li>Company</li>
          <li>Blogs</li>
          <li>Careers</li>
          <li>Sign in</li>
        </Stack>
        <Stack>
          <Button
            variant="outlined"
            size="small"
            className={classes.request_btn}
          >
            Request a demo
          </Button>
        </Stack>
      </Stack>
      <Stack className={classes.image_container}>
        <Stack>
          <Typography className={classes.title}>
            Quis Ipsum Cea <br /> Lorem Ipsum
          </Typography>
          <Typography className={classes.para}>
            Company provides lenders, businesses with <br />
            actionable credit intelligence on private entities they
            <br />
            need to improve trust and increase their lending and
            <br />
            trading activity.
          </Typography>
          <Typography className={classes.watch_video}>
            Watch in <br />
            Action
          </Typography>
        </Stack>
        <Stack>
          <img
            src={girl}
            alt="girl with laptop"
            height="336px"
            width="647px"
          />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Navbar;
