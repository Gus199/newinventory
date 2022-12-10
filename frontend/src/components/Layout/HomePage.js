import React from 'react'

// import {
//   CloudArrowUpIcon,
//   LockClosedIcon,

// } from '@heroicons/react/24/outline'

import {BsFillEyeFill} from 'react-icons/bs'
import {BsEye} from 'react-icons/bs'


function HomePage() {
    const features = [
        {
          name: 'Push to Deploy',
          description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi vitae lobortis.',
          icon: BsFillEyeFill,
        },
        {
          name: 'SSL Certificates',
          description: 'Qui aut temporibus nesciunt vitae dicta repellat sit dolores pariatur. Temporibus qui illum aut.',
          icon: BsEye,
        },
       
      ]
  return (
    <>
             {/* Feature section with grid */}
             <div className="relative bg-white py-16 sm:py-24 lg:py-32">
             <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
             
               <div className="mt-12 ">
                 <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-2 ">
                   {features.map((feature) => (
                     <div key={feature.name} className="pt-6  ">
                       <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8 bg-slate-10 hover:bg-gray-200  shadow-2xl">
                         <div className="-mt-6">
                           <div>
                             <span className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-teal-500 to-cyan-600 p-3 shadow-lg ">
                               <feature.icon className="h-6 w-6 text-white " aria-hidden="true" />
                             </span>
                           </div>
                           <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">{feature.name}</h3>
                           <p className="mt-5 text-base text-gray-500">{feature.description}</p>
                         </div>
                       </div>
                     </div>
                   ))}
                 </div>
               </div>
               
               {/* Render it Hard Code withe second Card */}

               {/* <div className="mt-12 ">
                 <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-2 ">
                   {features.map((feature) => (
                     <div key={feature.name} className="pt-6  ">
                       <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8 bg-slate-10 hover:bg-gray-200  shadow-2xl">
                         <div className="-mt-6">
                           <div>
                             <span className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-teal-500 to-cyan-600 p-3 shadow-lg ">
                               <feature.icon className="h-6 w-6 text-white " aria-hidden="true" />
                             </span>
                           </div>
                           <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">{feature.name}</h3>
                           <p className="mt-5 text-base text-gray-500">{feature.description}</p>
                         </div>
                       </div>
                     </div>
                   ))}
                 </div>
               </div> */}

               {/* ends here */}
             </div>
           </div>
           </>
  )
}

export default HomePage
