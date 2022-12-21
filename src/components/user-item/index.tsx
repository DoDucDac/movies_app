import AvatarUser from "../avatar";
import * as Icon from "react-bootstrap-icons";
import { Col, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants";

const UserItem = ({ data }: any) => {
  const navigate = useNavigate();

  const navigateToDetail = () => {
    navigate(`/user/${data.taiKhoan}`, {
      state: {
        ...data,
      },
    });
  };

  return (
    <Row onClick={navigateToDetail}>
      <Col lg={4} className="d-flex">
        <AvatarUser size={50} />
        <div className="user-item-box">
          <span className="user-info">{data.hoTen}</span>
          <span className="user-role">{data.maLoaiNguoiDung}</span>
        </div>
      </Col>
      <Col lg={4} className="align-middle">
        <span className="user-info">{data.email}</span>
      </Col>
      <Col lg={2} className="align-middle">
        <span className="user-info">{data.soDt}</span>
      </Col>
      <Col lg={2} className="align-middle">
        <div className="user-icon-box">
          <Icon.Pencil
            className="user-icon"
            size={18}
            onClick={navigateToDetail}
          />
          <Icon.Trash className="user-icon" size={18} />
        </div>
      </Col>
    </Row>
  );
};

export default UserItem;
