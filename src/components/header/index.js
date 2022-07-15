import { useLocation } from "react-router-dom"

import "./index.css"

export default function HeaderComp () {
    const location = useLocation()
    return (
        <div className={location.pathname === "/" ? "d-flex align-items-center py-2" : "nav-container d-flex align-items-center py-2"}>
            <div className={ location.pathname === "/haha" ? "d-none" : "col-1 d-flex justify-content-end"}>
                <img src="./assets/back.png" alt="back" width="25%"/>
            </div>
            <div className={ location.pathname === "/haha" ? "col-12 d-flex justify-content-center" : "col-10 d-flex justify-content-center"}>
                <img src="./assets/logo.png" alt="logo" width="25%"/>
            </div>
            <div className={ location.pathname === "/haha" ? "d-none" : "col-1 d-flex justify-content-start"}>
                <img src="./assets/home.svg" alt="back" width="55%"/>
            </div>
        </div>
    )
}