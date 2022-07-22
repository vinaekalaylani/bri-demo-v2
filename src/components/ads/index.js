import "./index.css"

export default function AdsComp() {
    return (
        <div className="d-flex justify-content-center align-items-center">
            <video className="video" autoPlay loop>
                <source src="./assets/video.mp4" type="video/mp4" />
            </video>
        </div>
    )
}