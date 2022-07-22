import { useHistory, useLocation } from "react-router-dom"

import "./index.css"

export default function HeaderComp ({ url }) {
    const location = useLocation()
    const history = useHistory()

    return (
        <div style={{ height: '4vh' }} className={location.pathname === "/" ? "d-flex align-items-center py-2" : "nav-container d-flex align-items-center py-2"}>
            <div role="button" onClick={() => history.push(url)} style={{ height: '70%' }} className={ location.pathname === "/" ? "d-none" : "col-1 d-flex justify-content-end"}>
                <img src="./assets/back.png" alt="back" />
            </div>
            <div style={{ height: '100%' }} className={ location.pathname === "/" ? "col-12 d-flex justify-content-center" : "col-10 d-flex justify-content-center"}>
                <img src="./assets/logo.png" alt="logo"/>
            </div>
            <div role="button" onClick={() => history.push("/")} style={{ height: '100%' }} className={ location.pathname === "/" ? "d-none" : "col-1 d-flex justify-content-start"}>
                <img src="./assets/home.svg" alt="back"/>
            </div>
        </div>
    )
}