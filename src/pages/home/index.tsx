import React, { useEffect, useState } from "react";
import { Button, ButtonGroup, Carousel, ToggleButton } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import "react-slideshow-image/dist/styles.css";
import { getListBanner, getListMovies } from "../../services/actions/getListMoviesAction";
import { AppState } from "../../services/reducers";
import { FiPlayCircle } from "react-icons/fi";
import { AiOutlineInfoCircle } from "react-icons/ai";
// import Moment from "react-moment";
import MovieDetail from "./MovieDetail";
import logoNetFlix from "../../assets/images/Netflix_2015_logo.svg.png";

const Home = () => {
    const [listBannerData, setListBannerData] = useState([]);
    const [listMoviesData, setListMoviesData] = useState([]);
    const dispatch = useDispatch();
    const [category, setCategory] = useState<string>("GP00");
    const [name, setName] = useState<string>("");
    const [Page, setPage] = useState<number>(1);
    const [PageSize, setPageSize] = useState<number>(50);
    const categories = [
        { name: "Kinh dị", value: "GP00" },
        { name: "Chiến lược", value: "GP01" },
        { name: "Hành động", value: "GP02" },
        { name: "Hài hước", value: "GP03" },
        { name: "Hoạt hình", value: "GP04" },
        { name: "Truyền hình", value: "GP05" },
        { name: "Tình cảm", value: "GP06" },
    ];

    // useSelector
    const listBanner = useSelector((state: AppState) => state.listMovies.listBanner);
    const listMovies = useSelector((state: AppState) => state.listMovies.listMovies);

    useEffect(() => {
        dispatch(getListBanner());
        dispatch(
            getListMovies(
                name == ""
                    ? {
                          maNhom: category,
                          soTrang: Page,
                          soPhanTuTrenTrang: PageSize,
                      }
                    : {
                          maNhom: category,
                          tenPhim: name,
                          soTrang: Page,
                          soPhanTuTrenTrang: PageSize,
                      }
            )
        );
    }, [category]);

    useEffect(() => {
        if (listBanner?.length > 0) {
            setListBannerData(listBanner);
        }
    }, [listBanner]);

    useEffect(() => {
        if (listMovies?.items?.length > 0) {
            setListMoviesData(listMovies?.items);
        }
    }, [listMovies]);

    return (
        <div className="mv-home-container">
            <div className="mv-home-banner">
                <Carousel style={{ height: "100%" }}>
                    {listBannerData.map((item: any) => (
                        <Carousel.Item key={item.maBanner}>
                            <img className="d-block w-100" src={item.hinhAnh} alt="First slide" />
                        </Carousel.Item>
                    ))}
                </Carousel>
                <div className="mv-home-btn-container">
                    <Button variant="primary" className="mv-home-btn-book">
                        {" "}
                        <FiPlayCircle size={25} />
                        Book ticket
                    </Button>
                    <Button variant="primary" className="mv-home-btn-info">
                        {" "}
                        <AiOutlineInfoCircle size={25} /> More Info
                    </Button>
                </div>
            </div>
            {/* <img src={logoNetFlix} style={{height:'30px', width: '200px'}} /> */}
            <div className="mv-home-list-container container">
                <div className="mv-home-list-category">
                  <div className="abc">
                    {categories.map((item, idx) => (
                        <div className="category-link-container">
                          <span
                            className="category-link"
                            key={idx}
                            onClick={() => {
                                setCategory(item.value);
                            }}
                        >
                            {item.name}
                        </span>
                        </div>
                    ))}
                  </div>
                </div>
                <div className="mv-home-list row">
                    {listMoviesData.map((item: any) => (
                        <div
                            className="mv-home-list-item col-lg-3 d-flex flex-column"
                            key={item.maPhim}
                        >
                            <div className="mv-home-item">
                                <img src={item.hinhAnh} alt={item.tenPhim} />
                                <p className="name-movie">{item.tenPhim}</p>
                                <p className="comming">
                                    Ngày khởi chiếu:{" "}
                                    {/* <Moment format="YYYY/MM/DD">{item.ngayKhoiChieu}</Moment> */}
                                </p>
                                {/* <p className="rating">RATING: {item.danhGia}</p> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
