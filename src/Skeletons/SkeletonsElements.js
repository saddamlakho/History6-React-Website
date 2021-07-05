import React from 'react'
// import Skeleton from 'react-loading-skeleton'
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
 import './Skeleton.css'

function SkeletonsElements() {
   return (
      <div>



         <div className="row">
            <div className="column">
               <div className="card">

                   <div className="foobar" >
                       <SkeletonTheme color="#D5D8DC " highlightColor="#AAB7B8">

                        <Skeleton height={30} />
                        <Skeleton count={1} width={450} height={700} />
                     </SkeletonTheme>


           <SkeletonTheme color="#D5D8DC " highlightColor="#AAB7B8">

                        <Skeleton height={30} />
                        <Skeleton count={1} width={450} height={700} />
                     </SkeletonTheme>


          <SkeletonTheme color="#D5D8DC " highlightColor="#AAB7B8">

                        <Skeleton height={30} />
                        <Skeleton count={1} width={450} height={700} />
                     </SkeletonTheme>
            
                   </div>

                
                   <div className="foobar" >
                       <SkeletonTheme color="#D5D8DC " highlightColor="#AAB7B8">

                        <Skeleton height={30} />
                        <Skeleton count={1} width={450} height={700} />
                     </SkeletonTheme>


           <SkeletonTheme color="#D5D8DC " highlightColor="#AAB7B8">

                        <Skeleton height={30} />
                        <Skeleton count={1} width={450} height={700} />
                     </SkeletonTheme>


          <SkeletonTheme color="#D5D8DC " highlightColor="#AAB7B8">

                        <Skeleton height={30} />
                        <Skeleton count={1} width={450} height={700} />
                     </SkeletonTheme>
                     </div>
        



               </div>
            </div>
         </div>





      </div>
   )
}

export default SkeletonsElements
