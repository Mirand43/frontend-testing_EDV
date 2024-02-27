// Importação dos módulos necessários do Next.js
import Image from 'next/image';
import Link from 'next/link';

// Importação dos ícones e imagens necessárias para a barra de navegação
import Logo from '../../public/assets/icons/Logo.png';
import IconBlocks from '../../public/assets/icons/blocks.png';
import IconEqualizer from '../../public/assets/icons/Equalizer.png';
import IconGroupChat from '../../public/assets/icons/GroupChat.png';

// Definição dos itens do menu de navegação
const menuItems = [
    { text: 'Users', href: '/' },
    { text: 'Patients', href: '/PatientsSection' },
    { text: 'Hospitals', href: '/' },
    { text: 'Notice', href: '/' },
    { text: 'Help Center', href: '/' },
];

// Componente funcional principal para a barra de navegação
export default function Navbar() {
    return (
        <>
            {/* Container da barra de navegação */}
            <div className="w-screen bg-[#285430] h-16 text-white">
                <div className="p-5 grid grid-cols-2">
                    {/* Seção do logo e navegação */}
                    <div className='flex'>
                        <div className='px-10 mr-12'>
                            {/* Uso do componente Image do Next.js para exibir o logo */}
                            <Image src={Logo} alt="logo..." />
                        </div>

                        {/* Navegação: Mapeiamento sos itens do menu e criação dos links para cada um */}
                        <div className='flex gap-14'>
                            {menuItems.map((item, index) => (
                                <Link key={index} href={item.href} passHref legacyBehavior>
                                    <a className={`rounded-3xl h-12`}>
                                        {item.text}
                                    </a>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Seção de configurações: Ícones com links para diferentes páginas */}
                    <div className='col-end-7 col-span-2'>
                        <div className='flex gap-6'>
                            {/* Cada ícone é um link para uma página específica */}
                            <Link href='/'>
                                <Image src={IconBlocks} alt="Blocks.." />
                            </Link>

                            <Link href='/'>
                                <Image src={IconEqualizer} alt="Equalizer.." />
                            </Link>

                            <Link href='/'>
                                <Image src={IconGroupChat} alt="GroupChat.." />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}