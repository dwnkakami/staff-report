import React, { useState, useEffect, Component} from "react";
import {
  Grid,
  CircularProgress,
  Typography,
  Button,
  Tabs,
  Tab,
  TextField,
  Fade,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  MenuItem
} from "@material-ui/core";
import { withRouter } from "react-router-dom";
import axios from "axios";
import NumberFormat from 'react-number-format';
import PropTypes from 'prop-types';
// import classnames from "classnames";

// styles
import useStyles from "./styles";

// logo
import logo from "./logo.svg";
// import google from "../../images/google.svg";

// context
import { useUserDispatch, loginUser, registerUser } from "../../context/UserContext";
import Validation from "./Validation";

function NumberFormatCustom(props) {
  const { inputRef, onChange, ...other } = props;
  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      allowNegative={false}
      decimalSeparator={false}
      isNumericString
      maxLength="10"
    />
  );
}
NumberFormatCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

function Login(props) {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
    // const newValue = {id:loginValue, name:nameValue, role_id:role, password:passwordValue};

    // axios
    //     .post('/api/register', newValue)
    //     .then(response => {
    //         console.log(response.data);
    //     })
    //     .catch(() => {
    //         console.log('submit error');
    //     })

  };


  const handleClose = () => {
    setOpen(false);
  };

  const [check, setCheck] = useState(false);

  const add = () => {
      axios
        .get('./api/loginuser/' + loginValue)
        .then(response => {
          if(response.data.length >=1) {
          setCheck(true)
          window.alert('そのユーザーIDは既に登録されています。');
            } else {
                setCheck(false)
                submitAction();
            }})
        .catch(() => {
            console.log('connected error')
            window.alert('未入力項目があります。')
        })
  }

  const submitAction = () => {

    if((loginValue.length === 0) || (nameValue.length === 0) || (role.length === 0) || (passwordValue === 0)) {
          window.alert('未入力項目があります。')
    }　else {
        handleClickOpen()
        }
  }

  const submit = () => {
  
  const newValue = {id:loginValue, name:nameValue, role_id:role, password:passwordValue};
  
  if(submitValue === "1111"){
    alert("新しいユーザーが登録されました。")
    registerUser(
      userDispatch,
      passwordValue,
      props.history,
      setIsLoading,
      setError,
    )
    axios
        .post('/api/register', newValue)
        .then(response => {
            console.log(response.data);
        })
        .catch(() => {
            console.log('submit error');
        })    
  }else{
    setError(true)
    
  }
}


  const [posts, setPosts] = useState([]);

  useEffect(() => getRoleData());

  const getRoleData = () =>{
    if (posts.length === 0) {
      axios
        .get('/api/role/1')
        .then(response => {
          console.log([response.data]);
          setPosts(response.data);
        })
        .catch(() => {
          console.log('connected error');
        })
    }
  }

  const [role, setRole] = useState("")

  // const handleChange = (event) => {
  //   setRole(event.target.value);
  // };

 




  var classes = useStyles();

  // global
  var userDispatch = useUserDispatch();

  // local
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [activeTabId, setActiveTabId] = useState(0);
  const [nameValue, setNameValue] = useState("");
  const [loginValue, setLoginValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [submitValue, setSubmitValue] = useState("");
  const [msg, setMsg] = useState("ユーザーID・パスワードの入力に誤りがあるか、登録されていません。");

  return (
    <Grid container className={classes.container}>
      <div className={classes.logotypeContainer}>
        <img src={logo} alt="logo" className={classes.logotypeImage} />
        <Typography className={classes.logotypeText}>Staff Administration System</Typography>
      </div>
      <div className={classes.formContainer}>
        <div className={classes.form}>
          <Tabs
            value={activeTabId}
            onChange={(e, id) => {
              setError(false)
              setActiveTabId(id)
            }}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="ログイン" classes={{ root: classes.tab }} />
            <Tab label="ユーザー追加" classes={{ root: classes.tab }} />
          </Tabs>
          {activeTabId === 0 && (
            <React.Fragment>
              {/* <Typography variant="h3" className={classes.greeting}>
                ログインフォーム
              </Typography> */}
              {/* <Button size="large" className={classes.googleButton}>
                <img src={google} alt="google" className={classes.googleIcon} />
                &nbsp;Sign in with Google
              </Button> */}
              {/* <div className={classes.formDividerContainer}> */}
                {/* <div className={classes.formDivider} /> */}
                {/* <Typography className={classes.formDividerWord}>or</Typography> */}
                {/* <div className={classes.formDivider} /> */}
              {/* </div> */}
              <Fade in={error}>
              <Typography color="secondary" className={classes.errorMessage}>
                  {msg}
                </Typography>
              </Fade>
              <TextField
                id="id"
                InputProps={{
                  classes: {
                    underline: classes.textFieldUnderline,
                    input: classes.textField,  
                  },
                  inputComponent: NumberFormatCustom
                }}
                value={loginValue}
                onChange={e => {
                  setLoginValue(e.target.value);
                  let isValidation = Validation.formValidate("userid", e.target.value, setError, setMsg);
                }}
                margin="normal"
                placeholder="ユーザーID"
                fullWidth
              />
              <TextField
                id="password"
                InputProps={{
                  classes: {
                    underline: classes.textFieldUnderline,
                    input: classes.textField,
                  },
                }}
                value={passwordValue}
                onChange={e => setPasswordValue(e.target.value)}
                margin="normal"
                placeholder="パスワード"
                type="password"
                fullWidth
              />
              <div className={classes.formButtons}>
                {isLoading ? (
                  <CircularProgress size={26} className={classes.loginLoader} />
                ) : (
                  <Button
                    disabled={
                      loginValue.length === 0 || 
                      passwordValue.length === 0 
                    }
                    onClick={() => {
                      let isValidation =  Validation.formValidate("password", passwordValue, setError, setMsg);
                      console.log(setMsg)
                      if(!isValidation) return
                      loginUser(
                        userDispatch,
                        loginValue,
                        passwordValue,
                        props.history,
                        setIsLoading,
                        setError,
                      )
                    }}
                    variant="contained"
                    color="primary"
                    size="large"
                    fullWidth
                  >
                  ログインする
                  </Button>
                )}
                {/* <Button
                  color="primary"
                  size="small"
                  className={classes.forgetButton}
                >
                  パスワードをお忘れの場合はこちら
                </Button> */}
              </div>
            </React.Fragment>
          )}
          {activeTabId === 1 && (
            <React.Fragment>
              {/* <Typography variant="h3" className={classes.subGreeting}>
                ユーザーの追加
              </Typography> */}
              {/* <Fade in={error}>
                <Typography color="secondary" className={classes.errorMessage}>
                  Something is wrong with your login or password :(
                </Typography>
              </Fade> */}
              <TextField
                id="id"
                InputProps={{
                  classes: {
                    underline: classes.textFieldUnderline,
                    input: classes.textField,
                  },
                  inputComponent: NumberFormatCustom
                }}
                value={loginValue}
                onChange={e => {
                  setLoginValue(e.target.value);
                  let isValidation = Validation.formValidate("userid", e.target.value, setError, setMsg);
                }}
                // onChange={handleChange}
                margin="normal"
                placeholder="ユーザーID"
                fullWidth
              />
              <TextField
                id="name"
                InputProps={{
                  classes: {
                    underline: classes.textFieldUnderline,
                    input: classes.textField,
                  },
                }}
                value={nameValue}
                onChange={e => setNameValue(e.target.value)}
                margin="normal"
                placeholder="ユーザー名"
                type="text"
                fullWidth
              />
              {/* <TextField
                id="email"
                InputProps={{
                  classes: {
                    underline: classes.textFieldUnderline,
                    input: classes.textField,
                  },
                }}
                value={loginValue}
                onChange={e => setLoginValue(e.target.value)}
                margin="normal"
                placeholder="Email Adress"
                type="email"
                fullWidth
              /> */}
              <TextField
                id="password"
                InputProps={{
                  classes: {
                    underline: classes.textFieldUnderline,
                    input: classes.textField,
                  },
                }}
                value={passwordValue}
                onChange={e => setPasswordValue(e.target.value)}
                margin="normal"
                placeholder="パスワード"
                type="password"
                fullWidth
              />
              <Fade in={error}>
              <Typography color="secondary" className={classes.errorMessage}>
                  {msg}
                </Typography>
              </Fade>
          
          <TextField
          id="standard-select-currency"
          select
          label="Select"
          value={role}
          onChange={e => setRole(e.target.value)}
          helperText="役割を選んでください"
        >
          {posts.map((option) => (
            <MenuItem key={option.id} value={option.id}>
              {option.name}
            </MenuItem>
          ))}
        </TextField>
              <div className={classes.creatingButtonContainer}>
                {isLoading ? (
                  <CircularProgress size={26} />
                ) : (
                  <Button
                  disabled={
                    loginValue.length === 0 || 
                    passwordValue.length === 0 ||
                    isNaN(Number(loginValue))
                  }
                    onClick={add}
                    
                    size="large"
                    variant="contained"
                    color="primary"
                    fullWidth
                    className={classes.createAccountButton}
                  >
                    追加する
                  </Button>
                )}
              </div>
              <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">警告</DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    管理者のパスワードを入力してください
                  </DialogContentText>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="managePassword"
                    label="パスワード"
                    type="password"
                    fullWidth
                    onChange={e => setSubmitValue(e.target.value)}
                    value={submitValue}
                  />
                </DialogContent>
                <DialogActions>
                <Fade in={error}>
                <Typography color="error" className={classes.errorMessage}>
                  パスワードが間違っています。
                </Typography>
              </Fade>
                  <Button onClick={handleClose} color="primary">
                    キャンセル
                  </Button>
                  <Button  onClick={submit} color="primary">
                    確認
                  </Button>
                </DialogActions>
              </Dialog>
              {/* <div className={classes.formDividerContainer}>
                <div className={classes.formDivider} />
                <Typography className={classes.formDividerWord}>or</Typography>
                <div className={classes.formDivider} />
              </div> */}
              {/* <Button
                size="large"
                className={classnames(
                  classes.googleButton,
                  classes.googleButtonCreating,
                )}
              >
                <img src={google} alt="google" className={classes.googleIcon} />
                &nbsp;Sign in with Google
              </Button> */}
            </React.Fragment>
          )}
        </div>
        <Typography color="primary" className={classes.copyright}>
          © 2013-2020 force corp. All rights reserved.
        </Typography>
      </div>
    </Grid>
  );
}

export default withRouter(Login);
