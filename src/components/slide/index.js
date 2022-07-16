import { useHistory } from "react-router"
import "./index.css"

export default function SlideComp ({ data, url, active, setActive, maxActive }) {
    const history = useHistory()
    
    const handleBack = () => {
        if (active === 1) {
            history.push(url)
        } else {
            setActive(active - 1)
        }
    }

    return (
        <div>
            <div className="title-slide">{data.title}</div>
            <div className="desc-slide">{data.desc}</div>
            <div className="box-slide my-4">
                <img src={data.image} alt={data.image} height="70%"/>
            </div>
            <div className="d-flex">
                <div className="number-slide text-white">{data.number}</div>
                <div className="text-slide text-primary ms-4 px-3">{data.text}</div>
            </div>
            <div className="d-flex justify-content-between box-arrow-slide">
                <div role="button" onClick={handleBack} className="d-flex align-items-center">
                    <img src="./assets/left.png" alt="left" height="100%"/>
                </div>
                <div role="button" onClick={() => setActive(active + 1)} className={active === maxActive ? "d-none" :"d-flex align-items-center"}>
                    <img src="./assets/right.png" alt="right" height="100%"/>
                </div>
            </div>
        </div>
    )
}