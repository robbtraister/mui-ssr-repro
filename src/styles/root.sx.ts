import { styled } from "@mui/material";

export const Root = styled("html")({
  height: "100%",
  margin: 0,
  // overscroll-behavior on html works in FF/Safari
  overscrollBehavior: "none",
  width: "100%",

  body: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    margin: 0,
    // overscroll-behavior on body works in Chromium
    overscrollBehavior: "none",
    width: "100%",
  },
});

export const App = styled("div")(({ theme }) => ({
  backgroundColor: "#f00",
  display: "flex",
  flexDirection: "row",
  height: "100%",
  margin: 0,
  padding: 0,
  width: "100%",
}));
