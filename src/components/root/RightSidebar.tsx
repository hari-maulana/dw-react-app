import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { theme } from "../../Themes";

const RightSidebar = () => {
  return (
    <>
      <Box border={"1px solid"} borderRadius={"5px"} sx={{ padding: "10px", borderColor: theme.palette.divider }}>
        <Box>
          <CardActionArea>
              <CardMedia
                component="img"
                height="70px"
                image="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Flag_of_North_Korea.svg/1920px-Flag_of_North_Korea.svg.png"
                alt="green iguana"
                sx={{
                  width: "100%",
                  borderRadius: "5px",
                  border: "",
                }}
              />
              <CardMedia
                component="img"
                height="70px"
                image="https://www.pngkey.com/png/detail/22-223848_businessman-vector-person-logo-png.png"
                alt="people"
                sx={{
                  width: "70px",
                  position: "absolute",
                  zIndex: "1",
                  left: "24px",
                  top: "36px",
                  borderRadius: "50%",
                  border: "6px solid",
                  borderColor: theme.palette.background.default,
                }}
              />
              <CardContent sx={{ marginTop: "20px" }}>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  sx={{ marginBottom: "-2px" }}
                >
                  Admin
                </Typography>
                <Typography
                  variant="caption"
                  color="text.secondary"
                  sx={{ fontWeight: "" }}
                >
                  @admin
                </Typography>
                <Typography variant="body2" color="">
                  Lorem ipsum dolor sit amet consectetur
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Box display={"flex"} justifyContent={"space-between"} sx={{ width: "100%" }}>
                <Box display={"flex"}>
                  <Typography variant="body2" sx={{color: "primary.main"}}>100</Typography>
                  <Typography variant="body2" sx={{ marginRight: "10px", marginLeft: "10px", fontWeight: "200" }}>Following</Typography>
                  <Typography variant="body2" sx={{color: "primary.main"}} >0</Typography>
                  <Typography variant="body2" sx={{ marginLeft: "10px", fontWeight: "200" }}>Followers</Typography>
                </Box>
                <Box bgcolor={""}>
                  <Button
                    size="small"
                    sx={{
                      marginLeft: "auto",
                      border: "1px solid",
                      borderColor: "white",
                      color: "white",
                      borderRadius: "15px",
                      textTransform: "none",
                      paddingLeft: "10px",
                      paddingRight: "10px",
                    }}
                  >
                    Edit Profile
                  </Button>
                </Box>
              </Box>
            </CardActions>

        </Box>
      </Box>













      {/* <Card>
        <Box bgcolor={"black"}>
          <Card sx={{ maxWidth: 400, padding: "1rem"}}>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
            >
              My Profile
            </Typography>
            <CardActionArea>
              <CardMedia
                component="img"
                height="70px"
                image="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Flag_of_North_Korea.svg/1920px-Flag_of_North_Korea.svg.png"
                alt="green iguana"
                sx={{
                  width: "100%",
                  borderRadius: "5px",
                  border: "",
                }}
              />
              <CardMedia
                component="img"
                height="70px"
                image="https://www.pngkey.com/png/detail/22-223848_businessman-vector-person-logo-png.png"
                alt="people"
                sx={{
                  width: "70px",
                  position: "absolute",
                  zIndex: "1",
                  left: "10px",
                  top: "30px",
                  borderRadius: "50%",
                  border: "3px solid",
                  borderColor: "white",
                }}
              />
              <CardContent sx={{ marginTop: "20px" }}>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  sx={{ marginBottom: "-2px" }}
                >
                  Admin
                </Typography>
                <Typography
                  variant="caption"
                  color="text.secondary"
                  sx={{ fontWeight: "" }}
                >
                  @admin
                </Typography>
                <Typography variant="body2" color="">
                  Lorem ipsum dolor sit amet consectetur
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Box display={"flex"} justifyContent={"space-between"} sx={{ width: "100%" }}>
                <Box display={"flex"}>
                  <Typography variant="body2" sx={{color: "primary.main"}}>100</Typography>
                  <Typography variant="body2" sx={{ marginRight: "10px", marginLeft: "10px", fontWeight: "200" }}>Following</Typography>
                  <Typography variant="body2" sx={{color: "primary.main"}} >0</Typography>
                  <Typography variant="body2" sx={{ marginLeft: "10px", fontWeight: "200" }}>Followers</Typography>
                </Box>
                <Box bgcolor={""}>
                  <Button
                    size="small"
                    sx={{
                      marginLeft: "auto",
                      border: "1px solid",
                      borderColor: "white",
                      color: "white",
                      borderRadius: "15px",
                      textTransform: "none",
                      paddingLeft: "10px",
                      paddingRight: "10px",
                    }}
                  >
                    Edit Profile
                  </Button>
                </Box>
              </Box>
            </CardActions>
          </Card>
        </Box>
      </Card> */}
    </>
  );
};

export default RightSidebar;
