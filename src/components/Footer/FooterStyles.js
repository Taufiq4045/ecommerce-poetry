import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  footer: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "rgb(128,128,128, 5)",
    justifyContent: "center",
    alignItems: "center",
   // fontSize: "1.3rem",
    fontWeight: "700",
  },
  
  contacts: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "1rem",
    fontSize: "1.7rem"
  },
}));