import React from 'react'

export default function ServicesType(props) {
    return (
        <React.Fragment>
            {props.color === 'blue' ? (
                <React.Fragment>
                    <div style={{backgroundImage: 'url(/home-care-photo-3.jpg)'}} id="services2__photo" className={props.dynamicClass} />
                    <div id="services2__background" className={props.dynamicClass} />
                    <div id="services2__container" className={`${props.dynamicClass}-container`}>
                        <h3 className="h3" id="services2__sub-heading">{props.subheading}</h3>
                        <div className="line line--white" id="services2__line" />
                        <p className="p-s" id="services2__sub-paragraph">{props.paragraph}</p>
                        <button className="button button__m" id="services2__button">Learn More</button>
                    </div>    
                </React.Fragment>       
            ) : (
                <React.Fragment>
                    <div style={{backgroundImage: 'url(/home-care-photo-3.jpg)'}} id="services2__photo-alt" className={props.dynamicClass} />
                    <div id="services2__background-alt" className={props.dynamicClass} />
                    <div id="services2__container-alt" className={`${props.dynamicClass}-container`}>
                        <h3 className="h3" id="services2__sub-heading">{props.subheading}</h3>
                        <div className="line line--white" id="services2__line" />
                        <p className="p-s" id="services2__sub-paragraph">{props.paragraph}</p>
                        <button className="button button__m" id="services2__button">Learn More</button>
                    </div>    
                </React.Fragment>  
            )} 
        </React.Fragment>
    )
}
