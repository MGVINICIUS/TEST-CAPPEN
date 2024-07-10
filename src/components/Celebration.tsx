import { TextFadeInFromLeft, TextSlideUpOnScroll } from '@/lib/Animations'
import Image from 'next/image'
import Link from 'next/link'
export const Celebration = () => {
    return (
        <div className="flex items-center justify-start h-screen px-5">
            <div className='hidden lg:flex flex-col items-center justify-between gap-2 h-[500px]'>
                <div className='text-black/20 text-xs font-bold leading-normal tracking-[7.2px] -rotate-90'>50 ANOS</div>
                <div className='h-[400px] w-[1px] bg-black/20'></div>
            </div>
            <div className='flex flex-col gap-5 lg:gap-10 max-w-[620px] mx-auto'>   
                <h1 className="font-normal text-2xl lg:text-[30px] leading-normal font-aurea-ultra-roman text-sand overflow-hidden"><TextSlideUpOnScroll once={true}>Celebre conosco os 50 anos de uma indústria genuinamente brasileira de transformação do Brasil pela Iquine!</TextSlideUpOnScroll></h1>
                <div className="text-base font-normal font-aeonik leading-[26px] text-sand"><TextFadeInFromLeft once={true}>A Iquine busca captar a essência brasileira em seus produtos. Consolidada como a maior indústria de tintas do Brasil com capital 100% nacional, a empresa traz tecnologias exclusivas e soluções para o mercado, desde sua fundação, em 7 de fevereiro de 1974, por Delino Souza. Iniciando sua jornada na produção de colas, a empresa rapidamente se especializou em tintas, sempre guiada pela pesquisa e o aprimoramento para o desenvolvimento de produtos pioneiros, como o Dialine, primeira fórmula de esmalte de secagem rápida do Brasil. Hoje, presente nos principais pontos de venda em todo o país, a Iquine ocupa o 3º lugar no mercado nacional e lidera as vendas nas regiões Norte e Nordeste, transformando os setores de tintas imobiliárias e industriais.</TextFadeInFromLeft></div>
                <Link href="https://www.grupoiquine.com.br/" className="font-aeonik text-base font-normal leading-[26px] text-sand">Explore mais sobre a história e os produtos da Iquine em nosso site.</Link>
            </div>
        </div>
    )
}