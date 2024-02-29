import React, { useEffect, useState } from 'react';
import Avatar from '../../../public/assets/image/Avatar.png';
import Image from 'next/image';
import IconButton from '../../../public/assets/icons/Button.png';
import api from '../../services/Api';
import CircularProgress from '@mui/material/CircularProgress'

// Interface que define a estrutura dos dados do usuário
interface UserData {
    codigo: string;
    descricao: string;
    data_inicio: string;
    tipo_ato: string;
    numero_ato: string;
}

const Tables: React.FC = () => {
    // Estado para armazenar os dados da API e o status de carregamento
    const [data, setData] = useState<UserData[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Requisição à API para obter dados
                const response = await api.get('NCM');

                // Verificar se a resposta da API foi bem-sucedida (código 200)
                if (response.status !== 200) {
                    throw new Error('Erro ao buscar os dados da API');
                }

                // Mapear os dados recebidos para o formato da interface UserData
                const newData: UserData[] = response.data.map((item: any) => ({
                    codigo: item.userData.codigo,
                    descricao: item.userData.descricao,
                    data_inicio: item.userData.data_inicio,
                    tipo_ato: item.userData.tipo_ato,
                    numero_ato: item.userData.numero_ato,
                }));

                // Definir os dados no estado após um intervalo de 2 segundos (apenas para simular um carregamento)
                setTimeout(() => {
                    setData(newData);
                    setLoading(false);
                }, 2000);
            } catch (error) {
                // Lidar com erros durante a requisição
                console.error(error);
                setLoading(false);
            }
        };

        fetchData(); // Chamar a função para buscar dados quando o componente montar
    }, []); // O segundo parâmetro (array vazio) garante que useEffect só seja chamado uma vez, equivalente a componentDidMount

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
                <thead>
                    {/* Cabeçalho da tabela */}
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
                    {/* Renderizar os dados da API na tabela */}
                    {loading ? (
                        // Se ainda estiver carregando, exibir mensagem
                        <div className="text-center">
                            <CircularProgress />
                            <small className='ml-4 mt-2'>Carregando dados...</small>
                        </div>
                    ) : (
                        // Se o carregamento estiver concluído, mapear os dados para as linhas da tabela
                        data.map((userData) => (
                            <tr className="text-sm" key={userData.codigo}>
                                <td className="py-2 px-14">
                                    {/* Conteúdo da primeira coluna */}
                                    <div className='flex x-space-2 gap-4'>
                                        <div>
                                            <Image src={Avatar} alt="Avatar" />
                                        </div>
                                        <div className='mt-2'>
                                            <span className='font-semibold'>{userData.tipo_ato}</span><br />
                                            <span className='text-[#B5B5C3]'>{userData.descricao}</span>
                                        </div>
                                    </div>
                                </td>
                                {/* Renderizar outras colunas com os dados correspondentes */}
                                <td className="py-2 px-10">{userData.codigo}</td>
                                <td className="py-2 px-10">exemplo1234@gmail.com</td>
                                <td className="py-2 px-10">(603) {userData.numero_ato}</td>
                                <td className="py-2 px-10">
                                    <div className=''>
                                        <span>{userData.data_inicio}</span><br />
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
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Tables;