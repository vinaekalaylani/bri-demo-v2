import { useHistory } from "react-router"
import "./index.css"

export default function ButtonComp ({ url, icon }) {
    const history = useHistory()

    return (
        <div role="button" onClick={() => history.push(url)} className="button-circle">
            <img src={icon} alt={icon} width="60%"/>
        </div>
    )
}