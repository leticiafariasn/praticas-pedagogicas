import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function IntroducaoPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-purple-700 text-white py-6">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <Link href="/" className="text-xl font-bold">
                Práticas Pedagógicas Inclusivas
              </Link>
            </div>
            <nav className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                <li>
                  <Link href="/" className="hover:text-purple-200 transition-colors">
                    Início
                  </Link>
                </li>
                <li>
                  <Link href="/conteudo" className="hover:text-purple-200 transition-colors">
                    Conteúdo
                  </Link>
                </li>
                <li>
                  <Link href="/sobre" className="hover:text-purple-200 transition-colors">
                    Sobre
                  </Link>
                </li>
                <li>
                  <Link href="/contato" className="hover:text-purple-200 transition-colors">
                    Contato
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="py-12">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <nav className="mb-6 text-sm text-gray-500">
              <ol className="flex items-center space-x-2">
                <li>
                  <Link href="/" className="hover:text-purple-700 transition-colors">
                    Início
                  </Link>
                </li>
                <li>
                  <span className="mx-2">/</span>
                </li>
                <li>
                  <Link href="/conteudo" className="hover:text-purple-700 transition-colors">
                    Conteúdo
                  </Link>
                </li>
                <li>
                  <span className="mx-2">/</span>
                </li>
                <li className="text-purple-700 font-medium">Introdução</li>
              </ol>
            </nav>

            {/* Title */}
            <div className="mb-10">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Introdução às Práticas Pedagógicas Inclusivas
              </h1>
              <div className="flex items-center text-sm text-gray-500">
                <span>Módulo 1</span>
                <span className="mx-2">•</span>
                <span>Tempo estimado de leitura: 15 minutos</span>
              </div>
            </div>

            {/* Content */}
            <div className="prose prose-purple max-w-none">
              <p className="lead">
                A inclusão escolar é um tema que há um bom tempo (no Brasil pelo menos há três décadas) vem sendo
                amplamente discutido no cenário educacional e, ainda hoje, gera preocupação, dúvidas e incertezas.
              </p>

              <p>
                Os resultados de duas pesquisas, uma coordenada por Figueredo (2008) e outra por Lanuti (2019),
                objetivando a construção de uma escola inclusiva, indicaram que a inclusão escolar está alicerçada sobre
                dois princípios de base: desejo de mudança e formação. Em relação ao primeiro aspecto, os pesquisadores
                afirmam que a transformação nas escolas ocorre à medida que o desejo de mudança passa a ser
                compartilhado por todos os seus atores: alunos, professores, famílias e equipe gestora.
              </p>

              <div className="bg-purple-100 rounded-lg p-6 my-8">
                <h3 className="text-xl font-bold text-purple-800 mb-3">
                  O direito à diferença vem sendo assegurado a todos os alunos na sua escola?
                </h3>
                <p className="text-gray-700">
                  Esta questão, sempre atual, merece nossa atenção e envolve, dentre outros assuntos, o direito de todos
                  os alunos a uma educação que garanta desenvolvimento a partir das suas capacidades individuais – o
                  direito à diferença.
                </p>
              </div>

              <p>
                Desde a Antiguidade, o ensino é concebido como uma transmissão de saberes que vêm sendo simplesmente
                reproduzidos. O aprender foi subvertido ao saber, à recognição, em um processo que tenta embrutecer
                aquilo que é livre por natureza: a aprendizagem, a criação (Lanuti e Mantoan, 2018).
              </p>

              <p>
                Nessa perspectiva, os alunos precisaram se adaptar às exigências da escola que, historicamente,
                idealizou um modelo de estudante a ser copiado. Definiu-se, assim, quem seria aluno comum e o diferente.
              </p>

              <div className="bg-purple-100 rounded-lg p-6 my-8">
                <h3 className="text-xl font-bold text-purple-800 mb-3">
                  Como superar essa classificação dos nossos alunos e considerar cada um em sua singularidade?
                </h3>
                <p className="text-gray-700">
                  Ainda que as instituições de ensino venham se equipando com um aparato tecnológico que promete
                  transformar a realidade escolar, nada de novo ocorrerá enquanto o mote do ato educativo for: a
                  definição do aluno "comum" e do aluno "especial".
                </p>
              </div>

              <p>
                Para que a inclusão escolar aconteça, é necessário inovar o trabalho pedagógico, das concepções às
                práticas. Inovar é ressignificar, diz respeito a uma mudança no modo de entender o que acontece na
                escola e o que nos afeta, isto é, as nossas experiências pedagógicas, como Larrosa (2015) bem definiu.
              </p>

              <figure className="my-8">
                <div className="relative h-[300px] w-full">
                  <Image
                    src="/images/children-illustration.png"
                    alt="Ilustração de crianças diversas representando inclusão"
                    fill
                    className="object-contain"
                  />
                </div>
                <figcaption className="text-center text-sm text-gray-500 mt-2">
                  A escola inclusiva valoriza a diversidade e reconhece as diferenças como oportunidades de
                  aprendizagem.
                </figcaption>
              </figure>

              <h2>O processo de construção de uma escola inclusiva</h2>

              <p>
                O processo de construção de uma escola inclusiva favorece, por consequência, o desenvolvimento
                profissional dos educadores implicados, permitindo enriquecer conhecimentos e desenvolver a capacidade
                no que diz respeito ao acolhimento e acompanhamento de todos os estudantes, indistintamente.
              </p>

              <p>
                Com base em Mantoan (2018), definimos esse acolhimento incondicional por <em>hospitalidade</em>. O
                desejo comum, a formação e a hospitalidade, a nosso ver, são princípios norteadores da inclusão escolar
                - que diz respeito à consideração da diferença de cada aluno, isto é, sua singularidade, e à necessidade
                de se preparar profissionalmente para que todos tenham garantidos acesso, permanência, participação e
                possam, segundo sua capacidade, aprender na escola comum.
              </p>

              <blockquote>
                <p>
                  "O sujeito que aprende, diferente daquele que sabe, não busca encontrar algo, mas criar; não almeja
                  dominar um entendimento absoluto, mas estudar a experiência de modo relativo; abandona o pressuposto e
                  cria uma compreensão provisória para o que lhe afeta em um dado momento."
                </p>
                <cite>— Lanuti e Mantoan (2018, p. 126)</cite>
              </blockquote>

              <h2>Rupturas necessárias</h2>

              <p>
                Segundo Lustosa e Figueredo (2021, p. 79), valores como respeito e cooperação se produzem por meio de
                vivências. A sala de aula é um espaço privilegiado de contato direto entre o professor e os estudantes,
                onde além de se ensinar e aprender os conteúdos curriculares, um professor "organiza e edifica relações
                de cooperação, respeito, solidariedade e subjetivação dos sujeitos. O inverso também é verdadeiro".
              </p>

              <p>
                Esse tipo de trabalho pedagógico somente se concretiza a partir de rupturas conceituais e metodológicas
                que repercutem diretamente na organização didática.
              </p>

              <div className="bg-purple-100 rounded-lg p-6 my-8">
                <h3 className="text-xl font-bold text-purple-800 mb-3">
                  Que rupturas são necessárias para a construção de uma escola inclusiva?
                </h3>
                <p className="text-gray-700">
                  A ruptura com o velho e a instauração do novo torna a escola uma instância formativa para seus
                  profissionais, "um ambiente propício à reflexão, ao estudo, à socialização de ideias e à tomada de
                  decisões que assumem o caráter de mudança necessária de acontecer na realidade concreta" (Lustosa e
                  Figueiredo, 2021, p. 90).
                </p>
              </div>
            </div>

            {/* Navigation */}
            <div className="mt-12 border-t border-gray-200 pt-8">
              <div className="flex flex-col sm:flex-row justify-between">
                <Link
                  href="/"
                  className="inline-flex items-center text-purple-700 font-medium hover:text-purple-800 mb-4 sm:mb-0"
                >
                  <ChevronLeft className="mr-2 h-4 w-4" />
                  Voltar para a página inicial
                </Link>
                <Link
                  href="/conteudo/principios"
                  className="inline-flex items-center text-purple-700 font-medium hover:text-purple-800"
                >
                  Próximo: Princípios Norteadores
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
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
