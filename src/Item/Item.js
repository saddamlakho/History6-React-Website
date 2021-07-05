import React from 'react'
import Button from '../Buttons/Button'
import './item.css'
// import LightSpeedExample from '../Scroll/Scroll'



const Item = ({title,backgroungImg,leftBtnText,leftBtnLink,rightBtnText,rightBtnLink,twoButtons,first}) => {
    return (
        <div className="item" style={{
           backgroundImage: `url( ${backgroungImg}  )`
           
        }}>
              
            <div className="item_container" >
             
                <div className="item_text" >
                         

                    <div className="text_description" >
                 
                
                    
                    </div>
                </div>
              <div className="item_lowerthird" >
                  <div className="item_button" >
                      <Button imp="primary" text={leftBtnLink} link={leftBtnLink} />
                      {twoButtons && (
                      <Button imp="secondary" text={rightBtnText} link={rightBtnLink} />
                    )}
                  </div>
                  {first && (
                      <div className="item_expand" >
                  
                      </div>
                  )}
              </div>
            </div>
            <h1>Social Media</h1>
        </div>
    )
}

export default Item;
