export const ROUTES = {
  LOGIN: "/auth/login",
  REGISTER: "/auth/register",
  HOME: "/home",
  USERS: "/users",
  USER_DETAIL: "/user/:account",
};

export const ACCESS_TOKEN = "ACCESS_TOKEN";

export const BASE_URL = "https://movieapi.cyberlearn.vn/api";

export const ENDPOINTS = {
  LOGIN: "/QuanLyNguoiDung/DangNhap",
  REGISTER: "/QuanLyNguoiDung/DangKy",
  GET_LIST_BANNER: "/QuanLyPhim/LayDanhSachBanner",
  GET_LIST_USERS: "/QuanLyNguoiDung/LayDanhSachNguoiDung",
  EDIT_USER: "/QuanLyNguoiDung/CapNhatThongTinNguoiDung",
  DELETE_USER: "/QuanLyNguoiDung/XoaNguoiDung",
  GET_LIST_MOVIES: "/QuanLyPhim/LayDanhSachPhimPhanTrang",
};

export const userType = [
  {
    value: "KhachHang",
    label: "Khách hàng",
  },
  {
    value: "QuanTri",
    label: "Quản trị",
  },
];

export const groupType = [
  {
    value: "GP01",
    label: "GP01",
  },
  {
    value: "GP02",
    label: "GP02",
  },
  {
    value: "GP03",
    label: "GP03",
  },
  {
    value: "GP04",
    label: "GP04",
  },
  {
    value: "GP05",
    label: "GP05",
  },
  {
    value: "GP06",
    label: "GP06",
  },
];
