import { useHistory } from "react-router"

import "./index.css"

export default function UnitComp() {
    const history = useHistory()

    return (
        <div className="content p-5">
            <div className="card-unit" onClick={() => history.push("/bri-cafe")}>
                <img src="./assets/bri-cafe.png" alt="bri-cafe" style={{ borderRadius: "40px 40px 0 0" }} width="100%" />
                <div className="py-4 px-5">
                    <img src="./assets/BRICafe.png" alt="bricafe" width="20%" />
                    <div className="mt-2 text-card-unit" >Link</div>
                </div>
            </div>
            <div className="card-unit" onClick={() => history.push("/bri-work")}>
                <img src="./assets/bri-work.png" alt="bri-cafe" style={{ borderRadius: "40px 40px 0 0" }} width="100%" />
                <div className="py-4 px-5">
                    <img src="./assets/BRIWork.png" alt="bricafe" width="20%" />
                    <div className="mt-2 text-card-unit" >Link</div>
                </div>
            </div>
            <a href="https://bri.co.id/web/guest/lokasi" >
                <div className="card-unit">
                    <img src="./assets/bri-link.png" alt="bri-cafe" style={{ borderRadius: "40px 40px 0 0" }} width="100%" />
                    <div className="py-4 px-5">
                        <div className="d-flex" style={{ marginTop: "-10px", fontSize: "4vw", fontWeight: "600" }}>
                            <div style={{ color: "#085A9A" }}>BRI</div>
                            <div style={{ color: "#FD7400" }}>UnitKerja</div>
                        </div>
                        <div className="text-card-unit" >Link</div>
                    </div>
                </div>
            </a>
        </div>
    )
}