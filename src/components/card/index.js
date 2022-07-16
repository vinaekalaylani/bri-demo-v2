import { useEffect, useState } from "react";
import SlideComp from "../slide";

export default function CardComp () {
    const [active, setActive] = useState(1)
    const [slide, setSlide] = useState({})

    const maxActive = 4
    const data = [
        {
            number: 1,
            text: "Siapkan dan masukkan kartu debit",
            title: "Transaksi dengan Kartu",
            image: "./assets/icon/card.png",
            desc: "Pilih menu transaksi sesuai kebutuhanmu!"
        },
        {
            number: 2,
            text: "Masukkan PIN pada layar",
            title: "Transaksi dengan Kartu",
            image: "./assets/icon/pin.png",
            desc: "Pilih menu transaksi sesuai kebutuhanmu!"
        },
        {
            number: 3,
            text: "Pilih menu transaksi yang diinginkan",
            title: "Transaksi dengan Kartu",
            image: "./assets/icon/list.png",
            desc: "Pilih menu transaksi sesuai kebutuhanmu!"
        },
        {
            number: 4,
            text: "Transaksi berhasil",
            title: "Transaksi dengan Kartu",
            image: "./assets/icon/trx-success.png",
            desc: "Pilih menu transaksi sesuai kebutuhanmu!"
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