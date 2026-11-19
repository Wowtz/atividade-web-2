import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

type AtalhoCardProps = {
    to: string;
    icon: ReactNode;
    titulo: string;
    descricao: string;
    external?: boolean;
};

function AtalhoCard({ to, icon, titulo, descricao, external = false }: AtalhoCardProps) {
    const className = "bg-white p-6 rounded-2xl no-underline shadow-sm border border-[#E2E8F0] flex items-start gap-4 box-border hover:border-[#2563EB] transition-colors group";
    const content = (
        <>
            <div className="bg-[#EFF6FF] text-[#2563EB] w-11 h-11 rounded-xl flex items-center justify-center text-xl shrink-0">
                {icon}
            </div>
            <div>
                <h4 className="text-base font-bold text-[#1E293B] mb-1 mt-0 group-hover:text-blue-600 transition-colors">
                    {titulo}
                </h4>
                <p className="text-[13px] text-[#64748B] m-0">{descricao}</p>
            </div>
        </>
    );

    if (external) {
        return (
            <a href={to} className={className}>
                {content}
            </a>
        );
    }

    return (
        <Link to={to} className={className}>
            {content}
        </Link>
    );
}

export default AtalhoCard;