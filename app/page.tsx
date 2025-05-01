import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-purple-100 to-white">
        <div className="absolute inset-0 z-0 bg-[url('/images/pattern-bg.png')] opacity-10 bg-repeat"></div>
        <div className="container px-4 mx-auto z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-purple-100 rounded-full">
                <span className="text-purple-700 font-medium">Módulo Educacional</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Práticas Pedagógicas <span className="text-purple-700">Inclusivas</span>
              </h1>
              <p className="text-lg text-gray-700 max-w-lg">
                Um material didático interativo para educadores comprometidos com a construção de uma escola que acolhe
                e valoriza a diversidade.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/conteudo/introducao"
                  className="inline-flex items-center justify-center px-6 py-3 bg-purple-700 text-white font-medium rounded-lg hover:bg-purple-800 transition-colors"
                >
                  Iniciar Curso
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href="/sobre"
                  className="inline-flex items-center justify-center px-6 py-3 border border-purple-300 text-purple-700 font-medium rounded-lg hover:bg-purple-50 transition-colors"
                >
                  Sobre o Curso
                </Link>
              </div>
            </div>
            <div className="relative h-[400px] w-full">
              <Image
                src="/images/hero-illustration.png"
                alt="Crianças diversas de mãos dadas representando inclusão"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Princípios Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Princípios Norteadores da Inclusão</h2>
            <p className="text-gray-700">
              A inclusão escolar está alicerçada sobre dois princípios de base: desejo de mudança e formação.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-sm border border-purple-100 p-6 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-purple-700 font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Desejo de Mudança</h3>
              <p className="text-gray-700">
                A transformação nas escolas ocorre à medida que o desejo de mudança passa a ser compartilhado por todos
                os seus atores: alunos, professores, famílias e equipe gestora.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-purple-100 p-6 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-purple-700 font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Formação</h3>
              <p className="text-gray-700">
                Refere-se à mudança na qual os atores da escola compartilham entre si em um movimento contínuo de
                construir e desconstruir experiências e saberes.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-purple-100 p-6 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-purple-700 font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Hospitalidade</h3>
              <p className="text-gray-700">
                O acolhimento incondicional que respeita a singularidade de cada aluno e a necessidade de preparação
                profissional para garantir acesso, permanência e participação.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/conteudo/principios"
              className="inline-flex items-center text-purple-700 font-medium hover:text-purple-800"
            >
              Saiba mais sobre os princípios
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Reflexões Section */}
      <section className="py-16 bg-purple-50">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] w-full">
              <Image
                src="/images/reflection-illustration.png"
                alt="Ilustração de uma criança pensando"
                fill
                className="object-contain"
              />
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Reflexões para uma Educação Inclusiva</h2>

              <div className="bg-purple-600 rounded-lg p-6 text-white">
                <h3 className="text-xl font-medium mb-2">
                  O direito à diferença vem sendo assegurado a todos os alunos na sua escola?
                </h3>
                <p className="text-purple-100">
                  Uma questão fundamental para refletirmos sobre nossas práticas pedagógicas.
                </p>
              </div>

              <div className="bg-purple-600 rounded-lg p-6 text-white">
                <h3 className="text-xl font-medium mb-2">Você tem praticado a hospitalidade na sua escola?</h3>
                <p className="text-purple-100">
                  O acolhimento incondicional é essencial para a construção de uma escola verdadeiramente inclusiva.
                </p>
              </div>

              <Link
                href="/conteudo/reflexoes"
                className="inline-flex items-center justify-center px-6 py-3 bg-purple-700 text-white font-medium rounded-lg hover:bg-purple-800 transition-colors"
              >
                Explorar Reflexões
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Rupturas Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Rupturas Necessárias</h2>
            <p className="text-gray-700">
              Para que a inclusão escolar aconteça, é necessário inovar o trabalho pedagógico, das concepções às
              práticas.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="bg-purple-700 p-6">
              <h3 className="text-xl font-bold text-white text-center">
                Que rupturas são necessárias para a construção de uma escola inclusiva?
              </h3>
            </div>

            <div className="p-6 space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-700 font-bold">1</span>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900 mb-2">Ruptura com o velho</h4>
                  <p className="text-gray-700">
                    A ruptura com o velho e a instauração do novo torna a escola uma instância formativa para seus
                    profissionais, um ambiente propício à reflexão e à tomada de decisões.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-700 font-bold">2</span>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900 mb-2">Nova concepção de aprender</h4>
                  <p className="text-gray-700">
                    O sujeito que aprende não busca encontrar algo, mas criar; não almeja dominar um entendimento
                    absoluto, mas estudar a experiência de modo relativo.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-700 font-bold">3</span>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900 mb-2">Superação de classificações</h4>
                  <p className="text-gray-700">
                    É necessário superar a classificação dos alunos entre "comuns" e "especiais" e considerar cada um em
                    sua singularidade.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/conteudo/rupturas"
              className="inline-flex items-center justify-center px-6 py-3 border border-purple-300 text-purple-700 font-medium rounded-lg hover:bg-purple-50 transition-colors"
            >
              Aprofundar neste tema
            </Link>
          </div>
        </div>
      </section>

      {/* Autores Section */}
      <section className="py-16 bg-purple-50">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Autores</h2>
            <p className="text-gray-700">Conheça os pesquisadores responsáveis pelo desenvolvimento deste material.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Rita Vieira de Figueredo</h3>
              <p className="text-gray-600 mb-4">
                Doutora (Ph.D) em Psicopedagogia - Université Laval, Quebec, Canadá.
                <br />
                Professora titular aposentada da Universidade Federal do Ceará (UFC), Brasil.
              </p>
              <div className="border-t border-gray-100 pt-4 mt-4">
                <h4 className="text-sm font-medium text-gray-500 mb-2">Áreas de Pesquisa</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full">
                    Educação Inclusiva
                  </span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full">Psicopedagogia</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full">Formação Docente</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-2">José Eduardo de Oliveira Evangelista Lanuti</h3>
              <p className="text-gray-600 mb-4">
                Doutor em Educação pela Universidade Estadual de Campinas (UNICAMP), Brasil.
                <br />
                Professor da Universidade Estadual Paulista Júlio de Mesquita Filho (UNESP), Brasil.
              </p>
              <div className="border-t border-gray-100 pt-4 mt-4">
                <h4 className="text-sm font-medium text-gray-500 mb-2">Áreas de Pesquisa</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full">
                    Educação Inclusiva
                  </span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full">
                    Práticas Pedagógicas
                  </span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full">Diversidade</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-white">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-xl font-bold mb-4">Práticas Pedagógicas Inclusivas</h3>
              <p className="text-gray-400 mb-6">
                Material didático para educação especial inclusiva: ação docente na perspectiva da teoria
                histórico-cultural.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Conteúdo</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/conteudo/introducao" className="text-gray-300 hover:text-white">
                    Introdução
                  </Link>
                </li>
                <li>
                  <Link href="/conteudo/principios" className="text-gray-300 hover:text-white">
                    Princípios Norteadores
                  </Link>
                </li>
                <li>
                  <Link href="/conteudo/rupturas" className="text-gray-300 hover:text-white">
                    Rupturas Necessárias
                  </Link>
                </li>
                <li>
                  <Link href="/conteudo/reflexoes" className="text-gray-300 hover:text-white">
                    Reflexões
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Sobre</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/sobre" className="text-gray-300 hover:text-white">
                    O Curso
                  </Link>
                </li>
                <li>
                  <Link href="/autores" className="text-gray-300 hover:text-white">
                    Autores
                  </Link>
                </li>
                <li>
                  <Link href="/bibliografia" className="text-gray-300 hover:text-white">
                    Bibliografia
                  </Link>
                </li>
                <li>
                  <Link href="/contato" className="text-gray-300 hover:text-white">
                    Contato
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Práticas Pedagógicas Inclusivas. Todos os direitos reservados.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <Link href="/termos" className="text-gray-400 hover:text-white text-sm">
                Termos de Uso
              </Link>
              <Link href="/privacidade" className="text-gray-400 hover:text-white text-sm">
                Política de Privacidade
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
