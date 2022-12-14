import TextBox from '../components/TextBox'
import {useState} from 'react'

const Grid = () => {

    const [text, setText] = useState('');
    const [status, setStatus] = useState('input');

    const buttonPress = (event)=> {
        const actions = ['+', '-', '*', '/']
        if(actions.includes(event.target.textContent) && text[text.length - 1] === event.target.textContent){

        } else {
            if(text === '0' || status === 'answer' && !actions.includes(event.target.textContent)){
                setText(event.target.textContent)
                setStatus('input')
            } else {
                setText('' + text + event.target.textContent)
                setStatus('input')
            }
        }
    }

    const clear = ()=> {
        setText('')
    }
    const clearLast = () =>{
        setText(text.slice(0, -1))
    }
    const equals = () => {
        setText(eval(text))
        setStatus('answer')
    }
    return (
        <>
        <div id='Calculator'>
            <TextBox text={text}/>
            <div id='pageContainer'>
            <div id='ButtonGrid'>
                <button className='numberButton' onClick={buttonPress}>7</button>
                <button className='numberButton' onClick={buttonPress}>8</button>
                <button className='numberButton' onClick={buttonPress}>9</button>
                <button className='numberButton' onClick={buttonPress}>4</button>
                <button className='numberButton' onClick={buttonPress}>5</button>
                <button className='numberButton' onClick={buttonPress}>6</button>
                <button className='numberButton' onClick={buttonPress}>1</button>
                <button className='numberButton' onClick={buttonPress}>2</button>
                <button className='numberButton' onClick={buttonPress}>3</button>
                <button className='numberButton' onClick={buttonPress}>0</button>
            </div>
            <div id='ActionGrid'>
                <button className='actionButton' onClick={buttonPress}>+</button>
                <button className='actionButton' onClick={buttonPress}>-</button>
                <button className='actionButton' onClick={buttonPress}>*</button>
                <button className='actionButton' onClick={buttonPress}>/</button>
                <button className='actionButton' onClick={buttonPress}>(</button>
                <button className='actionButton' onClick={buttonPress}>)</button>
                <button className='actionButton' onClick={buttonPress}>.</button>
                <button id='CE' className='actionButton' onClick={clearLast}>CE</button>
                <button id='C' className='actionButton' onClick={clear}>C</button>
                <button id='equals' className='actionButton' onClick={equals}>=</button>
            </div>
            </div>
        </div>
        </>

    )
}

export default Grid;