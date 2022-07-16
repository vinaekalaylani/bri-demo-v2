import { useEffect, useState } from "react";

import SlideComp from "../slide";

export default function TransferComp () {
    const [active, setActive] = useState(1)
    const [slide, setSlide] = useState({})

    const maxActive = 11
    const data = [
        {
            number: 1,
            text: "Siapkan dan masukkan kartu debit",
            title: "Transfer",
            image: "./assets/icon/card.png",
            desc: "Nikmati kemudahan transfer dengan cepat!"
        },
        {
            number: 2,
            text: "Masukkan PIN pada layar",
            title: "Transfer",
            image: "./assets/icon/pin.png",
            desc: "Nikmati kemudahan transfer dengan cepat!"
        },
        {
            number: 3,
            text: `Pilih menu "Transaksi Lainnya"`,
            title: "Transfer",
            image: "./assets/icon/list.png",
            desc: "Nikmati kemudahan transfer dengan cepat!"
        },
        {
            number: 4,
            text: `Pilih menu "Transfer"`,
            title: "Transfer",
            image: "./assets/icon/list.png",
            desc: "Nikmati kemudahan transfer dengan cepat!"
        },
        {
            number: 5,
            text: "Masukkan Koda Bank",
            title: "Transfer",
            image: "./assets/icon/code.png",
            desc: "Nikmati kemudahan transfer dengan cepat!"
        },
        {
            number: 6,
            text: "Masukkan Jumlah Nominal Transfer",
            title: "Transfer",
            image: "./assets/icon/money.png",
            desc: "Nikmati kemudahan transfer dengan cepat!"
        },
        {
            number: 7,
            text: "Konfirmasi Hasil Inputan",
            title: "Transfer",
            image: "./assets/icon/check.png",
            desc: "Nikmati kemudahan transfer dengan cepat!"
        },
        {
            number: 8,
            text: "Masukkan Nomor Referensi",
            title: "Transfer",
            image: "./assets/icon/number.png",
            desc: "Nikmati kemudahan transfer dengan cepat!"
        },
        {
            number: 9,
            text: "Pilih Rekening Tabungan atau Giro",
            title: "Transfer",
            image: "./assets/icon/list.png",
            desc: "Nikmati kemudahan transfer dengan cepat!"
        },
        {
            number: 10,
            text: "Tunggu Bukti Transfer",
            title: "Transfer",
            image: "./assets/icon/video-slide3.png",
            desc: "Nikmati kemudahan transfer dengan cepat!"
        },
        {
            number: 11,
            text: "Transaksi berhasil",
            title: "Transfer",
            image: "./assets/icon/trx-success.png",
            desc: "Nikmati kemudahan transfer dengan cepat!"
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