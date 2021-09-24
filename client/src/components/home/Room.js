import React from 'react'

const Room = (props) => {
    return (
        <div>
            <div style={{borderRadius:"0.5em"}} className="card horizontal">
                <div className="card-stacked">
                    <div className="card-content">
                        <p>{props.name}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Room
