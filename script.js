//const para o funcionamento geral do DOM

const body = document.querySelector('body')


// itens da vitrine declarados em forma de objeto

const vitrineShow = [{
        categoria: 'Blusas',
        nome: 'Moletom Cruzeiro, escudo simples',
        imagem: "https://i.pinimg.com/236x/5c/74/cc/5c74ccd1544f1c74424f4ba2c9a9404c--hooded-sweatshirts-chelsea-fc.jpg",
        descricao: 'Moletom confortavel, quente e muito lindo, ideal para a epoca de frio!',
        valor: 250.00,
        add: 'Adicionar ao carrinho',
        tags: ['Blusas']
    },
    {
        categoria: 'Blusas',
        nome: 'Camisa do Cruzeiro, modelo torcedor',
        imagem: "https://static3.tcdn.com.br/img/img_prod/1042930/camisa_adidas_cruzeiro_i_2022_95157_2_d0894649a711067283374388517dd563.jpg",
        descricao: 'Camisa linda mostrando o escudo e o nosso grande raposao!!!',
        valor: 380.00,
        add: 'Adicionar ao carrinho',
        tags: ['Blusas']
    },
    {
        categoria: 'Acessorios',
        nome: 'Touca do Cruzeiro modelo atleta',
        imagem: "https://static.netshoes.com.br/produtos/gorro-new-era-cruzeiro/08/306-1327-008/306-1327-008_zoom1.jpg",
        descricao: 'Belissima touca, muito confortavel, ideal para a epoca de frio e muito estilosa!!!',
        valor: 75.00,
        add: 'Adicionar ao carrinho',
        tags: ['Acessorios']
    },
    {
        categoria: 'Calcas',
        nome: 'Calca Cruzeiro, modelo jogador',
        imagem: "https://static3.tcdn.com.br/img/img_prod/1042930/calca_adidas_sere_19_trg_pnt_azul_74710_3_1893c26c4d5dd23b2de21a01b39f6d79.jpg",
        descricao: 'Calca perfeita, otima para pratica de esportes!!!',
        valor: 280.00,
        add: 'Adicionar ao carrinho',
        tags: ['Calcas']
    },
    {
        categoria: 'Blusas',
        nome: 'Camisa do Cruzeiro retro',
        imagem: "https://static3.tcdn.com.br/img/img_prod/1042930/camisa_adidas_cruzeiro_iii_2021_94387_2_2efe845d8f3f88cc3c5a75ea8136597e.jpg",
        descricao: 'Camisa perfeita modelo antigo em alusao ao Palestra Italia!!',
        valor: 250.00,
        add: 'Adicionar ao carrinho',
        tags: ['Blusas']
    },
    {
        categoria: 'Acessorios',
        nome: 'Mascara do Cruzeiro',
        imagem: "https://static3.tcdn.com.br/img/img_prod/311840/mascara_cruzeiro_azul_79318_1_20200619113147.jpg",
        descricao: 'Mascara para protecao contra a COVID, para voce continuar vestindo o azul estrelado!!!',
        valor: 10.00,
        add: 'Adicionar ao carrinho',
        tags: ['Acessorios']
    }
]

//montando a vitrine

const divAlinhaTudo = document.createElement("div")
divAlinhaTudo.classList.add("alinharTudo")
const main = document.createElement('main')
const ul = document.createElement("ul")
ul.classList.add('vitrine')
const vitrine = document.querySelector(".vitrine")
body.appendChild(divAlinhaTudo)
divAlinhaTudo.appendChild(main)
main.appendChild(ul)

//funcao que monta a vitrine de forma dinamica

function openVitrine(arrayDaVitrine) {
    ul.innerHTML = ''

    for (let indice = 0; indice < arrayDaVitrine.length; indice++) {
        const produtoAtual = arrayDaVitrine[indice]


        const li = document.createElement("li")
        const div = document.createElement('div')
        div.id = 'setImg'
        const img = document.createElement("img")
        const h4 = document.createElement("h4")
        const h2 = document.createElement("h2")
        const p = document.createElement("p")
        const p2 = document.createElement('p')
        const spanValor = document.createElement("span")
        const spanAddCar = document.createElement("span")
        const button = document.createElement("button")
        button.id = "addCarrinho"
        img.src = produtoAtual.imagem

        li.classList.add("configLi")
        h4.classList.add("bottomTit")
        h4.innerText = produtoAtual.categoria
        h2.innerText = produtoAtual.nome
        p.innerText = produtoAtual.descricao
        p2.classList.add('valorCarrinho')
        spanValor.classList.add("valor")
        spanValor.innerText = `R$ ${produtoAtual.valor},00`
        spanAddCar.classList.add("carrinho")
        button.innerText = produtoAtual.add

        ul.appendChild(li)
        li.appendChild(div)
        div.appendChild(img)
        li.appendChild(h4)
        li.appendChild(h2)
        li.appendChild(p)
        li.appendChild(p2)
        p2.appendChild(spanValor)
        p2.appendChild(spanAddCar)
        spanAddCar.appendChild(button)
    }
}
openVitrine(vitrineShow)

//funcao que monta a area de pesquisa e carrinho de compras

function asiaside() {
    //barra de pesquisa
    const aside = document.createElement('aside')
    const divAside = document.createElement('div')
    divAside.classList.add('asideGeral')
    const divPesquisa = document.createElement('div')
    divPesquisa.classList.add('pesquisaSite')
    const input = document.createElement('input')
    input.type = 'text'
    input.id = 'txtBusca'
    input.placeholder = 'O que voce procura?'
    const button = document.createElement('button')
    button.id = 'btnBusca'
    button.innerText = 'Pesquisar'

    divAlinhaTudo.appendChild(aside)
    aside.appendChild(divAside)
    divAside.appendChild(divPesquisa)
    divPesquisa.appendChild(input)
    divPesquisa.appendChild(button)

    //carrinho de compras
    const carLateral = document.createElement('div')
    carLateral.classList.add('carrinhoLateral')
    const spanNomeCar = document.createElement('span')
    spanNomeCar.id = 'carCompra'
    spanNomeCar.innerText = 'Carrinho de compras'
    const orgarnizarCar = document.createElement('ul')
    orgarnizarCar.id = 'carrinhoNovo'
    const somaCar = document.createElement('div')
    somaCar.id = 'finalCompra'
    const spanQuant = document.createElement('span')
    spanQuant.id = 'result1'
    const quantiItens = orgarnizarCar.length
    spanQuant.innerHTML = `Quantidade: ` + quantiItens
    console.log(quantiItens)
    const spanSoma = document.createElement('span')
    spanSoma.id = 'result2'
    spanSoma.innerText = 'Total: '

    divAside.appendChild(carLateral)
    carLateral.appendChild(spanNomeCar)
    carLateral.appendChild(orgarnizarCar)
    carLateral.appendChild(somaCar)
    somaCar.appendChild(spanQuant)
    somaCar.appendChild(spanSoma)


}
asiaside()

//filtros do menu

function filtrarBlusas() {
    const blusasList = vitrineShow.filter((produtos) => {
        return produtos.categoria === 'Blusas'
    })
    openVitrine(blusasList)
}

const buscaBlusa = document.querySelector('#Blusas')
buscaBlusa.addEventListener('click', filtrarBlusas)
    //________________________________________

function filtrarCalcas() {
    const calcasList = vitrineShow.filter((produtos) => {
        return produtos.categoria === 'Calcas'
    })
    openVitrine(calcasList)
}

const buscaCalca = document.querySelector('#Calcas')
buscaCalca.addEventListener('click', filtrarCalcas)
    //__________________________________________________

function filtrarAcessorios() {
    const acessoriosList = vitrineShow.filter((produtos) => {
        return produtos.categoria === 'Acessorios'
    })
    openVitrine(acessoriosList)
}
const buscaAcessorios = document.querySelector('#Acessorios')
buscaAcessorios.addEventListener('click', filtrarAcessorios)
    //_________________________________________________

function FiltroNao() {
    const semFiltro = vitrineShow.filter((produtos) => {
        return produtos.categoria
    })
    openVitrine(semFiltro)
}

const todosList = document.querySelector('#Todos')
todosList.addEventListener('click', FiltroNao)


//_____________________________________________________________//

function findButton() {
    const inputValue = document.querySelector('#txtBusca')

    if (inputValue.value === 'Acessorios') {
        filtrarAcessorios()
    } else if (inputValue.value === 'Blusas') {
        filtrarBlusas()
    } else if (inputValue.value === 'Calcas') {
        filtrarCalcas()
    } else if (inputValue.value === 'Todos') {
        FiltroNao()
    }
}

const listFinded = document.querySelector('#btnBusca')
listFinded.addEventListener('click', findButton)

//_____________________________________________________________//

const teste = document.querySelector('.vitrine')
teste.addEventListener('click', addCarrinho)
const orgarnizarCar = document.querySelector('#carrinhoNovo')

/*categoria: 'Calcas',
        nome: 'Calca Cruzeiro, modelo jogador',
        imagem: "https://static3.tcdn.com.br/img/img_prod/1042930/calca_adidas_sere_19_trg_pnt_azul_74710_3_1893c26c4d5dd23b2de21a01b39f6d79.jpg",
        descricao: 'Calca perfeita, otima para pratica de esportes!!!',
        valor: 280.00,
        add: 'Adicionar ao carrinho',
        tags: ['Calcas']*/


function addCarrinho(event) {
    console.log(addCarrinho)
    const aComprar = event.target
    if (aComprar.tagName == 'BUTTON') {
        const cardProduto = aComprar.closest('li')
        const cardProdutoClone = cardProduto.cloneNode(true)
            // for (let i = 0; i < cardProduto.length; i++) {
            //     delete cardProduto[i].nome
            //     delete cardProduto[i].descricao
            //     delete cardProduto[i].add
            // }
        orgarnizarCar.appendChild(cardProdutoClone)

    }
}

// const finalQuanti = 0

// function somaValue(somar) {
//     const quantiCar = document.querySelector('#carrinhoNovo')
//     if (quantiCar.length < 0) {
//         finalQuanti += quantiCar.length
//     }
//     somaValue(finalQuanti)
// }
//spanQuant += `${finalQuanti}`