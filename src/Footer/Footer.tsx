import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import { useStyles } from "./FooterStyles";

const Footer = () => {
  const classes = useStyles();
  return (
    <Stack className={classes.main_container}>
      <Stack className={classes.container}>
        {/* //---------------------// */}
        <Stack paddingLeft="40px">
          <Typography className={classes.para}>
            ea elit quis aute nulla sit exercitation
          </Typography>
          <Typography className={classes.paragraph}>
            ea elit quis aute nulla sit exercitation culpa <br /> elit
            sit eu sunt ea id et laboris et enim <br /> deserunt nulla
            aliqua
          </Typography>
          <Stack direction="row">
            <Button
              variant="text"
              size="small"
              className={classes.start_btn}
            >
              Get Started
            </Button>
          </Stack>
        </Stack>
        <hr className={classes.line} />
        {/* //---------------------// */}
        <Stack>
          <Stack className={classes.list_details}>
            <Stack>
              <Typography className={classes.list_data}>
                Investors
              </Typography>
              <Typography className={classes.list_data}>
                News
              </Typography>
              <Typography className={classes.list_data}>
                Blog s
              </Typography>
              <Typography className={classes.list_data}>
                Case Study
              </Typography>
            </Stack>
            <Stack>
              <Typography className={classes.list_data}>
                Team
              </Typography>
              <Typography className={classes.list_data}>
                Pricing
              </Typography>
              <Typography className={classes.list_data}>
                Support
              </Typography>
              <Typography className={classes.list_data}>
                Product Portfolio
              </Typography>
            </Stack>
            <Stack>
              <Typography className={classes.list_data}>
                Compliance
              </Typography>
              <Typography className={classes.list_data}>
                Security
              </Typography>
              <Typography className={classes.list_data}>
                Contact us
              </Typography>
            </Stack>
          </Stack>
          <hr className={classes.line} />
          <Stack className={classes.media}>
            <Typography className={classes.title}>
              Sales & support
            </Typography>
            <Stack className={classes.social_media}>
              <PhoneInTalkIcon className={classes.icon} />
              <Typography className={classes.info}>
                9343248857
              </Typography>
            </Stack>
            <Stack className={classes.social_media}>
              <MailOutlineIcon className={classes.icon} />
              <Typography className={classes.info}>
                support@crediwatch.in
              </Typography>
            </Stack>
          </Stack>
        </Stack>

        {/* //---------------------// */}
        <Stack>
          <Typography className={classes.title}>
            Existing Users
          </Typography>
          <Stack direction="row">
            <Button
              variant="outlined"
              size="small"
              className={classes.login_btn}
            >
              Login
            </Button>
          </Stack>
          <Typography className={classes.title}>
            Connect with us
          </Typography>
          <Stack className={classes.social_icons}>
            <FacebookIcon className={classes.icons} />
            <TwitterIcon className={classes.icons} />
            <LinkedInIcon className={classes.icons} />
          </Stack>
        </Stack>
      </Stack>
      <hr className={classes.line} />
      <Typography className={classes.copy_right}>
        2020 Crediwatch. All rights reserved.
      </Typography>
    </Stack>
  );
};

export default Footer;
