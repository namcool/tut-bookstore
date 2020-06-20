import React from 'react'

export const Panel = props => (
    <div {...props} className={"panel "+(props.className? props.className : '')}>
        {props.title ? <div className="panel-header">
            <h1 className="panel-title">{props.title}</h1>
        </div> : null}
        <div className="panel-content">
            {props.children}
        </div>
    </div>
)