import { useEffect, useState } from "react";
import SlideComp from "../slide";

export default function VideoComp() {
    const [active, setActive] = useState(1)
    const [slide, setSlide] = useState({})

    const maxActive = 3
    const data = [
        {
            number: 1,
            text: "Masuk Ke Ruangan Video Banking",
            title: "Video Banking",
            image: "./assets/icon/video-slide1.png",
            desc: "Berfungsi untuk maintenance, informasi produk, dan complaint handling"
        },
        {
            number: 2,
            text: `Klik Tombol "Memanggil"`,
            title: "Video Banking",
            image: "./assets/icon/video-slide2.png",
            desc: "Berfungsi untuk maintenance, informasi produk, dan complaint handling"
        },
        {
            number: 3,
            text: "Silahkan Tunggu Hingga Terhubung Dengan Petugas BRI",
            title: "Video Banking",
            image: "./assets/icon/video-slide3.png",
            desc: "Berfungsi untuk maintenance, informasi produk, dan complaint handling"
        }
    ]

    useEffect(() => {
        const [temp] = data.filter(e => e.number === active)
        setSlide(temp)
    }, [active])

    return (
        <div className="content" style={{ padding: "3vh 5vw" }}>
            <SlideComp data={slide} url="/menu" active={active} setActive={setActive} maxActive={maxActive}/>
        </div>
    )
}