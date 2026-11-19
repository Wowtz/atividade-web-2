import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Aulas from "./pages/Aulas";
import Desenvolvedor from "./pages/Desenvolvedor";
import Estudos from "./pages/Estudos";

function App() {
  return (
    <>
      <header className="bg-[#0F172A] border-b border-[#1E293B] py-6 px-8">
        <div className="max-w-[1200px] mx-auto flex justify-between items-center flex-wrap gap-4">
          <div>
            <a href="/" className="no-underline group inline-block">
              <h1 className="text-white text-[26px] font-extrabold m-0 tracking-tight group-hover:text-blue-500 transition-colors">
                Biblioteca
              </h1>
              <p className="text-[#94A3B8] text-sm mt-1 m-0">Seu conhecimento começa aqui.</p>
            </a>
          </div>
          <div className="flex gap-3">
            <a
              href="/login"
              className="bg-[#2563EB] text-white py-2.5 px-5 rounded-lg text-sm font-semibold no-underline shadow-sm hover:bg-[#1d4ed8] transition-colors"
            >
              Entrar
            </a>
            <a
              href="/register"
              className="bg-transparent text-white border border-[#334155] py-2.5 px-5 rounded-lg text-sm font-semibold no-underline hover:bg-[#1e293b] transition-colors"
            >
              Criar conta
            </a>
          </div>
        </div>
      </header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aulas" element={<Aulas />} />
          <Route path="/desenvolvedor" element={<Desenvolvedor />} />
          <Route path="/estudos" element={<Estudos />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App