import { useHistory } from "react-router"

import "./index.css"

export default function HomepageComp() {
    const history = useHistory()

    return (
        <div className="content">
            <img src="./assets/background.png" alt="bg" className="bg-homepage" />
            <div className="img-person">
                <img src="./assets/person.png" alt="person" height="100%"/>
            </div>
            <div className="d-flex">
                <div className="col-6 pe-5 d-flex align-items-center justify-content-end">
                    <div role="button" onClick={() => history.push("/menu")} className="btn-homepage p-3 text-white text-center"> BRI 24 Jam </div>
                </div>
                <div className="col-6 ps-5 d-flex align-items-center">
                    <div role="button" onClick={() => history.push("/unit")} className="btn-homepage p-3 text-white text-center"> Unit Kerja </div>
                </div>
            </div>
        </div>
    )
}