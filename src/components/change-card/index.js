import { useEffect, useState } from "react";

import SlideComp from "../slide";

export default function ChangeCardComp () {
    const [active, setActive] = useState(1)
    const [slide, setSlide] = useState({})

    const maxActive = 9
    const data = [
        {
            number: 1,
            text: "Siapkan dan masukkan kartu debit",
            title: "Ganti Kartu",
            image: "./assets/icon/card.png",
            desc: "Dapatkan kartu barumu sekarang juga!"
        },
        {
            number: 2,
            text: "Masukkan PIN pada layar",
            title: "Ganti Kartu",
            image: "./assets/icon/pin.png",
            desc: "Dapatkan kartu barumu sekarang juga!"
        },
        {
            number: 3,
            text: "Lakukan foto pada layar",
            title: "Ganti Kartu",
            image: "./assets/icon/video.png",
            desc: "Dapatkan kartu barumu sekarang juga!"
        },
        {
            number: 4,
            text: "Lakukan verifikasi KTP",
            title: "Ganti Kartu",
            image: "./assets/icon/ktp.png",
            desc: "Dapatkan kartu barumu sekarang juga!"
        },
        {
            number: 5,
            text: `Pilih menu "Kartu Baru"`,
            title: "Ganti Kartu",
            image: "./assets/icon/list.png",
            desc: "Dapatkan kartu barumu sekarang juga!"
        },
        {
            number: 6,
            text: "Konfirmasi biaya ganti kartu",
            title: "Ganti Kartu",
            image: "./assets/icon/money.png",
            desc: "Dapatkan kartu barumu sekarang juga!"
        },
        {
            number: 7,
            text: "Periksa dan tanda tangan dokumen",
            title: "Ganti Kartu",
            image: "./assets/icon/ttd.png",
            desc: "Dapatkan kartu barumu sekarang juga!"
        },
        {
            number: 8,
            text: "Masukkan PIN baru",
            title: "Ganti Kartu",
            image: "./assets/icon/new-pin.png",
            desc: "Dapatkan kartu barumu sekarang juga!"
        },
        {
            number: 9,
            text: "Transaksi berhasil",
            title: "Ganti Kartu",
            image: "./assets/icon/trx-success.png",
            desc: "Dapatkan kartu barumu sekarang juga!"
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