import { useEffect, useState } from "react";
import SlideComp from "../slide";

export default function MobileComp () {
    const [active, setActive] = useState(1)
    const [slide, setSlide] = useState({})

    const maxActive = 10
    const data = [
        {
            number: 1,
            text: "lakukan login pada BRIMo",
            title: "Transaksi Tanpa Kartu",
            image: "./assets/icon/brimo.png",
            desc: "Nikmati pengalaman tarik tunai tanpa kartu!"
        },
        {
            number: 2,
            text: `Pilih menu "Tarik Tunai"`,
            title: "Transaksi Tanpa Kartu",
            image: "./assets/icon/list.png",
            desc: "Nikmati pengalaman tarik tunai tanpa kartu!"
        },
        {
            number: 3,
            text: "Masukkan Sumber Dana & Nominal",
            title: "Transaksi Tanpa Kartu",
            image: "./assets/icon/service.png",
            desc: "Nikmati pengalaman tarik tunai tanpa kartu!"
        },
        {
            number: 4,
            text: "Masukkan PIN pada layar",
            title: "Transaksi Tanpa Kartu",
            image: "./assets/icon/pin.png",
            desc: "Nikmati pengalaman tarik tunai tanpa kartu!"
        },
        {
            number: 5,
            text: "Cari Lokasi ATM atau CRM BRI",
            title: "Transaksi Tanpa Kartu",
            image: "./assets/icon/atm.png",
            desc: "Nikmati pengalaman tarik tunai tanpa kartu!"
        },
        {
            number: 6,
            text: "Pilih Menu Tarik Tunai Tanpa Kartu",
            title: "Transaksi Tanpa Kartu",
            image: "./assets/icon/crm.png",
            desc: "Nikmati pengalaman tarik tunai tanpa kartu!"
        },
        {
            number: 7,
            text: "Masukkan 6 Digit Kode dari BRIMo",
            title: "Transaksi Tanpa Kartu",
            image: "./assets/icon/code.png",
            desc: "Nikmati pengalaman tarik tunai tanpa kartu!"
        },
        {
            number: 8,
            text: "Masukkan No HP Pada BRIMo",
            title: "Transaksi Tanpa Kartu",
            image: "./assets/icon/pass.png",
            desc: "Nikmati pengalaman tarik tunai tanpa kartu!"
        },
        {
            number: 9,
            text: "Silakan ambil uang Anda",
            title: "Transaksi Tanpa Kartu",
            image: "./assets/icon/money.png",
            desc: "Nikmati pengalaman tarik tunai tanpa kartu!"
        },
        {
            number: 10,
            text: "Transaksi berhasil",
            title: "Transaksi Tanpa Kartu",
            image: "./assets/icon/trx-success.png",
            desc: "Nikmati pengalaman tarik tunai tanpa kartu!"
        }
    ]

    useEffect(() => {
        const [temp] = data.filter(e => e.number === active)
        setSlide(temp)
    }, [active])

    return (
        <div className="content" style={{ padding: "3vh 5vw" }}>
            <SlideComp data={slide} url="/machine" active={active} setActive={setActive} maxActive={maxActive}/>
        </div>
    )
}