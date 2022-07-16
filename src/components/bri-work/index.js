import ButtonComp from "../button";

export default function BRIWorkComp () {
    return (
        <div className="content row align-items-center py-5 m-0">
            <div className="row d-flex justify-content-center">
                <ButtonComp icon="./assets/icon/work.png" url="/detail?ugm" />
                <div className="mt-5 d-flex align-items-center justify-content-center">
                    <img src="./assets/BRIWork.png" alt="briwork" height="50%"/>
                    <div className="text-menu ms-3 mt-0">UGM</div>
                </div>
            </div>
            <div className="row d-flex justify-content-center">
                <ButtonComp icon="./assets/icon/work.png" url="/detail?ipb" />
                <div className="mt-5 d-flex align-items-center justify-content-center">
                    <img src="./assets/BRIWork.png" alt="briwork" height="50%"/>
                    <div className="text-menu ms-3 mt-0">IPB</div>
                </div>
            </div>
            <div className="row d-flex justify-content-center">
                <ButtonComp icon="./assets/icon/work.png" url="/detail?unej" />
                <div className="mt-5 d-flex align-items-center justify-content-center">
                    <img src="./assets/BRIWork.png" alt="briwork" height="50%"/>
                    <div className="text-menu ms-3 mt-0">Unej</div>
                </div>
            </div>
        </div>
    )
}