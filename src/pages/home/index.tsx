import { Container } from "../../components/container";

export function Home() {
  return (
    <Container>
      <section className="bg-white p-4 rounded-lg w-full max-w-3xl mx-auto flex justify-center items-center gap-2 mt-4 ">
        <input
          className="w-full border-2 rounded-lg px-3 outline-none"
          placeholder="Digite o nome do carro..."
        />
        <button className="bg-red-500 h-9 px-8 rounded-lg text-white font-medium text-lg">
          Buscar
        </button>
      </section>
      <h1 className="font-bold text-center mt-6 text-2xl mb-4">
        Carros novos e usados em todo Brasil
      </h1>

      <main className="grid gird-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <section className="w-full bg-white rounded-lg">
          <img
            className="w-full rounded-lg mb-2 max-h-72 hover:scale-105 transition-all "
            src="https://image.webmotors.com.br/_fotos/anunciousados/gigante/2024/202411/20241113/volvo-ex30-69-kw-eletrico-ultra-wmimagem15083746816.webp?s=fill&w=1920&h=1440&q=75"
            alt=""
          />
          <p className="font-bold mt-1 mb-2 px-2">Volvo</p>
          <div className="flex flex-col px-2">
            <span className="text-zinc-700 mb-6">Ano 2024/2024 | 0 Km </span>
            <strong className="text-black font-medium text-xl">
              R$ 229.000
            </strong>
          </div>

          <div className="w-full h-px bg-slate-200 my-2"></div>
          <div className="px-2 pd-2">
            <span className="text-zinc-700">Campo Grande - MS</span>
          </div>
        </section>

        <section className="w-full bg-white rounded-lg">
          <img
            className="w-full rounded-lg mb-2 max-h-72 hover:scale-105 transition-all "
            src="https://image.webmotors.com.br/_fotos/anunciousados/gigante/2024/202410/20241021/volvo-ex30-69-kw-eletrico-plus-wmimagem17185217319.jpg?s=fill&w=1920&h=1440&q=75"
            alt=""
          />
          <p className="font-bold mt-1 mb-2 px-2">Volvo</p>
          <div className="flex flex-col px-2">
            <span className="text-zinc-700 mb-6">Ano 2024/2024 | 0 Km </span>
            <strong className="text-black font-medium text-xl">
              R$ 290.000
            </strong>
          </div>

          <div className="w-full h-px bg-slate-200 my-2"></div>
          <div className="px-2 pd-2">
            <span className="text-zinc-700">São Paulo - SP</span>
          </div>
        </section>

        <section className="w-full bg-white rounded-lg">
          <img
            className="w-full rounded-lg mb-2 max-h-72 hover:scale-105 transition-all "
            src="https://image.webmotors.com.br/_fotos/anunciousados/gigante/2024/202411/20241107/volvo-ex30-69-kw-eletrico-plus-wmimagem20510166842.webp?s=fill&w=1920&h=1440&q=75"
            alt=""
          />
          <p className="font-bold mt-1 mb-2 px-2">Volvo</p>
          <div className="flex flex-col px-2">
            <span className="text-zinc-700 mb-6">Ano 2024/2024 | 0 Km </span>
            <strong className="text-black font-medium text-xl">
              R$ 310.000
            </strong>
          </div>

          <div className="w-full h-px bg-slate-200 my-2"></div>
          <div className="px-2 pd-2">
            <span className="text-zinc-700">Rio de Janeiro - RJ</span>
          </div>
        </section>
      </main>
    </Container>
  );
}
