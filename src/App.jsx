import { motion } from "framer-motion";
import { Check } from "lucide-react";
import capa from "./assets/ss.png";


export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-14 items-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <span className="uppercase tracking-wide text-pink-700 font-semibold">
            eBook digital — leitura imediata
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold mt-4 leading-tight text-gray-900">
            TEA — Tratar, aprender e acolher
          </h1>

          <p className="mt-6 text-gray-600 text-lg leading-relaxed max-w-xl">
            Um guia simples, acolhedor e direto para quem quer entender melhor o Transtorno do Espectro Autista
            e oferecer apoio com amor, respeito e conhecimento.
          </p>

          <div className="mt-10">
            <a href="https://pay.kiwify.com.br/SGvDsNg" target="_blank" rel="noopener noreferrer">
              <button className="px-10 py-6 text-lg rounded-2xl shadow-xl bg-pink-600 hover:bg-pink-700 text-white">
                Compre aqui
              </button>
            </a>
            <p className="text-gray-500 text-sm mt-3">Acesso imediato ao eBook</p>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="relative">
          <div className="bg-white rounded-3xl shadow-2xl p-6">
            <img
              src={capa}
              alt="Capa do eBook TEA"
              className="mx-auto rounded-2xl w-full max-w-md object-contain"
            />

          </div>
          <div className="absolute inset-0 -z-10 blur-3xl bg-pink-200/40 rounded-full" />
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-center text-3xl md:text-4xl font-bold">O que voce encontra no eBook</h2>
        <p className="text-center text-gray-600 mt-3 max-w-2xl mx-auto">
          Explicacoes claras e praticas para o dia a dia — sem termos complicados.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {[
            'Conceitos essenciais sobre o TEA',
            'Sinais de alerta e orientacoes importantes',
            'Como acolher com carinho e respeito',
            'Rotina, comunicacao e ambiente seguro',
            'Mitos x verdades sobre autismo',
            'Guia pratico para familia e educadores'
          ].map((t, i) => (
            <div key={i} className="rounded-2xl shadow-md bg-white">
              <div className="p-6 flex gap-3 items-start">
                <Check className="text-pink-600" />
                <p className="text-gray-700">{t}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-pink-50 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold">Comece agora mesmo</h3>
          <p className="text-gray-600 mt-2">Clique no botao abaixo e receba o eBook no mesmo instante.</p>

          <a href="https://pay.kiwify.com.br/SGvDsNg" target="_blank" rel="noopener noreferrer">
            <button className="mt-6 px-10 py-6 text-lg rounded-2xl shadow-xl bg-pink-600 hover:bg-pink-700 text-white">
              Compre aqui
            </button>
          </a>
        </div>
      </section>
    </div>
  );
}
