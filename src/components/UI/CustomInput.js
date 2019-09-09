import React from 'react'

export const customInput = (props) => (
    <div>
        <div>
        <label >{props.label}</label>
        </div>
        <input {...props.input} type={props.type} placeholder={props.label}/>
        {props.meta.error && props.meta.touched &&
            <div style={{ color: 'red' }}>{props.meta.error}</div>}
    </div>
)

