import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { tabContent } from "../data/data";
import { Button, Card, CardContent, Stack } from "@mui/material";
import { useStyles } from "./TaglineStyles";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (
    event: React.SyntheticEvent,
    newValue: number
  ) => {
    setValue(newValue);
  };

  return (
    <>
      <Box className={classes.container}>
        <Typography className={classes.title}>Industries</Typography>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            textColor="inherit"
            className={classes.tabs1234}
          >
            {tabContent.map((tab, index) => (
              <Tab
                label={tab.label}
                {...a11yProps(index)}
                key={index}
              />
            ))}
          </Tabs>
        </Box>

        {tabContent.map((tab, index) => (
          <TabPanel value={value} index={index} key={index}>
            <Stack className={classes.tab_container}>
              <Stack>
                <Typography className={classes.head}>
                  {tab.title}
                </Typography>
                <Typography className={classes.paragraph}>
                  {tab.para}
                </Typography>
                <Stack direction="row">
                  <Button variant="text" className={classes.btn}>
                    View Solutions <HorizontalRuleIcon />
                  </Button>
                </Stack>
              </Stack>
              <Stack className={classes.image_container}>
                <img
                  src={tab.pic1}
                  alt="man with dollar"
                  height="188px"
                  width="223px"
                  className={classes.img}
                />

                <Card className={classes.card_details}>
                  <CardContent>
                    <Typography className={classes.card_title}>
                      solution name
                    </Typography>
                    <Typography className={classes.card_para}>
                      Case Study Line Goes Here. <br /> Can be two
                      lines also
                    </Typography>
                    <Button size="small" className={classes.card_btn}>
                      Learn more
                    </Button>
                    <Button size="small" className={classes.card_btn}>
                      Watch Video
                    </Button>
                  </CardContent>
                </Card>

                <img
                  src={tab.pic2}
                  alt="girl with phone"
                  className={classes.image}
                />
              </Stack>
            </Stack>
          </TabPanel>
        ))}
      </Box>
    </>
  );
}
