import { FC, useRef, useState } from "react"

const EventExample:FC = () => {
    
    const [value, setValue] = useState<string>('')
    const [isDrag, setIsDrag] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement>(null)

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(inputRef.current?.value)
    }

    const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
        console.log('drag')
    }   

    const dragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(true)
    }

    const dragLeave = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(false)
    }

    return(
        <div>
            <input type="text" value={value} onChange={changeHandler} name="" id="" />
            <input ref={inputRef} type="text" placeholder="Не управляемый"/>
            <button onClick={clickHandler}>button</button>
            <div onDrag={dragHandler} draggable style={{width: 200, height: 200, background: 'red'}}></div>
            <div onDrop={dragHandler} onDragLeave={dragLeave} onDragOver={dragOver} style={{width: 200, height: 200, background: isDrag ? 'green' : 'red', marginTop: 20}}></div>
        </div>
    )
}

export default EventExample