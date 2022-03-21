const body = document.querySelector('body')

function headhead() {
    const header = document.createElement('header')
    const h1 = document.createElement('h1')
    h1.classList.add('nomeLoja')
    h1.innerText = 'ShopCruzeiroSAF'
    const img = document.createElement('img')
    img.id = 'fotoCruzeiro'
    img.src = 'https://pbs.twimg.com/profile_images/1436524246335905792/Nc_yrwhP_400x400.jpg'
    const nav = document.createElement('nav')
    const ul = document.createElement('ul')
    ul.classList.add('menuNav')
    const li1 = document.createElement('li')
    const a1 = document.createElement('a')
    a1.href = '#todos'
    a1.innerText = 'Todos'
    const li2 = document.createElement('li')
    const a2 = document.createElement('a')
    a2.href = '#acessorios'
    a2.innerText = 'Acessorios'
    const li3 = document.createElement('li')
    const a3 = document.createElement('a')
    a3.href = '#blusas'
    a3.innerText = 'Blusas'
    const li4 = document.createElement('li')
    const a4 = document.createElement('a')
    a4.href = '#calcas'
    a4.innerText = 'Calcas'
    body.appendChild(header)
    header.appendChild(h1)
    h1.appendChild(img)
    header.appendChild(nav)
    nav.appendChild(ul)
    ul.appendChild(li1)
    li1.appendChild(a1)
    ul.appendChild(li2)
    li2.appendChild(a2)
    ul.appendChild(li3)
    li3.appendChild(a3)
    ul.appendChild(li4)
    li4.appendChild(a4)
}
headhead()

const carCompra = document.getElementById("carrinho")


const vitrineShow = [{
        categoria: 'Blusas',
        nome: 'Moletom Cruzeiro, escudo simples',
        imagem: "https://i.pinimg.com/236x/5c/74/cc/5c74ccd1544f1c74424f4ba2c9a9404c--hooded-sweatshirts-chelsea-fc.jpg",
        descricao: 'Moletom confortavel, quente e muito lindo, ideal para a epoca de frio!',
        valor: 250.00,
        add: 'Adicionar ao carrinho'
    },
    {
        categoria: 'Blusas',
        nome: 'Camisa do Cruzeiro, modelo torcedor',
        imagem: "https://static3.tcdn.com.br/img/img_prod/1042930/camisa_adidas_cruzeiro_i_2022_95157_2_d0894649a711067283374388517dd563.jpg",
        descricao: 'Camisa linda mostrando o escudo e o nosso grande raposao!!!',
        valor: 380.00,
        add: 'Adicionar ao carrinho'
    },
    {
        categoria: 'Acessorios',
        nome: 'Touca do Cruzeiro modelo atleta',
        imagem: "https://static.netshoes.com.br/produtos/gorro-new-era-cruzeiro/08/306-1327-008/306-1327-008_zoom1.jpg",
        descricao: 'Belissima touca, muito confortavel, ideal para a epoca de frio e muito estilosa!!!',
        valor: 75.00,
        add: 'Adicionar ao carrinho'
    },
    {
        categoria: 'Calcas',
        nome: 'Calca Cruzeiro, modelo jogador',
        imagem: "https://static3.tcdn.com.br/img/img_prod/1042930/calca_adidas_sere_19_trg_pnt_azul_74710_3_1893c26c4d5dd23b2de21a01b39f6d79.jpg",
        descricao: 'Calca perfeita, otima para pratica de esportes!!!',
        valor: 280.00,
        add: 'Adicionar ao carrinho'
    },
    {
        categoria: 'Blusas',
        nome: 'Camisa do Cruzeiro retro',
        imagem: "https://static3.tcdn.com.br/img/img_prod/1042930/camisa_adidas_cruzeiro_iii_2021_94387_2_2efe845d8f3f88cc3c5a75ea8136597e.jpg",
        descricao: 'Camisa perfeita modelo antigo em alusao ao Palestra Italia!!',
        valor: 250.00,
        add: 'Adicionar ao carrinho'
    },
    {
        categoria: 'Acessorios',
        nome: 'Mascara do Cruzeiro',
        imagem: "https://static3.tcdn.com.br/img/img_prod/311840/mascara_cruzeiro_azul_79318_1_20200619113147.jpg",
        descricao: 'Mascara para protecao contra a COVID, para voce continuar vestindo o azul estrelado!!!',
        valor: 10.00,
        add: 'Adicionar ao carrinho'
    }
]
const div = document.createElement("div")
div.classList.add("alinharTudo")
const main = document.createElement('main')
const ul = document.createElement("ul")
ul.classList.add('vitrine')
const vitrine = document.querySelector(".vitrine")
body.appendChild(div)
div.appendChild(main)
main.appendChild(ul)

function openVitrine() {

    for (let indice = 0; indice < vitrineShow.length; indice++) {
        const produtoAtual = vitrineShow[indice]


        const li = document.createElement("li")
        const div = document.createElement('div')
        div.id = 'setImg'
        const img = document.createElement("img")
        const h4 = document.createElement("h4")
        const h2 = document.createElement("h2")
        const p = document.createElement("p")
        const p2 = document.createElement('p')
        const span = document.createElement("span")
        const spanAddCar = document.createElement("span")
        const a = document.createElement("a")
        a.href = "#addCarrinho"
        img.src = produtoAtual.imagem

        li.classList.add("configLi")
        h4.classList.add("bottomTit")
        h4.innerText = produtoAtual.categoria
        h2.innerText = produtoAtual.nome
        p.innerText = produtoAtual.descricao
        p2.classList.add('valorCarrinho')
        span.classList.add("valor")
        span.innerText = 'R$' + produtoAtual.valor
        span.classList.add("carrinho")
        span.innerText = produtoAtual.add

        ul.appendChild(li)
        li.appendChild(div)
        div.appendChild(img)
        li.appendChild(h4)
        li.appendChild(h2)
        li.appendChild(p)
        li.appendChild(p2)
        p2.appendChild(span)
        p2.appendChild(spanAddCar)
        spanAddCar.appendChild(a)

    }
}
openVitrine()