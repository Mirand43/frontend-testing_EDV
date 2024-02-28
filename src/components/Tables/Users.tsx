import React from 'react'
import Avatar from '../../../public/assets/image/Avatar.png'
import Image from 'next/image'
import IconButton from '../../../public/assets/icons/Button.png'

const Tables: React.FC = () => {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
                <thead>
                    <tr className="bg-[#FAFAFA] text-[#B5B5C3] text-sm">
                        <th className="py-3 px-14">Name</th>
                        <th className="py-3 px-10">ID</th>
                        <th className="py-3 px-10">Email</th>
                        <th className="py-3 px-10">Phone number</th>
                        <th className="py-3 px-10">Data added</th>
                        <th className="py-3 px-10">Status</th>
                        <th className='py-3 px-6'> </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="text-sm">
                        <td className="py-2 px-14">
                            <div className='flex x-space-2 gap-4'>
                                <div>
                                    <Image src={Avatar} alt="Avatar" />
                                </div>
                                <div className='mt-2'>
                                    <span className='font-semibold'>Brooklyn Simmons</span><br />
                                    <span className='text-[#B5B5C3]'>Dermatologists</span>
                                </div>
                            </div>
                        </td>
                        <td className="py-2 px-10">
                            87364523
                        </td>
                        <td className="py-2 px-10">
                            brooklyns@gmail.com
                        </td>
                        <td className="py-2 px-10">
                            (603) 555-0123
                        </td>
                        <td className="py-2 px-10">
                            <div className=''>
                                <span>21/12/2022</span><br />
                                <span className='text-sm text-[#B5B5C3]'>10:40 PM</span>
                            </div>
                        </td>
                        <td className="py-2 px-10">
                            <div className='bg-[#F4FFF3] rounded-[6px] h-10 flex items-center justify-center'>
                                <span className='p-4  text-[#5F8D4E]'>Approved</span>
                            </div>
                        </td>
                        <td className="py-2 px-6">
                            <Image src={IconButton} alt="Icon" />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Tables;