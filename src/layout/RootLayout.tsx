import { Box, Typography } from "@mui/material";
import Feed from "../components/root/Feed";
import LeftSidebar from "../components/root/LeftSidebar";
import RightSidebar from "../components/root/RightSidebar";
import { theme } from "../Themes";

const RootLayout = () => {
  return (
    <>
      <Box display={"flex"}>
        <Box flex={2}>
          <Box
            position={"sticky"}
            top={"0px"}
            sx={{
              marginTop: "0",
              zIndex: "1",
              paddingTop: "5px",
              borderRight: "1px solid",
              borderColor: theme.palette.divider,
              width: "100",
              height: "100vh",
              paddingLeft: "1rem",
              paddingRight: "1rem",
            }}
          >
            <LeftSidebar />
          </Box>
        </Box>
            {/*  */}
        <Box flex={4} bgcolor={""} style={{ height: "200vh" }}>
          <Box
            position={"sticky"}
            top={"0px"}
            sx={{
              backgroundColor: theme.palette.background.default,
              marginTop: "0",
              zIndex: "1",
              padding: "1rem",
              borderBottom: "1px solid",
              borderColor: theme.palette.divider,
              width: "100",
            }}
          >
            <Typography fontSize={"1.2rem"} fontWeight={"bold"}>
              Home
            </Typography>
          </Box>
          <Feed />
        </Box>
            {/*  */}
        <Box flex={3} bgcolor={""}>
          <Box
            position={"sticky"}
            top={"0px"}
            sx={{
              backgroundColor: "",
              marginTop: "0",
              zIndex: "1",
              width: "100",
              height: "100vh",
              borderLeft: "1px solid",
              borderColor: theme.palette.divider,
              paddingTop: "1rem",
              paddingLeft: "2rem",
              paddingRight: "2rem",
            }}
          >
            <RightSidebar />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default RootLayout;
