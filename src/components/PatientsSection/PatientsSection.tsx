import React from 'react';

const PatientsSection = () => {
  return (
    <div>
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
              <Image src={IconPoint} alt="iconPoint..." />
              <Image src={IconPoint} alt="iconPoint..." />
            </div>
          </div>
        </div>
      </div>

      <div>
        <h1>Patients Section</h1>
      </div>
    </div>
  )
}

export default PatientsSection