import ButtonComp from "../button";

export default function ServiceComp() {
    return (
        <div className="content row align-items-center py-5 m-0">
            <div className="row d-flex justify-content-center my-5">
                <ButtonComp icon="./assets/icon/money.png" url="/rekening" />
                <div className="text-center text-menu">Buka Rekening</div>
            </div>
            <div className="row d-flex justify-content-center my-5">
                <ButtonComp icon="./assets/icon/card.png" url="/change-card" />
                <div className="text-center text-menu">Ganti Kartu</div>
            </div>
            <div className="row d-flex justify-content-center my-5">
                <ButtonComp icon="./assets/icon/passbook.png" url="/passbook" />
                <div className="text-center text-menu">Cetak Passbook</div>
            </div>
            <div className="row d-flex justify-content-center my-5">
                <ButtonComp icon="./assets/icon/pin.png" url="/pin" />
                <div className="text-center text-menu">Reissue PIN</div>
            </div>
            <div className="row d-flex justify-content-center my-5">
                <ButtonComp icon="./assets/icon/printer.png" url="/print" />
                <div className="text-center text-menu">Cetak Rekening Koran</div>
            </div>
            <div className="row d-flex justify-content-center my-5">
                <ButtonComp icon="./assets/icon/email.png" url="/email" />
                <div className="text-center text-menu">E-mail Rekening Koran</div>
            </div>
            <div className="row d-flex justify-content-center my-5">
                <ButtonComp icon="./assets/icon/service.png" url="/transfer" />
                <div className="text-center text-menu">Transfer</div>
            </div>
        </div>
    )
}