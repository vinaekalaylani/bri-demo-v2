import ButtonComp from "../button";

export default function BRICafeComp() {
    return (
        <div className="content row align-items-center py-5 m-0">
            <div className="row d-flex justify-content-center">
                <ButtonComp icon="./assets/icon/cafe.png" url="/detail?labuan-bajo" />
                <div className="mt-5 d-flex align-items-center justify-content-center">
                    <img src="./assets/BRICafe.png" alt="bricafe" height="50%"/>
                    <div className="text-menu ms-3 mt-0">Labuan Bajo</div>
                </div>
            </div>
            <div className="row d-flex justify-content-center">
                <ButtonComp icon="./assets/icon/cafe.png" url="/detail?smescoffee" />
                <div className="mt-5 d-flex align-items-center justify-content-center">
                    <img src="./assets/BRICafe.png" alt="bricafe" height="50%"/>
                    <div className="text-menu ms-3 mt-0">Smescoffee</div>
                </div>
            </div>
            <div className="row d-flex justify-content-center">
                <ButtonComp icon="./assets/icon/cafe.png" url="/detail?yogyakarta" />
                <div className="mt-5 d-flex align-items-center justify-content-center">
                    <img src="./assets/BRICafe.png" alt="bricafe" height="50%"/>
                    <div className="text-menu ms-3 mt-0">Yogyakarta</div>
                </div>
            </div>
        </div>
    )
}