import { useState } from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
  FormGroup,
} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants";
import { registerRequest } from "../../services/actions/registerAction";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const [groupCode, setGroupCode] = useState("");

  const handleRegister = (e: any) => {
    e.preventDefault();

    dispatch(
      registerRequest({
        taiKhoan: account,
        matKhau: password,
        email: email,
        soDt: phoneNumber,
        maNhom: groupCode,
        hoTen: fullName,
      })
    );
    setTimeout(() => {
      navigate(ROUTES.LOGIN);
    }, 1500);
  };

  return (
    <Container className="mv-auth-form">
      <div className="mb-5 text-center">
        <h1 className="mv-auth-title ">welcome to netflix</h1>
      </div>
      <Form onSubmit={handleRegister}>
        <FormGroup className="mv-auth-input">
          <FormControl
            value={fullName}
            onChange={(e: any) => setFullName(e.target.value)}
            required
            type="text"
            placeholder="full name"
          />
        </FormGroup>

        <FormGroup className="mv-auth-input">
          <FormControl
            value={phoneNumber}
            onChange={(e) => {
              if (e.target.value && !/[0-9]/.test(e.target.value)) {
                e.preventDefault();
              } else {
                setPhoneNumber(e.target.value);
              }
            }}
            required
            type="text"
            placeholder="phone number"
          />
        </FormGroup>

        <FormGroup className="mv-auth-input">
          <FormControl
            value={email}
            onChange={(e: any) => setEmail(e.target.value)}
            required
            type="email"
            placeholder="your email"
          />
        </FormGroup>

        <FormGroup className="mv-auth-input">
          <FormControl
            value={account}
            onChange={(e: any) => setAccount(e.target.value)}
            required
            type="text"
            placeholder="account name"
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

        <FormGroup className="mv-auth-input">
          <FormControl
            value={groupCode}
            onChange={(e: any) => setGroupCode(e.target.value)}
            type="text"
            placeholder="group code"
          />
        </FormGroup>

        <Link to={ROUTES.LOGIN} className="mv-sign-up-link">
          login now
        </Link>

        <div className="text-center">
          <Button type="submit">
            <span className="mv-auth-text-btn">Register</span>
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default Register;
