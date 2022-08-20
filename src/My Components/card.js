import React from 'react'
import Carditem from './carditem'

export default function card(props) {
//    We can add styling in this way 
    let text={
        // border: '2px solid red',
        margin: '25px 0px'
    }
    return (
        <div className='container'>
            <h4 className='mt-3' >Your Information</h4>
            { 
            props.data.length!==0 ? props.data.map((dat)=>{
                return <Carditem cont={dat} del={props.del} key={dat.s_no}/>
                }) : <span style={text}> No Information To Show </span>
            }
        </div>
    )
}
