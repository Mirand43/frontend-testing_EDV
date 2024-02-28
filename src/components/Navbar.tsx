import Image from 'next/image'
import Link from 'next/link'

// Importando o logo e ícones
import Logo from '../../public/assets/icons/Logo.png'
import IconBlocks from '../../public/assets/icons/blocks.png'
import IconEqualizer from '../../public/assets/icons/Equalizer.png'
import IconGroupChat from '../../public/assets/icons/GroupChat.png'

// Interface para itens do menu de navegação
const menuItems = [
    { text: 'Usuários', href: '/' },
    { text: 'Pacientes', href: '#' },
    { text: 'Hospitais', href: '#' },
    { text: 'Avisos', href: '#' },
    { text: 'Centro de Ajuda', href: '#' },
];

// Componente Navbar
export default function Navbar() {
    return (
        <>
            {/* Barra de navegação */}
            <nav className="w-screen bg-[#285430] text-white">
                {/* Contêiner para o logo, itens do menu e informações do usuário */}
                <div className="p-5 flex flex-col sm:flex-row items-center justify-between">

                    {/* Logo e menu principal */}
                    <div className='flex items-center gap-4'>
                        <div className='px-4 sm:px-10 mr-4'>
                            <Image src={Logo} alt="logo..." />
                        </div>
                        
                        {/* Itens do menu principal */}
                        <div className='flex gap-4'>
                            {menuItems.map((item, index) => (
                                <Link key={index} href={item.href} passHref>
                                    <span className={`rounded-3xl h-12 sm:inline hidden`}>
                                        {item.text}
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Ícones e informações do usuário */}
                    <div className='flex gap-4'>
                        {/* Seção de ícones */}
                        <div className='flex gap-3 md:mt-3'>
                            <Link href='#'>
                                <Image src={IconBlocks} alt="Blocos.." />
                            </Link>

                            <Link href='#'>
                                <Image src={IconEqualizer} alt="Equalizador.." />
                            </Link>

                            <Link href='#'>
                                <Image src={IconGroupChat} alt="Chat em Grupo.." />
                            </Link>
                        </div>

                        {/* Seção de informações do usuário */}
                        <div className='flex items-center gap-2'>
                            <div className='flex flex-col items-end'>
                                <span className="hidden sm:inline">Marvin McKinney</span>
                                <span className="font-thin">Admin</span>
                            </div>

                            {/* Imagem do perfil do usuário */}
                            <div className='bg-[#396140] w-16 h-10 p-2 rounded-[6px] border-white flex items-center justify-center'>
                                <img src='caminho-para-sua-imagem.jpg' alt='M' className='w-4' />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}