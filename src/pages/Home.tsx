import AtalhoCard from '../components/AtalhoCard';
import CardLivros from '../components/CardLivros';

function Home() {
    return (
        <>
            <main className="max-w-[1200px] w-full mx-auto py-10 px-6 flex-1 box-border">
                <section className="text-center mb-12">
                    <h2 className="text-[32px] font-extrabold text-[#0F172A] mb-3 tracking-tight">
                        Bem-vindo à nossa biblioteca
                    </h2>
                    <p className="max-w-[700px] mx-auto text-base text-[#64748B] leading-[26px]">
                        Estamos construindo um espaço para você explorar e descobrir novos livros.
                        Fique à vontade para navegar pelo nosso catálogo e encontrar sua próxima leitura favorita!
                    </p>
                </section>

                {/* História / Reflexão do Dia */}
                <section className="bg-gradient-to-br from-[#1C1C1C] to-[#3A3A3A] p-8 rounded-2xl mb-10 shadow-sm border-l-6 border-[#B0B0B0]">
                    <div className="bg-[#B0B0B0] text-[#1C1C1C] text-[11px] font-bold uppercase py-1 px-2.5 rounded-full inline-block mb-3 tracking-wider">
                        Destaque do Dia
                    </div>
                    <p className="text-lg leading-7 text-[#E5E5E5] italic font-medium mb-3 mt-0">
                        "Os limites da minha linguagem significam os limites do meu mundo."
                    </p>
                    <span className="text-[#A3A3A3] text-[13px] font-semibold block">
                        — Ludwig Wittgenstein, Tractatus Logico-Philosophicus
                    </span>
                </section>

                {/* Menu principal / Atalhos */}
                <section className="mb-12">
                    <h3 className="text-xl font-bold text-[#0F172A] mb-5">Navegação Rápida</h3>
                    <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-5">
                        <AtalhoCard
                            to="/estudos"
                            icon="📖"
                            titulo="Cantinho de Estudos"
                            descricao="Pomodoro, tarefas e dicas"
                        />
                        <AtalhoCard 
                            to="/recomendacao" 
                            icon="★" 
                            titulo="Recomendações" 
                            descricao="Descubra novos livros" 
                        />
                        <AtalhoCard 
                            to="/acervo" 
                            icon="▣" 
                            titulo="Acervo" 
                            descricao="Explore nossa coleção" 
                        />
                        <AtalhoCard 
                            to="/aulas" 
                            icon="▸" 
                            titulo="Aulas Mobile" 
                            descricao="Aprenda desenvolvimento" 
                        />
                        <AtalhoCard 
                            to="/aulas" 
                            icon="▸" 
                            titulo="Aulas Web" 
                            descricao="Aprenda desenvolvimento" 
                        />
                        <AtalhoCard 
                            to="/desenvolvedor" 
                            icon="▸" 
                            titulo="Desenvolvedor" 
                            descricao="Desenvolvedor" 
                        />
                    </div>
                </section>

                {/* Livros em Destaque */}
                <section className="mb-12">
                    <div className="flex justify-between items-center mb-5">
                        <h3 className="text-xl font-bold text-[#0F172A] m-0">Livros em destaque</h3>
                        <a href="/acervo" className="text-[#2563EB] text-sm font-semibold no-underline hover:underline">
                            Ver todos →
                        </a>
                    </div>

                    <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-5">
                        <CardLivros
                            titulo="Dom Casmurro"
                            autor="Machado de Assis"
                            categoria="Romance"
                        />
                        <CardLivros
                            titulo="O Cortiço"
                            autor="Aluísio Azevedo"
                            categoria="Romance"
                        />
                        <CardLivros
                            titulo="O Pequeno Príncipe"
                            autor="Antoine de Saint-Exupéry"
                            categoria="Literatura"
                        />
                    </div>
                </section>
            </main>
        </>
    )
}

export default Home;