import { useEffect, useState } from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
  FormGroup,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import AvatarUser from "../../components/avatar";
import { groupType, ROUTES, userType } from "../../constants";
import {
  editUser,
  editUserFailure,
} from "../../services/actions/listUsersAction";
import { AppState } from "../../services/reducers";
import { showSuccessMessage } from "../../utils/messageUtils";

const UserDetail = () => {
  const { state } = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const editSuccess = useSelector(
    (state: AppState) => state.listUsers.editSuccess
  );
  const [account, setAccount] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [userTypeSelected, setUserTypeSelected] = useState("");
  const [groupTypeSelected, setGroupTypeSelected] = useState("GP01");

  useEffect(() => {
    if (state) {
      setAccount(state.taiKhoan);
      setFullName(state.hoTen);
      setPassword(state.matKhau);
      setEmail(state.email);
      setPhoneNumber(state.soDt);
      setUserTypeSelected(state.maLoaiNguoiDung);
    }
  }, [state]);

  useEffect(() => {
    if (editSuccess) {
      setAccount("");
      setFullName("");
      setPassword("");
      setEmail("");
      setPhoneNumber("");
      setUserTypeSelected("");
      navigate(ROUTES.USERS);
      dispatch(editUserFailure());
    }
  }, [editSuccess]);

  const handleEdit = (e: any) => {
    e.preventDefault();
    dispatch(
      editUser({
        taiKhoan: account,
        matKhau: password,
        email: email,
        soDt: phoneNumber,
        maNhom: groupTypeSelected,
        maLoaiNguoiDung: userTypeSelected,
        hoTen: fullName,
      })
    );
  };

  return (
    <Container className="mv-auth-form px-5">
      <div className="text-center">
        <AvatarUser size={100} />
      </div>
      <Form className="mt-5" onSubmit={handleEdit}>
        <FormGroup className="mv-edit-user-box">
          <Form.Label className="mv-label">Account</Form.Label>
          <FormControl
            value={account}
            onChange={(e: any) => setAccount(e.target.value)}
            required
            type="text"
            className="w-100"
          />
        </FormGroup>

        <FormGroup className="mv-edit-user-box">
          <Form.Label className="mv-label">Full name</Form.Label>
          <FormControl
            value={fullName}
            onChange={(e: any) => setFullName(e.target.value)}
            required
            type="text"
            className="w-100"
          />
        </FormGroup>

        <FormGroup className="mv-edit-user-box">
          <Form.Label className="mv-label">Passsword</Form.Label>
          <FormControl
            value={password}
            onChange={(e: any) => setPassword(e.target.value)}
            required
            type="password"
            className="w-100"
          />
        </FormGroup>

        <FormGroup className="mv-edit-user-box">
          <Form.Label className="mv-label">Email</Form.Label>
          <FormControl
            value={email}
            onChange={(e: any) => setEmail(e.target.value)}
            required
            type="email"
            className="w-100"
          />
        </FormGroup>

        <FormGroup className="mv-edit-user-box">
          <Form.Label className="mv-label">Phone Number</Form.Label>
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
            className="w-100"
          />
        </FormGroup>

        <FormGroup className="mv-edit-user-box">
          <Form.Label className="mv-label">Type of user</Form.Label>
          <Form.Select
            aria-label="Default select example"
            onChange={(e) => {
              setUserTypeSelected(e.target.value);
            }}
          >
            {userType.map((type) => (
              <>
                {type.value == state.maLoaiNguoiDung ? (
                  <option>{type.label}</option>
                ) : (
                  <option value={type.value}>{type.label}</option>
                )}
              </>
            ))}
          </Form.Select>
        </FormGroup>

        <FormGroup className="mv-edit-user-box">
          <Form.Label className="mv-label">Group type</Form.Label>
          <Form.Select
            aria-label="Default select example"
            onChange={(e) => {
              setGroupTypeSelected(e.target.value);
            }}
          >
            {groupType.map((type, index) => (
              <>
                {index === 0 ? (
                  <option>{type.label}</option>
                ) : (
                  <option value={type.value}>{type.label}</option>
                )}
              </>
            ))}
          </Form.Select>
        </FormGroup>

        <div className="text-center mt-5">
          <Button type="submit">
            <span className="mv-auth-text-btn">Edit</span>
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default UserDetail;
