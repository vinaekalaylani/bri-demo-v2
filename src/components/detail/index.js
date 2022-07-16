import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css/pagination";
import "swiper/css";
import "./index.css"

export default function DetailComp({ detail }) {
    return (
        <div className="content">
            <Swiper pagination={{ clickable: true }} modules={[Pagination]}>
                {detail?.images.map((e, i) => (
                    <SwiperSlide key={i} >
                        <div className="detail-image">
                            <img src={e} alt="detail" width="100%" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="px-5 py-4">
                <div className="d-flex align-items-center">
                    <img src={detail.icon} alt="detail" width="20%" />
                    <div className="ms-3 mt-0" style={{ fontSize: "2.5vh", fontWeight: "600" }}>{detail.name}</div>
                </div>
                <div style={{ fontStyle: "italic", fontSize: "1.5vh", width: "60vw" }} >{detail.desc}</div>
                <div className="mt-3 d-flex align-items-center">
                    <div><img src="./assets/clock.png" alt="clock" width="70%" /></div>
                    <div style={{ fontSize: "2vw" }}>{detail.time}</div>
                </div>
            </div>
            <hr />
            <div className="px-5 py-5">
                <a href={detail.url} >
                    <div className="card-detail">
                        <img src={detail.locationImage} alt="detail" width="100%" />
                        <div className="d-flex p-4 align-items-center">
                            <img src="./assets/map.png" alt="detail" width="5%" />
                            <div className="ms-4 text-detail" style={{ fontSize: "1.5vh" }}>{detail.location}</div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    )
}