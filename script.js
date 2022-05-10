//const para o funcionamento geral do DOM

const body = document.querySelector('body')
let carrinhoAtt = []

// itens da vitrine declarados em forma de objeto

const vitrineShow = [{
        id: 1,
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
        id: 2,
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
        id: 3,
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
        id: 4,
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
        id: 5,
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
        id: 6,
        categoria: 'Acessorios',
        nome: 'Mascara do Cruzeiro',
        imagem: "https://static3.tcdn.com.br/img/img_prod/311840/mascara_cruzeiro_azul_79318_1_20200619113147.jpg",
        descricao: 'Mascara para protecao contra a COVID, para voce continuar vestindo o azul estrelado!!!',
        valor: 10.00,
        add: 'Adicionar ao carrinho',
        tags: ['Acessorios'],
        quantidade: 0
    },
    {
        id: 7,
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
        id: 8,
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
        id: 9,
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
        id: 10,
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
        id: 11,
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
        id: 12,
        categoria: 'Acessorios',
        nome: 'Touca do Cruzeiro modelo atleta',
        imagem: "https://static.netshoes.com.br/produtos/gorro-new-era-cruzeiro/08/306-1327-008/306-1327-008_zoom1.jpg",
        descricao: 'Belissima touca, muito confortavel, ideal para a epoca de frio e muito estilosa!!!',
        valor: 75.00,
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
    arrayDaVitrine.forEach((produtoAtual) => {

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
        img.src = produtoAtual.imagem
        const button = document.createElement("button")
        button.id = produtoAtual.id
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
        const aside = document.createElement('aside')
        const divAside = document.createElement('div')
        divAside.classList.add('asideGeral')


        button.classList.add("addCarrinho")
        button.addEventListener('click', () => {
            const carrinho = document.querySelector('#carrinhoNovo')
            carrinho.classList.add('barraDoCarrinho')
            const li = document.createElement('li')
            const img = document.createElement('img');
            const h3 = document.createElement('h3');
            const p = document.createElement('p');
            const id = button.getAttribute("id")

            const productFind = vitrineShow.find((produtoAtual) => {
                return produtoAtual.id === Number(id);
            })
            console.log(productFind)
            carrinhoAtt.push(productFind)
            img.src = produtoAtual.imagem;
            img.alt = produtoAtual.nome;
            h3.innerText = produtoAtual.nome;
            p.innerText = `R$ ${produtoAtual.valor}, 00`;

            carrinho.appendChild(li)
            li.appendChild(img);
            li.appendChild(h3);
            li.appendChild(p);

            let total = carrinhoAtt.reduce((a, produtoAtual) => {
                return a + Number(produtoAtual.valor)
            }, 0)

            console.log(total)
            const resultado = document.querySelector('#result2')
            resultado.innerText = `Valor total: R$ ${total},00
            

            Quantidade de itens: ${carrinhoAtt.length}`

            // const spanQuant = document.createElement('span')
            // spanQuant.id = 'result1'
            // spanQuant.innerHTML = `Quantidade: ${carrinhoAtt.length}`



        })

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
        divAside.appendChild(carLateral)
        carLateral.appendChild(spanNomeCar)
        carLateral.appendChild(orgarnizarCar)
        carLateral.appendChild(somaCar)
        somaCar.appendChild(spanQuant)
        somaCar.appendChild(spanSoma)
    });
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

    const spanSoma = document.createElement('span')
    spanSoma.id = 'result2'
    spanSoma.innerHTML = `<h2>Seja bem vindo ao Shop Cruzeiro SAF !</h2>

    <h2>A loja 5 estrelas!</h2>

    <h2 id="estrelas">&#9733 &#9733 &#9733 &#9733 &#9733</h2>`

    divAside.appendChild(carLateral)
    carLateral.appendChild(spanNomeCar)
    carLateral.appendChild(orgarnizarCar)
    carLateral.appendChild(somaCar)
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