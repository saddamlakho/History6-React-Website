import React from 'react'
// import Skeleton from 'react-loading-skeleton'
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"

function Skel() {
    return (
        <div>
                 <div className="responsive-iframe" style={{  overflow: 'hidden', position: 'relative' }} > 
                 
                       <SkeletonTheme color="#D5D8DC " highlightColor="#AAB7B8">

                        {/* <Skeleton height={30} /> */}
                        <Skeleton count={1} width={1300} height={800}  />
                     </SkeletonTheme>


       
            
               
</div>
        


        </div>
    )
}

export default Skel
