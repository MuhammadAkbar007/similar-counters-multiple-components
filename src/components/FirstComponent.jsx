import AComponent from "./AComponent";
import BComponent from "./BComponent";

export default function FirstComponent() {
    return (
        <div className={'p-3'}>
            <h3 className={'text-center'}> 1-component </h3>
            <div className="container">
                <div className="row my-3 bg-dark text-white">
                    <AComponent/>
                </div>
                <div className="row bg-dark text-white">
                    <BComponent/>
                </div>
            </div>
        </div>
    )
}