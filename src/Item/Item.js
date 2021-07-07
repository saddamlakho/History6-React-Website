import React from 'react'
// import Button from '../Buttons/Button'
import './item.css'




const Item = ({backgroungImg}) => {
    return (
        <div className="item" style={{
           backgroundImage: `url( ${backgroungImg}  )`
           
        }}>
              
            <div  >
             
                <div  >
                         

                    <div  >
                 
                    
                    </div>
                </div>
               {/* <div className="item_lowerthird" >
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
            </div> */}
            <h1>Social Media</h1>

          
           


        </div>
    )
}

export default Item;
