import React from 'react'

export default function carditem({ cont, del }) {
    return (
        
        <div className="card mt-3">
            <div className="card-header ">
                {cont.s_no}
            </div>
            <div className="card-body">
                <h5 className="card-title">{cont.first_name} {cont.last_name}</h5>
                <h5 className="card-title">{cont.title}</h5>
                <p className="card-text">{cont.desc}</p>
                <button type="button" className="btn btn-sm btn-danger" onClick={()=>{del(cont)}}>Delete</button>
            </div>
        </div>
    )
}
