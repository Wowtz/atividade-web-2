import { useEffect, useRef, useState } from 'react';

const POMODORO_DURATION = 25 * 60;

function formatTempo(segundosTotais: number) {
    const minutos = Math.floor(segundosTotais / 60);
    const segundos = segundosTotais % 60;
    return `${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
}

export default function Estudos() {
    const [segundosRestantes, setSegundosRestantes] = useState(POMODORO_DURATION);
    const [rodando, setRodando] = useState(false);
    const intervalRef = useRef<number | null>(null);

    useEffect(() => {
        if (!rodando) return;

        intervalRef.current = window.setInterval(() => {
            setSegundosRestantes((atual) => {
                if (atual <= 1) {
                    setRodando(false);
                    return 0;
                }
                return atual - 1;
            });
        }, 1000);

        return () => {
            if (intervalRef.current) window.clearInterval(intervalRef.current);
        };
    }, [rodando]);

    function handleIniciar() {
        if (segundosRestantes === 0) setSegundosRestantes(POMODORO_DURATION);
        setRodando(true);
    }

    function handlePausar() {
        setRodando(false);
    }

    function handleReiniciar() {
        setRodando(false);
        setSegundosRestantes(POMODORO_DURATION);
    }

    return (
        <main className="min-h-screen bg-slate-100">
            <section className="w-full max-w-4xl mx-auto px-5 py-8">
                <h2 className="mb-4 text-[21px] font-bold text-slate-800">
                    Cantinho de Estudos
                </h2>

                <div className="bg-white rounded-xl shadow-sm p-10 flex flex-col items-center gap-6">
                    <span className="text-[13px] font-bold uppercase tracking-wider text-[#2563EB]">
                        Pomodoro
                    </span>

                    <span className="text-6xl font-extrabold text-slate-800 tabular-nums">
                        {formatTempo(segundosRestantes)}
                    </span>

                    <div className="flex gap-3">
                        <button
                            onClick={handleIniciar}
                            disabled={rodando}
                            className="bg-[#2563EB] text-white py-2.5 px-6 rounded-lg text-sm font-semibold shadow-sm hover:bg-[#1d4ed8] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Iniciar
                        </button>

                        <button
                            onClick={handlePausar}
                            disabled={!rodando}
                            className="bg-transparent text-slate-700 border border-slate-300 py-2.5 px-6 rounded-lg text-sm font-semibold hover:bg-slate-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Pausar
                        </button>

                        <button
                            onClick={handleReiniciar}
                            className="bg-transparent text-slate-700 border border-slate-300 py-2.5 px-6 rounded-lg text-sm font-semibold hover:bg-slate-100 transition-colors"
                        >
                            Reiniciar
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
}
