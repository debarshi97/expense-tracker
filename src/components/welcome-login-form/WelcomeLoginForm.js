import React, { useState } from "react";
import Box from "@mui/material/Box";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "./WelcomeLoginForm.css";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { string_resources } from "../../resources/Strings";

const customTheme = createTheme({
  palette: {
    primary: {
      main: "#682C94",
    },
  },
});

const WelcomeLoginForm = () => {
  const [inputField, setInputField] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (event) => {
    if(event.target.name === "email"){
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if ( re.test(inputField.email) ) {
            // this is a valid email address
            // call setState({email: email}) to update the email
            // or update the data in redux store.
        }
        else {
            // invalid email, maybe show an error to the user.
        }
    }
    console.log("Object is ", inputField.password);
  };

  const handleSignup = (event) => {
    event.preventDefualt();
    alert("Signup handle");
  };

  const handleChange = (event) => {
    setInputField({...inputField, [event.target.name]: event.target.value });
  };

  return (
    <div className="login-form-container">
      <ThemeProvider theme={customTheme}>
        <form>
          <TextField
            label={string_resources.WEL_PAGE.INPUT_PLACEHOLDER_EMAIL_ADDRESS}
            type="email"
            name="email"
            value={inputField.email}
            onChange={handleChange}
            variant="standard"
            fullWidth
          />
          <br />
          <TextField
            label={string_resources.WEL_PAGE.INPUT_PLACEHOLDER_Password}
            type="password"
            name="password"
            value={inputField.password}
            onChange={handleChange}
            variant="standard"
            fullWidth
          />
          <br />
          <br />
          <br />

          <Button
            sx={{ pl: 4, pr: 4, mr: 8 }}
            color="primary"
            onClick={handleLogin}
            variant="contained"
          >
            Login
          </Button>
          <Button
            sx={{ pl: 4, pr: 4 }}
            color="primary"
            onClick={handleSignup}
            variant="outlined"
          >
            Signup
          </Button>
        </form>
      </ThemeProvider>
    </div>
  );
};

export default WelcomeLoginForm;
