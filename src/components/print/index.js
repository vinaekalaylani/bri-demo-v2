import { useEffect, useState } from "react";

import SlideComp from "../slide";

export default function PrintComp () {
    const [active, setActive] = useState(1)
    const [slide, setSlide] = useState({})

    const maxActive = 7
    const data = [
        {
            number: 1,
            text: "Siapkan dan masukkan kartu debit",
            title: "Cetak Rekening Koran",
            image: "./assets/icon/card.png",
            desc: "Lakukan cetak rekening koran dengan mudah!"
        },
        {
            number: 2,
            text: "Masukkan PIN & lakukan konfirmasi",
            title: "Cetak Rekening Koran",
            image: "./assets/icon/pin.png",
            desc: "Lakukan cetak rekening koran dengan mudah!"
        },
        {
            number: 3,
            text: `Pilih menu "Cetak Rekening Koran"`,
            title: "Cetak Rekening Koran",
            image: "./assets/icon/list.png",
            desc: "Lakukan cetak rekening koran dengan mudah!"
        },
        {
            number: 4,
            text: "Pilih Jangka Waktu Berdasarkan Tanggal atau Bulan",
            title: "Cetak Rekening Koran",
            image: "./assets/icon/calendar.png",
            desc: "Lakukan cetak rekening koran dengan mudah!"
        },
        {
            number: 5,
            text: "Konfirmasi biaya ganti cetak",
            title: "Cetak Rekening Koran",
            image: "./assets/icon/money.png",
            desc: "Lakukan cetak rekening koran dengan mudah!"
        },
        {
            number: 6,
            text: "Konfirmasi biaya ganti cetak",
            title: "Cetak Rekening Koran",
            image: "./assets/icon/video-slide3.png",
            desc: "Lakukan cetak rekening koran dengan mudah!"
        },
        {
            number: 7,
            text: "Transaksi berhasil",
            title: "Cetak Rekening Koran",
            image: "./assets/icon/trx-success.png",
            desc: "Lakukan cetak rekening koran dengan mudah!"
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