import EmailComp from "../components/email";
import HeaderComp from "../components/header";

export default function Email() {
    return (
        <>
            <HeaderComp url="/service" />
            <EmailComp />
        </>
    )
}