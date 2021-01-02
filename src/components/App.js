import React, {useState, useEffect} from 'react'

const App = () => {

    const [currentNumber, setCurrentNumber] = useState("");
    const [currentAnswer, setCurrentAnswer] = useState('');
    const [equalClass, setEqualClass] = useState("")

    const handleCalculation = (e) => {
        if (e.target.innerText.match(/^[0-9,+,\-,*,\/]{1,}$/g)) {
            setCurrentNumber(prevNumber => (
                prevNumber + e.target.innerText
            ));

            setEqualClass("");
        }
    };

    const handleInputTextArea = (e) => {
        if (e.target.value.match(/^[0-9,+,\-,*,\/]{1,}$/g) || e.target.value === "") {
            setCurrentNumber(e.target.value);
            setEqualClass("");
        }
    }


    const handleDelete = () => {
        setCurrentNumber(currentNumber.slice(0, -1));
        setEqualClass("");
    }

    const handleAllClear = () => {
        setCurrentNumber("");
    }

    const handleEqualSign = (e) => {
        if (e.key === '=' || e.key ==='Enter') {
            setEqualClass("eval-display-answer-after-click")
        } else {
            setEqualClass("eval-display-answer-after-click")
        }
    }

    const handleButtondefaultBehaviour = (e) => {
        e.key === 'Enter' && e.preventDefault();
    }

    useEffect(() => {
        // if (['+', '-', '*', '/'].includes(currentCharacter)) {
        //     const equation = currentNumber;
        //     try{
        //     setCurrentAnswer(eval(equation.slice(0, -1)));
        //     }catch(e){
        //         console.log('Error');
        //         setCurrentCharacter(currentNumber.charAt(currentNumber.length-2));
        //         setCurrentNumber(currentNumber.slice(0, currentNumber.length -1));
        //     }

        // } else if (["."].includes(currentCharacter)) {
        //     const secondlastChar = currentNumber.charAt(currentNumber.length - 2);
        //     if (['+', '-', '*', '/'].includes(secondlastChar)) {
        //         const equation = currentNumber;
        //         setCurrentAnswer(eval(equation.slice(0, equation.length-2)));
        //     }
        // } else {
        //     try{
        //     setCurrentAnswer(eval(currentNumber))
        //     }catch(e){
        //         console.log('Error');
        //         setCurrentCharacter(currentNumber.charAt(currentNumber.length-2));
        //         setCurrentNumber(currentNumber.slice(0, currentNumber.length -1));
        //     }
        // }
        try {
            setCurrentAnswer(eval(currentNumber));
        } catch (e) {
            const key = currentNumber.substr(currentNumber.length-2,2);

            const notAllwed = ['++', '--', '**', '//', '+-', '+*', '+/', '-+', '-*', '-/', '*/', '/*']

            if (notAllwed.includes(key)) {
                setCurrentNumber(currentNumber.slice(0, currentNumber.length - 1));
                console.log(key);
            }
            
        }
    }, [ currentNumber])





    return (
        <div>
            <h1 className=" heading margin-bottom-5">Best of Calculator 🧮</h1>
            <div className="wrapper">
                <div className="margin-bottom-2">
                    <textarea type="text" name="eval" value={currentNumber} onKeyPress={handleEqualSign} onChange={handleInputTextArea} className="eval-display" />
                    <div className={`display eval-display-answer ${equalClass}`}>
                        {currentAnswer}
                    </div>
                </div>
                <div className="grid-container">
                    <div className="grid-item">
                        <button onClick={handleCalculation} onKeyPress={handleButtondefaultBehaviour} className="btn">7</button> 
                    </div>
                    <div className="grid-item">
                        <button onKeyPress={handleButtondefaultBehaviour} onClick={handleCalculation} className="btn">8</button>
                    </div>
                    <div className="grid-item">
                        <button onKeyPress={handleButtondefaultBehaviour} onClick={handleCalculation} className="btn">9</button>
                    </div>
                    <div className="grid-item">
                        <button onKeyPress={handleButtondefaultBehaviour} onClick={handleDelete} className="btn">DEL</button>
                    </div>
                    <div className="grid-item">
                        <button onKeyPress={handleButtondefaultBehaviour} onClick={handleAllClear} className="btn">AC</button>
                    </div>
                    <div className="grid-item">
                        <button onKeyPress={handleButtondefaultBehaviour} onClick={handleCalculation} className="btn">4</button>
                    </div>
                    <div className="grid-item">
                        <button onKeyPress={handleButtondefaultBehaviour} onClick={handleCalculation} className="btn">5</button>
                    </div>
                    <div className="grid-item">
                        <button onKeyPress={handleButtondefaultBehaviour} onClick={handleCalculation} className="btn">6</button>
                    </div>
                    <div className="grid-item">
                        <button onKeyPress={handleButtondefaultBehaviour} onClick={handleCalculation} className="btn">*</button>
                    </div>
                    <div className="grid-item">
                        <button onKeyPress={handleButtondefaultBehaviour} onClick={handleCalculation} className="btn">/</button>
                    </div>
                    <div className="grid-item">
                        <button onKeyPress={handleButtondefaultBehaviour} onClick={handleCalculation} className="btn">1</button>
                    </div>
                    <div className="grid-item">
                        <button onKeyPress={handleButtondefaultBehaviour} onClick={handleCalculation} className="btn">2</button>
                    </div>
                    <div className="grid-item">
                        <button onKeyPress={handleButtondefaultBehaviour} onClick={handleCalculation} className="btn">3</button>
                    </div>
                    <div className="grid-item">
                        <button onKeyPress={handleButtondefaultBehaviour} onClick={handleCalculation} className="btn">+</button>
                    </div>
                    <div className="grid-item">
                        <button onKeyPress={handleButtondefaultBehaviour} onClick={handleCalculation} className="btn">-</button>
                    </div>
                    <div className="grid-item">
                        <button onKeyPress={handleButtondefaultBehaviour} onClick={handleCalculation} className="btn">0</button>
                    </div>
                    <div className="grid-item">
                        <button onKeyPress={handleButtondefaultBehaviour} onClick={handleCalculation} className="btn">.</button>
                    </div>
                    <div className="grid-item grid-item-equal">
                        <button onKeyPress={handleButtondefaultBehaviour} onClick={handleEqualSign} className="btn-equal">=</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
