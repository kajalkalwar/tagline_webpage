//@ts-nocheck
import { makeStyles } from "@mui/styles";
export const useStyles = makeStyles({
  nav_container: {
    backgroundColor: "#24336A !important",
    paddingTop: "80px",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  },
  container: {
    display: "flex",
    flexDirection: "row !important",
    alignItems: "center",
    color: "#ffffff",
    justifyContent: "space-evenly",
  },

  logo_btn: {
    backgroundColor: "#ffffff !important",
    height: "21px",
    width: "121px",
    fontSize: "12px !important",
    fontWeight: "400 !important",
    color: "#000000 !important",
    textTransform: "capitalize !important",
    border: "none !important",
  },

  nav_data: {
    display: "flex",
    flexDirection: "row !important",
    listStyle: "none",
    fontSize: "14px ",
    fontWeight: "400 !important",
    textTransform: "uppercase",
    alignItems: "center",
    gap: "25px",
    marginLeft: "100px",
  },

  request_btn: {
    color: "#ffffff !important",
    fontSize: "14px ",
    fontWeight: "400 !important",
    height: "46px",
    width: "162px",
    border: "1px solid #B0BF40 !important",
  },

  image_container: {
    display: "flex",
    flexDirection: "row !important",
    alignItems: "center",
    paddingTop: "60px",
    color: "#ffffff",
    justifyContent: "space-evenly",
  },
  title: {
    fontSize: "59px !important",
    fontWeight: "700 !important",
    lineHeight: "63px !important",
  },
  para: {
    fontSize: "20px !important",
    fontWeight: "400 !important",
    marginTop: "30px !important",
  },
  watch_video: {
    fontSize: "16px !important",
    fontWeight: "600 !important",
    margin: "50px 0px 30px 80px !important",
  },

  "@media (max-width: 600px)": {
    container: {
      display: "flex",
      flexDirection: "row !important",
      alignItems: "center",
      color: "#ffffff",
      justifyContent: "space-evenly",
    },
  },
});
