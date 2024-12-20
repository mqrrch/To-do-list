import { useState, useRef, useEffect } from 'react'
import './ItemSettings.css'

export function ItemSettings({ removeToDo, id, toDoItems, setIsEditing, inputRef }){
    const [settingsOpen, setSettingsOpen] = useState(false)
    const handleOpenSettings = () => setSettingsOpen(true)
    const handleCloseSettings = () => setSettingsOpen(false)

    const elementRef = useRef()
    const [pos, setPos] = useState({top: 0, left: 0})
    useEffect(() => {
        if (elementRef.current){
            const { top, left } = elementRef.current.getBoundingClientRect();
            setPos({top, left});
        }
    }, [toDoItems])

    function handleRemove(id) {
        removeToDo(id);
        handleCloseSettings();
    }

    function handleEditing() {
        setIsEditing(true);
        setTimeout(() => inputRef.current?.focus(), 0);
        handleCloseSettings();
    }

    return (
        <>
            <button className='item-settings'
                ref={elementRef} 
                onClick={handleOpenSettings}>
    
                    <i className="fa-solid fa-ellipsis"></i>
    
            </button>
    
            {settingsOpen && (
                <div className='settings-overlay'
                onClick={handleCloseSettings}>
    
                    <div className='settings-container'
                    onClick={(e) => e.stopPropagation()}
                    style={{top: `${pos.top + 25}px`, left: `${pos.left - 20}px`}}>
    
                        <a className='settings-item item-edit'
                        onClick={() => handleEditing()}>Edit Task</a>
                        
                        <a className='settings-item item-remove' 
                        onClick={() => handleRemove(id)} >Remove Task</a>
                        
                    </div>
                </div>
            )}
        </>
    )
}