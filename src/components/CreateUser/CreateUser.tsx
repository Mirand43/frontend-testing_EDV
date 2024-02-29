import React from 'react'
import IconPoint from '../../../public/assets/icons/point.png'
import Image from 'next/image'

const CreateUser = () => {
  return (
    <div>
      <div className='w-screen bg-white shadow-md'>
        <div className="p-2 px-32 py-4">
          <div className='flex gap-1'>

            <div className='text-[#C9C9C9] bg-[#FFF] w-28 h-12 flex items-center justify-center rounded-[6px]'>
              <span>Administration</span>
            </div>

            <div className='text-[#C9C9C9] bg-[#FFF] w-28 h-12 flex items-center justify-center rounded-[6px] flex gap-1'>
              <Image src={IconPoint} alt="iconPoint..." />
            </div>

            <div className='text-[#C9C9C9] bg-[#FFF] w-28 h-12 flex items-center justify-center rounded-[6px] w-auto'>
              <span>Add a new doctor</span>
            </div>

          </div>
        </div>
      </div>

      {/* Seção principal de cadastro */}
      <div className='flex items-center justify-center mt-14'>

        {/* Formulário de cadastro de usuários */}
        <div className='p-10'>
          
        </div>
      </div>
    </div>
  )
}

export default CreateUser