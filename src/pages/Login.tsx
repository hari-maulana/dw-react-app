
import { Box, Container, Typography, Link } from "@mui/material";
import InputField from "../components/commons/InputField";
import CommonButton from "../components/commons/CommonButton";
import LogoBrand from "../components/commons/LogoBrand";


function Login() {
  return (
    <Container sx={{ backgroundColor: "", height: "100vh" }}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        
        <Container maxWidth="xs"
            sx={{ display: "flex", 
                flexDirection: "column", 
                backgroundColor: "",
                margin: "auto auto",
            }}
        >
        <LogoBrand />
        <Typography variant="h4" sx={{margin: "15px 0"}}>Ascend your Journey to the Next Level!</Typography>
        <InputField placeholder="Email*" type="email"/>
        <InputField placeholder="Password*" type="password"/>
        <Typography alignSelf={"end"} sx={{marginTop: "5px"}}><Link onClick={() => window.location.href = "/forgot"} color={"#ffffff"} sx={{ ":hover": {color: "#F6EEDF", cursor: "pointer"}}}>Forgot password?</Link></Typography>
        <CommonButton text="Login" />
        <Typography variant="h6" sx={{margin: "15px 0"}}>Don't have any account yet? <Link onClick={() => window.location.href = "/register"} sx={{color: "FFD31D", textDecoration: "none", ":hover": {color: "#F6EEDF", cursor: "pointer"}}}>Register</Link></Typography>
        </Container>
      </Box>
    </Container>
  );
}

export default Login;
