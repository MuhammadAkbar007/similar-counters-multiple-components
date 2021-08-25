import CComponent from "./CComponent";
import DComponent from "./DComponent";

export default function SecondComponent() {
    return (
        <div className={'p-3'}>
            <h3 className={'text-center'}> 2-component </h3>
            <div className="container">
                <div className="row my-3 bg-dark text-white">
                    <CComponent/>
                </div>
                <div className="row bg-dark text-white">
                    <DComponent/>
                </div>
            </div>
        </div>
    )
}