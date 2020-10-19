import React from 'react'
import BackgroundImage from "gatsby-background-image"
function Backgroundsection({img,styleClass,title,children}) {
    return (
        <div>
            <BackgroundImage className={styleClass} fluid={img}>
                <h1 className="title text-white text-uppercase text-center display-4 font-weight-bold">{title}</h1>
                {children}
            </BackgroundImage>
           
        </div>
    )
}

Backgroundsection.defaultProps={
    title:"default",
    styleClass:"default-background"
}
export default Backgroundsection

