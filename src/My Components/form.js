import React, { useState } from 'react';

export default function Form(prop) {

const[title,setTitle]=useState();
const[desc,setDesc]=useState();

// e.preventDefault() By this our page will not reload 

    const submit= (e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("Title or Description can't be empty");
        }
        else{
            prop.addInfo(title,desc);
            setDesc('')
            setTitle('')
        }
    }
    return (  
        <div className='container'>
            <h3 className='mt-3'>Add your Information</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="exampleInputEmail1"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}}  className="form-control" id="exampleInputPassword1"/>
                </div>
                    <button type="submit" className="btn btn-sm btn-success">Add Your Info</button>
            </form>
        </div>
    )
}
