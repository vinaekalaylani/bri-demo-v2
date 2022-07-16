import { useEffect, useState } from "react";

import SlideComp from "../slide";

export default function PinComp () {
    const [active, setActive] = useState(1)
    const [slide, setSlide] = useState({})

    const maxActive = 7
    const data = [
        {
            number: 1,
            text: "Siapkan dan masukkan kartu debit",
            title: "Reissue PIN",
            image: "./assets/icon/card.png",
            desc: "Nikmati ganti PIN dengan mudah dan cepat!"
        },
        {
            number: 2,
            text: "Masukkan PIN pada layar",
            title: "Reissue PIN",
            image: "./assets/icon/pin.png",
            desc: "Nikmati ganti PIN dengan mudah dan cepat!"
        },
        {
            number: 3,
            text: `Pilih menu "Transaksi Lain"`,
            title: "Reissue PIN",
            image: "./assets/icon/list.png",
            desc: "Nikmati ganti PIN dengan mudah dan cepat!"
        },
        {
            number: 4,
            text: `Pilih menu "Ubah PIN"`,
            title: "Reissue PIN",
            image: "./assets/icon/list.png",
            desc: "Nikmati ganti PIN dengan mudah dan cepat!"
        },
        {
            number: 5,
            text: "Masukkan 6 Digit PIN Baru",
            title: "Reissue PIN",
            image: "./assets/icon/code.png",
            desc: "Nikmati ganti PIN dengan mudah dan cepat!"
        },
        {
            number: 6,
            text: "Konfirmasi Ulang 6 Digit PIN Baru",
            title: "Reissue PIN",
            image: "./assets/icon/new-pin.png",
            desc: "Nikmati ganti PIN dengan mudah dan cepat!"
        },
        {
            number: 7,
            text: "Transaksi berhasil",
            title: "Reissue PIN",
            image: "./assets/icon/trx-success.png",
            desc: "Nikmati ganti PIN dengan mudah dan cepat!"
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