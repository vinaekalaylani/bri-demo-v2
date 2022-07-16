import { useEffect, useState } from "react";

import SlideComp from "../slide";

export default function RekeningComp () {
    const [active, setActive] = useState(1)
    const [slide, setSlide] = useState({})

    const maxActive = 4
    const data = [
        {
            number: 1,
            text: "Siapkan Data diri, KTP, dan NPWP",
            title: "Buka Rekening Online",
            image: "./assets/icon/doc.png",
            desc: "Nikmati 4 langkah mudah Buka Rekening BRI!"
        },
        {
            number: 2,
            text: "Verifikasi diri dengan Video Recording",
            title: "Buka Rekening Online",
            image: "./assets/icon/laptop.png",
            desc: "Nikmati 4 langkah mudah Buka Rekening BRI!"
        },
        {
            number: 3,
            text: "Tunggu hasil cetak buka rekening",
            title: "Buka Rekening Online",
            image: "./assets/icon/passbook.png",
            desc: "Nikmati 4 langkah mudah Buka Rekening BRI!"
        },
        {
            number: 4,
            text: "Transaksi berhasil",
            title: "Buka Rekening Online",
            image: "./assets/icon/trx-success.png",
            desc: "Nikmati 4 langkah mudah Buka Rekening BRI!"
        }
    ]

    useEffect(() => {
        const [temp] = data.filter(e => e.number === active)
        setSlide(temp)
    }, [active])

    return (
        <div className="content" style={{ padding: "3vh 5vw" }}>
            <SlideComp data={slide} url="/service" active={active} setActive={setActive} maxActive={maxActive}/>
        </div>
    )
}