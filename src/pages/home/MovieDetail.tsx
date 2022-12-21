import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { useSearchParams } from "react-router-dom";
import ReactPlayer from "react-player";
import Rate from "rc-rate";
import Moment from 'moment';

const MovieDetail = () => {
    const { state } = useLocation();
    const [stars, setStars] = useState<number>(state.danhGia);
    useEffect(() => {
        console.log(state);
    }, []);

    const ratingChanged = (e: any) => {
        setStars(e);
    };
    return (
        <div className="mv-movie-detail-container container">
            <h3 className="mv-movie-detail-title">{state.tenPhim}</h3>
            <div className="mv-movie-detail-trailer">
                <ReactPlayer url={state.trailer} height={400} controls={true} />
            </div>
            <div className="mv-movie-detail-intro">
                <p className="rating">
                    <strong style={{color: 'white'}}>Rating:{" "}</strong>
                    {
                        <Rate
                            className="list-rate"
                            count={10}
                            onChange={ratingChanged}
                            value={stars}
                        />
                    }
                </p>
                <p><strong style={{color: 'white'}}>Ngày khởi chiếu:</strong> {Moment(state.ngayKhoiChieu).format('DD/MM/YYYY')}</p>
                <p><strong style={{color: 'white'}}>Nội dung phim:</strong> {state.moTa}</p>
            </div>
        </div>
    );
};

export default MovieDetail;
