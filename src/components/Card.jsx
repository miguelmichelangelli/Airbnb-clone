import React from "react";

function Card(props) {
    let message

    if(props.item.openSpots === 0) {
        message = 'SOLD OUT'
    } else if(props.item.location === 'Online') {
        message = 'ONLINE'
    }

    return (
            <div className="card">

                { (props.item.openSpots === 0 || props.item.location === 'Online') &&
                    <span className="card--badge">
                        { message }
                    </span>
                }

                <div className="card--img-container">
                    <img 
                        src= {`../../images/${props.item.coverImg}`}
                        alt="card image" 
                        className="card--img" 
                        /> 
                </div>
                <section className="card--info">
                    <p className="card--info--valoration card--p">
                        ⭐ { props.item.stats.rating } 
                        <span className="card--info--valoration--span">
                            {' (' + props.item.stats.reviewCount + ')'} · { props.item.location }
                        </span>
                    </p>
                    <p className="card--info--courseInfo card--p">
                        { props.item.title }
                    </p>
                    <p className="card--info--price card--p">
                        <span className="bold">From ${ props.item.price }</span> / person
                    </p>
                </section>
            </div>
    )
}

export default Card