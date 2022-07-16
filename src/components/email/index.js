import { useEffect, useState } from "react";

import SlideComp from "../slide";

export default function EmailComp () {
    const [active, setActive] = useState(1)
    const [slide, setSlide] = useState({})

    const maxActive = 6
    const data = [
        {
            number: 1,
            text: "Siapkan dan masukkan kartu debit",
            title: "E-mail Rekening Koran",
            image: "./assets/icon/card.png",
            desc: "Kirim rekening koranmu ke email!"
        },
        {
            number: 2,
            text: "Masukkan PIN & lakukan konfirmasi",
            title: "E-mail Rekening Koran",
            image: "./assets/icon/pin.png",
            desc: "Kirim rekening koranmu ke email!"
        },
        {
            number: 3,
            text: `Pilih menu "E-mail Rekening Koran"`,
            title: "E-mail Rekening Koran",
            image: "./assets/icon/list.png",
            desc: "Kirim rekening koranmu ke email!"
        },
        {
            number: 4,
            text: "Pilih Jangka Waktu Berdasarkan Tanggal atau Bulan",
            title: "E-mail Rekening Koran",
            image: "./assets/icon/calendar.png",
            desc: "Kirim rekening koranmu ke email!"
        },
        {
            number: 5,
            text: "Rekening koran akan dikirim ke email",
            title: "E-mail Rekening Koran",
            image: "./assets/icon/email.png",
            desc: "Kirim rekening koranmu ke email!"
        },
        {
            number: 6,
            text: "Transaksi berhasil",
            title: "E-mail Rekening Koran",
            image: "./assets/icon/trx-success.png",
            desc: "Kirim rekening koranmu ke email!"
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