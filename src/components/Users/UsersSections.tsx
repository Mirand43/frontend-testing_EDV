import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import IconPoint from '../../../public/assets/icons/point.png';
import TablesUsers from '../Tables/Users';
import IconUsers from '../../../public/assets/icons/Add-user.png';

const UsersSection = () => {
  return (
    <>
      {/* Barra superior */}
      <div className='w-screen bg-white shadow-md'>
        <div className="p-2 px-4 sm:px-8 py-3">
          <div className='flex flex-col sm:flex-row items-center justify-between'>

            {/* Opções na barra superior */}
            <div className='flex gap-4'>
              <div className='bg-[#F4FFF3] w-28 h-12 flex items-center justify-center rounded-[6px]'>
                <span className="text-[#5F8D4E] font-semibold">Doctor</span>
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
      </div>

      {/* Seção principal de usuários */}
      <div className='flex items-center justify-center mt-14'>
        <div className='p-10 bg-white p-8 rounded-[8px] shadow-md w-auto'>
          <div className='p-18 grid grid-cols-2 md:grid-cols-2 md:p-5'>
            <div>
              <h1 className='font-semibold'>
                List of doctors
              </h1>
              <span className='text-sm text-[#B5B5C3]'>
                {345} available doctors
              </span>
            </div>

            <div className='col-end-3 col-span-1 md:cols-span-2 md:col-end-7'>
              <Link href='/CreateUser' className='bg-[#5F8D4E] text-white p-2 px-5 py-2 rounded-[6px] flex gap-2'>
                <Image src={IconUsers} alt='user...' className='w-4 h-5' />
                Add new doctor
              </Link>
            </div>
          </div>

          {/* Tabela de usuários */}
          <div className='p-4'>
            <TablesUsers />
          </div>
        </div>
      </div>
    </>
  );
}

export default UsersSection;