import React from 'react'
import IconPoint from '../../../public/assets/icons/point.png'
import Image from 'next/image';

const UsersSection = () => {
  return (
    <>
      <div className='w-screen bg-white '>
        <div className="p-2 px-32 py-3">
          <div className='flex gap-8 '>
            <div className='bg-[#F4FFF3] w-28 h-12 flex items-center justify-center rounded-[6px]'>
              <span className="text-black">Doctor</span>
            </div>

            <div className='text-[#C9C9C9] bg-[#FFF] w-28 h-12 flex items-center justify-center rounded-[6px]'>
              <span>Administration</span>
            </div>

            <div className='text-[#C9C9C9] bg-[#FFF] w-28 h-12 flex items-center justify-center rounded-[6px]'>
              <span>Accounts</span>
            </div>

            <div className='text-[#C9C9C9] bg-[#FFF] w-28 h-12 flex items-center justify-center rounded-[6px] flex gap-1'>
              <Image src={IconPoint} alt="iconPoint..."/>
              <Image src={IconPoint} alt="iconPoint..."/>
            </div>
          </div>
        </div>
      </div>

      <div className='p-10 px-36'>
        <h1>Users Section</h1>
      </div>
    </>
  )
}

export default UsersSection
