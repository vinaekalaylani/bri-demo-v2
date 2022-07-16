import ButtonComp from "../button";

export default function MachineComp () {
    return (
        <div className="content row align-items-center m-0" style={{ padding: "12vh 0"}}>
            <div className="row d-flex justify-content-center">
                <ButtonComp icon="./assets/icon/card.png" url="/card"/>
                <div className="text-center text-menu">Transaksi dengan Kartu</div>
            </div>
            <div className="row d-flex justify-content-center">
                <ButtonComp icon="./assets/icon/pass.png" url="/mobile"/>
                <div className="text-center text-menu">Transaksi Tanpa Kartu</div>
            </div>
        </div>
    )
}