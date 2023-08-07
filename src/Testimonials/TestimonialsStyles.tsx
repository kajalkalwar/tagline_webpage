//@ts-nocheck
import { makeStyles } from "@mui/styles";
export const useStyles = makeStyles({
  title: {
    fontSize: "30px !important",
    fontWeight: "600 !important",
    textAlign: "center",
    color: "#1B1B1B !important",
  },
  btncontainer: {
    position: "absolute",
    right: "230px",
  },

  main_card: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "80px",
    position: "relative",
  },
  btn_container: {
    position: "absolute",
    right: "230px",
    top: "-40px",
  },

  card_container: {
    backgroundColor: "#F4FBFB !important",
    width: "1000px",
    borderRadius: "16px !important",
  },

  card_content: {
    display: "flex",
    flexDirection: "row !important",
  },

  card_image: {
    width: "310px",
    height: "364px",
    objectFit: "contain !important",
  },

  card_details: {
    display: "flex",
    justifyContent: "center",
  },
  card_paragraph: {
    fontSize: "18px !important",
    fontWeight: "400 !important",
    padding: "0px 80px 50px 50px",
  },
  card_info: {
    fontSize: "16px !important",
    fontWeight: "600 !important",
    paddingLeft: "50px",
  },
});
