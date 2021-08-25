import FirstComponent from "./components/FirstComponent";
import SecondComponent from "./components/SecondComponent";

import {createContext, useState} from "react";

export const MyContext = createContext()

function App() {

    const [counterA, setCounterA] = useState(0)
    const [counterB, setCounterB] = useState(0)
    const [counterC, setCounterC] = useState(0)
    const [counterD, setCounterD] = useState(0)

    function increment(val) {
        setCounterA(prev => prev + val)
        setCounterB(prev => prev + val)
        setCounterC(prev => prev + val)
        setCounterD(prev => prev + val)
    }

    return (
        <MyContext.Provider value={{
            counterA: counterA, setCounterA: setCounterA,
            counterB: counterB, setCounterB: setCounterB,
            counterC: counterC, setCounterC: setCounterC,
            counterD: counterD, setCounterD: setCounterD
        }}>
            <div>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <button className={'btn btn-success px-5'} onClick={() => {
                                increment(1)
                            }}>+
                            </button>
                            <button className={'btn btn-danger px-5'} onClick={() => {
                                increment(-1)
                            }}>-
                            </button>
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-4 offset-1 bg-warning">
                                <FirstComponent/>
                            </div>
                            <div className="col-md-4 offset-2 bg-info">
                                <SecondComponent/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MyContext.Provider>
    );
}

export default App;