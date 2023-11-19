import { useState } from "react"

export function Navbar({setShowStatus, setShowUser, setShowPriority, setByPriority, setByTitle}){

    const [display, setDisplay] = useState(false)
    
    function handleStatus(){
        setShowStatus(true) // Sets the show status to true
        setShowUser(false) // Sets the show user to false
        setShowPriority(false) // Sets the show priority to false
    }
    
    function handleUser(){
        setShowStatus(false) // Sets the show status to false
        setShowUser(true) // Sets the show user to true
        setShowPriority(false) // Sets the show priority to false
    }
      
    function handlePriority(){
        setShowStatus(false) // Sets the show status to false
        setShowUser(false) // Sets the show user to false
        setShowPriority(true) // Sets the show priority to true
    } 
    
    function handleByPriority(){
        setByPriority(true) // Sets the by priority to true
        setByTitle(false) // Sets the by title to false
    }
    
    function handleByTitle(){
        setByPriority(false) // Sets the by priority to false
        setByTitle(true) // Sets the by title to true
    }
    
    // Component for grouping options
    function Grouping(){
        return (
            <div className="grouping">
                <div className='groupingLabel'>
                    <p style={{margin:"0px", color:"black", padding:"0px", fontSize:"16px"}}>Grouping</p> 
                </div>
                <div className='groupingButton' style={{display:"flex", flexDirection:"row", gap:"8px"}}>
                    <button onClick={handleStatus}>Status</button>
                    <button onClick={handleUser}>User</button>
                    <button onClick={handlePriority}>Priority</button>
                </div>
            </div>
        )
    }
    
    // Component for sorting options
    function SortBy(){
        return (
            <div className="sorting">
                <div className='PriorityLabel'>
                    <p style={{margin:"0px", color:"black", padding:"0px", fontSize:"16px"}}>Ordering</p>
                </div>
                <div className='PriorityButton' style={{display:"flex", flexDirection:"row", gap:"8px"}}>
                    <button onClick={handleByPriority}>Priority</button>
                    <button onClick={handleByTitle}>Title</button>
                </div>
            </div>
        )
    }
    
    // Component for dropdown menu
    function DropDown(){
        return (
            <div style={{display:"flex", flexDirection:"column", gap:"12px"}} className="dropDown">
                {Grouping()}
                {SortBy()}
            </div>
        )
    }
    
    return (
        <div className="navbar" style={{display:"flex", flexDirection:"column", gap:"12px"}}>
            <div>
                <button onClick={()=>{setDisplay(!display)}} style={{display:"flex", alignItems:"center"}} className="dispButton">Display</button>
            </div>
            {display && DropDown()}
        </div> 
    )
}
