//@ts-nocheck

import { makeStyles } from "@mui/styles";
export const useStyles = makeStyles({
  container: {
    backgroundColor: " #F4FBFB",
    padding: "80px 50px 0px 100px",
    textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  },

  title: {
    fontSize: "12px !important",
    fontWeight: "700 !important",
    color: "#077F8D",
    textTransform: "uppercase",
    marginBottom: "20px !important",
  },

  tab_container: {
    display: "flex ",
    flexDirection: "row !important",
    paddingTop: "60px",
    justifyContent: "space-between",
  },

  head: {
    fontSize: "32px !important",
    fontWeight: "600 !important",
    height: "71px",
    width: "326px",
  },

  paragraph: {
    fontSize: "20px !important",
    fontWeight: "400 !important",
    margin: "40px 0px !important",
    height: "112px",
    width: "463px",
  },
  btn: {
    fontWeight: "600 !important",
    fontSize: "14px !important",
    color: "#000000 !important",
  },

  image_container: {
    display: "flex",
    flexDirection: "row !important",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },

  img: {
    position: "absolute",
    bottom: "-55px",
    right: "460px",
    zIndex: "1",
  },

  card_details: {
    padding: "20px 0px 0px 15px",
    height: "195px",
    width: "320px",
    position: "absolute",
    right: "190px",
    bottom: "-30px",
  },
  image: {
    objectFit: "cover",
    height: "360px",
    width: "300px",
  },

  card_title: {
    fontSize: "11px !important",
    fontWeight: "500 !important",
    color: "#6F6E6E",
  },
  card_para: {
    fontSize: "20px !important",
    fontWeight: "400 !important",
    margin: "10px 0px !important",
  },

  card_btn: {
    fontSize: "12px !important",
    fontWeight: "500 !important",
    textTransform: "capitalize !important",
    cursor: "pointer",
  },
  tabs1234: {
    [`& .css-heg063-MuiTabs-flexContainer`]: {
      display: "flex",
      justifyContent: "space-between",
    },
    "& span": {
      width: "23% !important",
      color: "#000000",
    },
    "& svg": {
      color: "#A74170",
      fontSize: "32px",
    },

    [`& .css-cjctlb-MuiButtonBase-root-MuiTab-root`]: {
      fontSize: "16px",
      textTransform: "capitalize",
    },

    [`& .css-1aquho2-MuiTabs-indicator`]: {
      backgroundColor: "#000000 !important",
    },
  },
});
