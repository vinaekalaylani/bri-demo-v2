import ButtonComp from "../button";

export default function MenuComp() {
    return (
        <div className="content row align-items-center py-5 m-0">
            <div className="row d-flex justify-content-center">
                <ButtonComp icon="./assets/icon/card.png" url="/machine"/>
                <div className="text-center text-menu">Cash Recycling Machine</div>
            </div>
            <div className="row d-flex justify-content-center">
                <ButtonComp icon="./assets/icon/money.png" url="/service"/>
                <div className="text-center text-menu">Self Service Banking</div>
            </div>
            <div className="row d-flex justify-content-center">
                <ButtonComp icon="./assets/icon/video.png" url="/video"/>
                <div className="text-center text-menu">Video Banking</div>
            </div>
        </div>
    )
}