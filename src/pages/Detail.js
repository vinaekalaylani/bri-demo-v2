import { useLocation } from "react-router";
import { useEffect, useState } from "react";

import DetailComp from "../components/detail";

export default function Detail() {
    const location = useLocation()

    const [detail, setDetail] = useState({})

    const data = [
        {
            params: "?labuan-bajo",
            name: "Labuan Bajo",
            icon: "./assets/BRICafe.png",
            desc: "Merging Natural Customer Experience with Banking Experience",
            time: "08.00 - 21.00",
            url: "https://www.google.com/maps/place/The+Gade+Coffe+%26+Gold+Labuan+Bajo/@-8.4905728,119.8759853,18.92z/data=!4m5!3m4!1s0x2db467cef18a7ec1:0x30e14e3f8f23289f!8m2!3d-8.4906257!4d119.8760248",
            location: "Labuan Bajo, Kec. Komodo, Kabupaten Manggarai Barat, Nusa Tenggara Timur",
            locationImage: "./assets/map-labuan-bajo.png",
            images: [
                "./assets/labuan-bajo1.png",
                "./assets/labuan-bajo2.png",
                "./assets/labuan-bajo3.png"
            ]
        },
        {
            params: "?smescoffee",
            name: "Smescoffee",
            icon: "./assets/BRICafe.png",
            desc: "Merging Natural Customer Experience with Banking Experience",
            time: "08.00 - 21.00",
            url: "https://www.google.com/maps/place/Smescoffee+Cafe/@-6.2419482,106.835942,15z/data=!4m2!3m1!1s0x0:0x3f85bf25fcae59df?sa=X&ved=2ahUKEwjVwJmP8ML4AhURimMGHRdYCqMQ_BJ6BAhBEAU",
            location: "JI. Gatot Subroto No.Kav. 94, RT.11/RW.3, Jakarta Selatan 12780, Indonesia",
            locationImage: "./assets/map-coffe.png",
            images: [
                "./assets/coffe1.png",
                "./assets/coffe2.png",
                "./assets/coffe3.png"
            ]
        },
        {
            params: "?yogyakarta",
            name: "Yogyakarta",
            icon: "./assets/BRICafe.png",
            desc: "Merging Natural Customer Experience with Banking Experience",
            time: "08.00 - 21.00",
            url: "https://www.google.com/maps/place/BRICafe+X+Couvee/@-7.7797684,110.3781295,18z/data=!4m12!1m6!3m5!1s0x2e7a58384ad1a553:0x2463641bb864741b!2sBRICafe+X+Couvee!8m2!3d-7.780584!4d110.3786765!3m4!1s0x2e7a58384ad1a553:0x2463641bb864741b!8m2!3d-7.780584!4d110.3786765",
            location: "Jl. Sagan Tim. No.123, Terban, Kec. Gondokusuman, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55223",
            locationImage: "./assets/map-yogya.png",
            images: [
                "./assets/yogya1.png",
                "./assets/yogya2.png",
                "./assets/yogya3.png"
            ]
        },
        {
            params: "?ugm",
            name: "UGM",
            icon: "./assets/BRIWork.png",
            desc: "Merging Natural Customer Experience with Banking Experience",
            time: "08.00 - 16.00",
            url: "https://www.google.com/maps/place/BriWork+Fisipol+UGM/@-7.7700569,110.3814801,14.73z/data=!4m5!3m4!1s0x0:0xc6321f3f7b4aa019!8m2!3d-7.7700127!4d110.3801643",
            location: "Jl. Sosio Yustisia No.1, Karang Malang, Caturtunggal, Kec. Depok, Kabupaten Sleman, Yogyakarta 5528",
            locationImage: "./assets/map-ugm.png",
            images: [
                "./assets/ugm1.png",
                "./assets/ugm2.png",
                "./assets/ugm3.png"
            ]
        },
        {
            params: "?ipb",
            name: "IPB",
            icon: "./assets/BRIWork.png",
            desc: "Merging Natural Customer Experience with Banking Experience",
            time: "08.00 - 16.00",
            url: "https://www.google.com/maps/place/Botani+Mart+IPB/@-6.5647308,106.7350418,15z/data=!4m5!3m4!1s0x0:0xcdaa3ccfc271f01d!8m2!3d-6.5647627!4d106.7350758",
            location: "Botani Mart IPB, Babakan, Kec. Dramaga, Kab. Bogor, Jawa Barat 16680",
            locationImage: "./assets/map-ipb.png",
            images: [
                "./assets/ipb1.png",
                "./assets/ipb2.png",
                "./assets/ipb3.png"
            ]
        },
        {
            params: "?unej",
            name: "Unej",
            icon: "./assets/BRIWork.png",
            desc: "Merging Natural Customer Experience with Banking Experience",
            time: "08.00 - 16.00",
            url: "https://www.google.com/maps/place/Rektorat+Universitas+Jember+Gedung+dr.+R+Achmad/@-8.165102,113.7165069,15z/data=!4m2!3m1!1s0x0:0x8fffce0a3c202299?sa=X&ved=2ahUKEwio7f2Z_cL4AhVf4jgGHRikAUAQ_BJ6BAhwEAU",
            location: "Gedung Rektorat Unej, Krajan Timur, Sumbersari, Kab. Jember, Jawa Timur 68121",
            locationImage: "./assets/map-unej.png",
            images: [
                "./assets/unej1.png",
                "./assets/unej2.png",
                "./assets/unej3.png"
            ]
        }
    ]

    useEffect(() => {
        const [temp] = data.filter((e) => e.params === location.search)
        setDetail(temp)
    }, [location.search])

    return (
        <>
            {detail.params && (
                <DetailComp detail={detail} />
            )}
        </>
    )
}