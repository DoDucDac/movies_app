import { useEffect, useState } from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
  FormGroup,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import MVLogo from "../../assets/images/logo.png";
import { ROUTES } from "../../constants";
import { userLogin } from "../../services/actions/loginAction";
import { AppState } from "../../services/reducers";

const Login = () => {
  const dispatch = useDispatch();
  const loginSuccess = useSelector(
    (state: AppState) => state.userInfo.loginSuccess
  );
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: any) => {
    e.preventDefault();
    dispatch(
      userLogin({
        taiKhoan: account,
        matKhau: password,
      })
    );
    // setTimeout(() => {
    //   navigate(ROUTES.HOME);
    // }, 1500);
  };

  useEffect(() => {
    if (loginSuccess) {
      navigate(ROUTES.HOME);
    }
  }, [loginSuccess]);

  return (
    <Container className="mv-auth-form">
      <div className="mb-5 text-center">
        <img src={MVLogo} alt="mv-logo" className="mv-logo" />
        <h1 className="mv-auth-title">sign in</h1>
      </div>
      <Form onSubmit={handleLogin}>
        <FormGroup className="mv-auth-input">
          <FormControl
            value={account}
            onChange={(e: any) => setAccount(e.target.value)}
            required
            type="text"
            placeholder="email or your account"
          />
        </FormGroup>

        <FormGroup className="mv-auth-input">
          <FormControl
            value={password}
            onChange={(e: any) => setPassword(e.target.value)}
            required
            type="password"
            placeholder="password"
          />
        </FormGroup>

        <Link to={ROUTES.REGISTER} className="mv-sign-up-link">
          sign up now
        </Link>

        <div className="text-center">
          <Button type="submit">
            <span className="mv-auth-text-btn">Login</span>
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default Login;
