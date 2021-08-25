import {useContext} from "react";
import {MyContext} from "../App";

export default function BComponent() {

    const value = useContext(MyContext)

    return (
        <div className="container p-3">
            <div className="row">
                <div className="col-md-12">
                    <h4>B component</h4>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 offset-3">
                    <h5>count : <span className={'mx-3'}>{value.counterB}</span></h5>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 offset-6">
                    <button className={'btn btn-success mx-4'} onClick={() => value.setCounterB(prev => prev + 1)}>+
                    </button>
                    <button className={'btn btn-danger'} onClick={() => value.setCounterB(prev => prev - 1)}>-</button>
                </div>
            </div>
        </div>
    )
}