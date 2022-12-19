import React, { Suspense } from "react";
import { useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getListUser } from "../../services/actions/listUsersAction";
import { AppState } from "../../services/reducers";
import UserItem from "../../components/user-item";
import LazyLoad from "react-lazyload";
import Loading from "../../components/loading";

const UserManagement = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state: AppState) => state.listUsers.users);
  const loading = useSelector((state: AppState) => state.listUsers.loading);
  useEffect(() => {
    dispatch(
      getListUser({
        MaNhom: "GP01",
      })
    );
  }, []);

  return (
    <Container className="user-management">
      {loading ? (
        <Loading style="component" />
      ) : (
        <>
          <h1 className="text-light mv-user-management-title">
            User management
          </h1>
          {userData &&
            userData.map((user: any) => (
              <LazyLoad
                key={user.taiKhoan}
                height={50}
                offset={[-60, 100]}
                placeholder={<Loading />}
              >
                <UserItem data={user} />
              </LazyLoad>
            ))}
        </>
      )}
    </Container>
  );
};

export default UserManagement;
