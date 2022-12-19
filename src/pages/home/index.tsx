import { useEffect, useState } from "react";
import { Button, Carousel } from "react-bootstrap";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { FiPlayCircle } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import "react-slideshow-image/dist/styles.css";
import { getListBanner } from "../../services/actions/getListMoviesAction";
import { AppState } from "../../services/reducers";
const Home = () => {
  const [listData, setListData] = useState([]);
  const dispatch = useDispatch();
  const listBanner = useSelector(
    (state: AppState) => state.listMovies.listBanner
  );
  useEffect(() => {
    dispatch(getListBanner());
  }, []);

  useEffect(() => {
    if (listBanner?.length > 0) {
      setListData(listBanner);
    }
  }, [listBanner]);

  return (
    <div className="mv-home-container">
      <div className="mv-home-banner">
        <Carousel style={{ height: "100%" }}>
          {listData.map((item: any) => (
            <Carousel.Item key={item.maBanner}>
              <img
                className="d-block w-100"
                src={item.hinhAnh}
                alt="First slide"
              />
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
      <div className="mv-home-list"></div>
    </div>
  );
};

export default Home;
