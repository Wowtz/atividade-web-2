interface Experience {
  role: string;
  company: string;
  period: string;
  highlights: string[];
}
 
interface Education {
  degree: string;
  institution: string;
  status: string;
}
 
export const Resume: React.FC = () => {
  const experiences: Experience[] = [
    {
      role: 'Senior Software Engineer / Architect',
      company: 'GFT Technologies',
      period: 'Nov 2024 - Presente',
      highlights: [
        'Atuação no desenho arquitetural e implementação de ecossistemas distribuídos de alta disponibilidade.',
        'Desenho de soluções orientadas a microsserviços e mensageria de alto throughput com Apache Kafka e gRPC.',
        'Promoção técnica a nível sênior em reconhecimento à liderança em padrões arquiteturais e governança de código.'
      ]
    },
    {
      role: 'Software Developer',
      company: 'Confitec',
      period: 'Out 2021 - Out 2024',
      highlights: [
        'Desenvolvimento de aplicações corporativas escaláveis utilizando o ecossistema .NET Core / C# e SQL Server.',
        'Modelagem de banco de dados relacional e otimização de consultas e rotinas críticas.',
        'Implementação de padrões de arquitetura como Repository, DDD e pipelines de integração contínua.'
      ]
    },
    {
      role: 'Software Developer',
      company: 'Cadmus',
      period: 'Jan 2021 - Set 2021',
      highlights: [
        'Manutenção e entrega de features em sistemas web legados e modernos.',
        'Integração com APIs RESTful e foco em boas práticas de Clean Code e testes unitários.'
      ]
    }
  ];
 
  const education: Education[] = [
    {
      degree: 'Tecnologia em Desenvolvimento de Software Multiplataforma',
      institution: 'Fatec Votorantim - Benedicto Pagliato',
      status: 'Em andamento'
    }
  ];
 
  const skills = [
    'C# / .NET Core',
    'Distributed Architecture',
    'Apache Kafka',
    'Redis',
    'gRPC',
    'SQL Server',
    'REST APIs',
    'Design Patterns & Clean Architecture',
    'Docker & CI/CD'
  ];
 
  return (
    <div className="mx-auto max-w-3xl rounded-xl bg-white p-8 text-slate-800 shadow-sm sm:p-10">
      {/* Header */}
      <header className="border-b border-slate-200 pb-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          Walter de Camargo Grangeiro
        </h1>
        <p className="mt-1 text-lg font-medium text-blue-600">
          Senior Software Engineer & Architect
        </p>
        <div className="mt-2 flex flex-wrap items-center gap-2 text-sm text-slate-500">
          <span>Sorocaba / Votorantim, SP - Brasil</span>
          <span>•</span>
          <span>Disponível para atuações estratégicas / remotas</span>
        </div>
      </header>
 
      {/* Summary */}
      <section className="mt-8">
        <h2 className="border-b border-slate-100 pb-1 text-xs font-bold uppercase tracking-wider text-slate-500">
          Resumo Profissional
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-600">
          Engenheiro de Software Sênior e Arquiteto com cerca de 7 anos de experiência no ecossistema .NET, especializado em sistemas distribuídos, mensageria de alto desempenho e arquitetura corporativa orientada a domínio. Foco contínuo em robustez técnica, integridade estrutural e escalabilidade.
        </p>
      </section>
 
      {/* Skills */}
      <section className="mt-8">
        <h2 className="border-b border-slate-100 pb-1 text-xs font-bold uppercase tracking-wider text-slate-500">
          Competências Técnicas
        </h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700 hover:bg-slate-200"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
 
      {/* Experience */}
      <section className="mt-8">
        <h2 className="border-b border-slate-100 pb-1 text-xs font-bold uppercase tracking-wider text-slate-500">
          Experiência Profissional
        </h2>
        <div className="mt-4 space-y-6">
          {experiences.map((exp, index) => (
            <div key={index} className="space-y-1.5">
              <div className="flex flex-col justify-between sm:flex-row sm:items-baseline">
                <div>
                  <h3 className="text-base font-semibold text-slate-900">{exp.role}</h3>
                  <span className="text-sm font-medium text-slate-600">{exp.company}</span>
                </div>
                <span className="text-xs font-medium text-slate-400">{exp.period}</span>
              </div>
              <ul className="list-disc space-y-1 pl-4 text-sm text-slate-600">
                {exp.highlights.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
 
      {/* Education */}
      <section className="mt-8">
        <h2 className="border-b border-slate-100 pb-1 text-xs font-bold uppercase tracking-wider text-slate-500">
          Formação Acadêmica
        </h2>
        <div className="mt-4 space-y-3">
          {education.map((edu, idx) => (
            <div key={idx} className="flex flex-col justify-between sm:flex-row sm:items-baseline">
              <div>
                <h3 className="text-sm font-semibold text-slate-900">{edu.degree}</h3>
                <p className="text-sm text-slate-600">{edu.institution}</p>
              </div>
              <span className="text-xs font-medium text-slate-400">{edu.status}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
 
export default Resume;