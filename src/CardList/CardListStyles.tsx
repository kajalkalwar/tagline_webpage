//@ts-nocheck

import { makeStyles } from "@mui/styles";
export const useStyles = makeStyles({
  main_card_container: {
    display: "flex",
    flexDirection: "row !important",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  },

  btncontainer: {
    position: "absolute",
    top: "-55px",
    right: "110px",
  },

  card_container: {
    width: "295px",
    marginRight: "20px",
    color: "#ffffff !important",
    transition: "transform 0.5s ease-in-out",
    "&:hover": {
      transform: "translate(0px, 20px)",
      transition: "transform 0.5s ease-in-out",
      boxShadow: "0px 0px 10px 2px rgba(0,0,0,0.4) !important",
    },
  },

  input_btn: {
    height: "65px",
    width: "180px",
    backgroundColor: "#ffffff !important",
    boxShadow: "0px 0px 3px rgba(0,0,0,0.5)",
    marginTop: "10px",
  },

  card_para: {
    fontSize: "18px !important",
    fontWeight: "600 !important",
    padding: "20px",
    height: "130px",
  },

  card_btn: {
    fontSize: "18px !important",
    fontWeight: "700 !important",
    color: "#ffffff !important",
    textTransform: "capitalize !important",
    padding: "20px 0px 0px 20px !important",
  },
});
