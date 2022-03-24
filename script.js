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
        tags: ['Blusas'],
        quantidade: 0
    },
    {
        categoria: 'Blusas',
        nome: 'Camisa do Cruzeiro, modelo torcedor',
        imagem: "https://static3.tcdn.com.br/img/img_prod/1042930/camisa_adidas_cruzeiro_i_2022_95157_2_d0894649a711067283374388517dd563.jpg",
        descricao: 'Camisa linda mostrando o escudo e o nosso grande raposao!!!',
        valor: 380.00,
        add: 'Adicionar ao carrinho',
        tags: ['Blusas'],
        quantidade: 0
    },
    {
        categoria: 'Acessorios',
        nome: 'Touca do Cruzeiro modelo atleta',
        imagem: "https://static.netshoes.com.br/produtos/gorro-new-era-cruzeiro/08/306-1327-008/306-1327-008_zoom1.jpg",
        descricao: 'Belissima touca, muito confortavel, ideal para a epoca de frio e muito estilosa!!!',
        valor: 75.00,
        add: 'Adicionar ao carrinho',
        tags: ['Acessorios'],
        quantidade: 0
    },
    {
        categoria: 'Calcas',
        nome: 'Calca Cruzeiro, modelo jogador',
        imagem: "https://static3.tcdn.com.br/img/img_prod/1042930/calca_adidas_sere_19_trg_pnt_azul_74710_3_1893c26c4d5dd23b2de21a01b39f6d79.jpg",
        descricao: 'Calca perfeita, otima para pratica de esportes!!!',
        valor: 280.00,
        add: 'Adicionar ao carrinho',
        tags: ['Calcas'],
        quantidade: 0
    },
    {
        categoria: 'Blusas',
        nome: 'Camisa do Cruzeiro retro',
        imagem: "https://static3.tcdn.com.br/img/img_prod/1042930/camisa_adidas_cruzeiro_iii_2021_94387_2_2efe845d8f3f88cc3c5a75ea8136597e.jpg",
        descricao: 'Camisa perfeita modelo antigo em alusao ao Palestra Italia!!',
        valor: 250.00,
        add: 'Adicionar ao carrinho',
        tags: ['Blusas'],
        quantidade: 0
    },
    {
        categoria: 'Acessorios',
        nome: 'Mascara do Cruzeiro',
        imagem: "https://static3.tcdn.com.br/img/img_prod/311840/mascara_cruzeiro_azul_79318_1_20200619113147.jpg",
        descricao: 'Mascara para protecao contra a COVID, para voce continuar vestindo o azul estrelado!!!',
        valor: 10.00,
        add: 'Adicionar ao carrinho',
        tags: ['Acessorios'],
        quantidade: 0
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
        button.classList.add("addCarrinho")
        button.id = 0 + indice
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
    const button = document.createElement('input')
    button.type = 'button'
    button.value = 'Pesquisar'
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
    spanQuant.innerHTML = 'Quantidade: '
    const spanSoma = document.createElement('span')
    spanSoma.id = 'result2'
    spanSoma.innerHTML = 'Total: '

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
    // const semFiltro = vitrineShow.filter((produtos) => {
    //     return produtos.categoria
    //})
    openVitrine(vitrineShow)
}

const todosList = document.querySelector('#Todos')
todosList.addEventListener('click', FiltroNao)


//barra de pesquisa ____________________________________________//

function findButton() {
    const inputValue = document.querySelector('#txtBusca')

    if (inputValue.value === 'Touca') {
        filtrarAcessorios()
    } else if (inputValue.value === 'Camisa') {
        filtrarBlusas()
    } else if (inputValue.value === 'Calca') {
        filtrarCalcas()
    } else if (inputValue.value === 'Cruzeiro') {
        FiltroNao()
    }
}

const listFinded = document.querySelector('#btnBusca')
listFinded.addEventListener('click', findButton)


const teste = document.querySelector('.vitrine')
const orgarnizarCar = document.querySelector('#carrinhoNovo')

//ADD no carrinho_________________________________________________________//

atualizarCarrinho = () => {
    const orgarnizarCar = document.querySelector('#carrinhoNovo')

    orgarnizarCar.innerHTML = ''
    vitrineShow.map((produto) => {
        if (produto.quantidade > 0) {
            orgarnizarCar.innerHTML += `<li> <img src="${produto.imagem}"></img>` +
                `<h1>${produto.nome}</h1>` +
                `<h1>R$${produto.valor},00</p>` +
                `<h3>Quantidade: ${produto.quantidade}</h3></li>`
        }
    })
}

const botaoAdd = document.getElementsByTagName('button')

for (let i = 0; i < botaoAdd.length; i++) {
    botaoAdd[i].addEventListener('click', function() {
        let id = this.getAttribute('id')
        vitrineShow[id].quantidade++
            atualizarCarrinho()

    })


}

for (let i = 0; i < botaoAdd.length; i++) {
    botaoAdd[i].addEventListener('click', function() {
        let quantItens = 0
        console.log(quantItens)
        quantItens + 1

    })


}



/*function addCarrinho(event) {
    const aComprar = event.target
    const carrinhoDin = document.createElement('li')
    orgarnizarCar.appendChild(carrinhoDin)

    const valor1 = document.querySelector('#precoLI')
    const result2 = document.querySelector('#result2')
    const somando = valor1
    const resultado = []
    console.log(resultado)
    resultado.push(somando)




    if (aComprar === funcCar0) {
        carrinhoDin.innerHTML += `${vitrineShow[0].nome} <p></p>  <p></p> R$ <span id='precoLi'>${vitrineShow[0].valor}</span>,00<p></p>`
    }
    if (aComprar === funcCar1) {
        carrinhoDin.innerHTML += `${vitrineShow[1].nome} <p></p>  <p></p> R$ <span id='precoLi'>${vitrineShow[1].valor}</span>,00<p></p>`
    }
    if (aComprar === funcCar2) {
        carrinhoDin.innerHTML += `${vitrineShow[2].nome} <p></p>  <p></p> R$ <span id='precoLi'>${vitrineShow[2].valor}</span>,00<p></p>`
    }
    if (aComprar === funcCar3) {
        carrinhoDin.innerHTML += `${vitrineShow[3].nome} <p></p>  <p></p> R$ <span id='precoLi'>${vitrineShow[3].valor}</span>,00<p></p>`
    }
    if (aComprar === funcCar4) {
        carrinhoDin.innerHTML += `${vitrineShow[4].nome} <p></p>  <p></p> R$ <span id='precoLi'>${vitrineShow[4].valor}</span>,00<p></p>`
    }
    if (aComprar === funcCar5) {
        carrinhoDin.innerHTML += `${vitrineShow[5].nome} <p></p>  <p></p> R$ <span id='precoLi'>${vitrineShow[5].valor}</span>,00<p></p>`
    }
}
const funcCar0 = document.querySelector('#addCarrinho0')
funcCar0.addEventListener('click', addCarrinho)
const funcCar1 = document.querySelector('#addCarrinho1')
funcCar1.addEventListener('click', addCarrinho)
const funcCar2 = document.querySelector('#addCarrinho2')
funcCar2.addEventListener('click', addCarrinho)
const funcCar3 = document.querySelector('#addCarrinho3')
funcCar3.addEventListener('click', addCarrinho)
const funcCar4 = document.querySelector('#addCarrinho4')
funcCar4.addEventListener('click', addCarrinho)
const funcCar5 = document.querySelector('#addCarrinho5')
funcCar5.addEventListener('click', addCarrinho)
*/
//soma itens__________________________________//

//let itensCarrinho = 0
//Adicionar item no carrinho

// const teste = document.querySelector('.vitrine')
// const orgarnizarCar = document.querySelector('#carrinhoNovo')

// function addCarrinho(event) {

//     if (event.target.tagName === 'BUTTON') {
//         console.log(event.target)
//         const mini = event.target.parentNode.parentNode
//             //const imgSrc = mini.getElementsByTagName('img')[0].imagem
//         const titleText = mini.getElementsByTagName('h2')[0].innerText
//         const value = mini.getElementsByClassName('valor')[0].innerText

//         let li = document.createElement('li')
//         let img = document.createElement('img')
//         let h2 = document.createElement('h2')
//         let span = document.createElement('span')
//         let a = document.createElement('a')

//         li.classList.add('li-internaCarrinho')
//         img.classList.add('info-carrinho-produto-img')
//         h2.classList.add('carrinho-produtos-titulo')
//         span.classList.add('carrinho-produtos-price')
//         a.classList.add('carrinho-produtos-remove')

//         //img.src = imgSrc

//         h2.innerText = titleText
//         span.innerText = value
//         a.innerText = 'Remover produto'

//         const orgarnizarCar = document.querySelector('#carrinhoNovo')
//         orgarnizarCar.appendChild(li)
//         li.appendChild(h2)
//         li.appendChild(span)
//         li.appendChild(a)
//         li.appendChild(img)

//         itensCarrinho++
//     }
// }

/*categoria: 'Calcas',
nome: 'Calca Cruzeiro, modelo jogador',
imagem: "https://static3.tcdn.com.br/img/img_prod/1042930/calca_adidas_sere_19_trg_pnt_azul_74710_3_1893c26c4d5dd23b2de21a01b39f6d79.jpg",
descricao: 'Calca perfeita, otima para pratica de esportes!!!',
valor: 280.00,
add: 'Adicionar ao carrinho',
tags: ['Calcas']


if (aComprar.tagName == 'BUTTON') {
    const cardProduto = aComprar.closest('li')
    const cardProdutoClone = cardProduto.cloneNode(true)
    orgarnizarCar.appendChild(cardProdutoClone)
    
}*/




// const finalQuanti = 0

// function somaValue(somar) {
//     const quantiCar = document.querySelector('#carrinhoNovo')
//     if (quantiCar.length < 0) {
//         finalQuanti += quantiCar.length
//     }
//     somaValue(finalQuanti)
// }
//spanQuant += `${finalQuanti}`