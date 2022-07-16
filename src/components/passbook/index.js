import { useEffect, useState } from "react";

import SlideComp from "../slide";

export default function PassbookComp () {
    const [active, setActive] = useState(1)
    const [slide, setSlide] = useState({})

    const maxActive = 8
    const data = [
        {
            number: 1,
            text: "Siapkan dan masukkan kartu debit",
            title: "Cetak Passbook",
            image: "./assets/icon/card.png",
            desc: "Dapatkan cetak passbook dengan mudah!"
        },
        {
            number: 2,
            text: "Masukkan PIN & lakukan konfirmasi",
            title: "Cetak Passbook",
            image: "./assets/icon/pin.png",
            desc: "Dapatkan cetak passbook dengan mudah!"
        },
        {
            number: 3,
            text: `Pilih menu "Cetak Buku Tabungan"`,
            title: "Cetak Passbook",
            image: "./assets/icon/list.png",
            desc: "Dapatkan cetak passbook dengan mudah!"
        },
        {
            number: 4,
            text: "Masukkan nomor seri buku di bagian kanan atas halaman awal buku tabungan",
            title: "Cetak Passbook",
            image: "./assets/icon/tabungan.png",
            desc: "Dapatkan cetak passbook dengan mudah!"
        },
        {
            number: 5,
            text: "Masukkan nomor baris buku selanjutnya (satu angka setelah baris terakhir cetakan transaksi buku tabungan)",
            title: "Cetak Passbook",
            image: "./assets/icon/tabungan.png",
            desc: "Dapatkan cetak passbook dengan mudah!"
        },
        {
            number: 6,
            text: "Pastikan Posisi Buku Tabungan Sesuai Saat Ingin Dicetak (Menghadap Keatas)",
            title: "Cetak Passbook",
            image: "./assets/icon/ssb.png",
            desc: "Dapatkan cetak passbook dengan mudah!"
        },
        {
            number: 7,
            text: `Jika Ada Transaksi Cetak Namun Halaman Sudah Penuh, Tekan Tombol "Buku Habis"`,
            title: "Cetak Passbook",
            image: "./assets/icon/warning.png",
            desc: "Dapatkan cetak passbook dengan mudah!"
        },
        {
            number: 8,
            text: "Transaksi berhasil",
            title: "Cetak Passbook",
            image: "./assets/icon/trx-success.png",
            desc: "Dapatkan cetak passbook dengan mudah!"
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