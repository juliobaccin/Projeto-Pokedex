const pokemonsCard = document.querySelectorAll('.cartao-pokemon')
const listaSelecaoPokemons = document.querySelectorAll('.pokemon')

listaSelecaoPokemons.forEach(pokemon => {

    pokemon.addEventListener('click', () => {

        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')

        const idPokemonSelecionado = pokemon.attributes.id.value

        const cartaoPokemonParaAbrir = document.getElementById('cartao-' + idPokemonSelecionado)
        cartaoPokemonParaAbrir.classList.add('aberto')

        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')

        pokemon.classList.add('ativo')

    })
})

var logo = document.querySelector('.imagemLOGO')
function aocarregar() {
    pikachu.style.transform = 'scale(1.1)'
    logo.style.transform = 'scale(1.1)'
}

var audioFundo = document.querySelector('.audioFundo')
var audioPlay = document.querySelectorAll('.play')
function play() {
    audioFundo.play()
}
function pause() {
    audioFundo.pause()
}

var choque = document.querySelector('.choque')
var pikachu = document.querySelector('.imagem')
pikachu.addEventListener('click', function () {
    choque.style.display = 'block'
    choque.play()
})

var folha = document.querySelector('.folha')
var bulbasauro = document.querySelector('.imagemB')
bulbasauro.addEventListener('click', function () {
    folha.style.display = 'block'
    folha.play()

})

var fogo = document.querySelector('.fogo')
var charmander = document.querySelector('.imagemC')
charmander.addEventListener('click', function () {
    fogo.style.display = 'block'
    fogo.play()
})

var agua = document.querySelector('.agua')
var gyarados = document.querySelector('.imagemD')
gyarados.addEventListener('click', function(){
    agua.style.display = 'block'
    agua.play()
})

var fanta = document.querySelector('.fantasma')
var gengar = document.querySelector('.imagemE')
gengar.addEventListener('click', function(){
    fanta.style.display = 'block'
    fanta.play()
})

var drago = document.querySelector('.dragao')
var dragonite = document.querySelector('.imagemF')
dragonite.addEventListener('click', function(){
    drago.style.display = 'block'
    drago.play()
})

var aviso = document.querySelector('.aviso')

function mouseEntrar() {
    pikachu.style.transform = 'scale(1.2)'
    bulbasauro.style.transform = 'scale(1.3)'
    charmander.style.transform = 'scale(1.1)'
    gyarados.style.transform = 'scale(1.1)'
    gengar.style.transform = 'scale(1.2)'
    dragonite.style.transform = 'scale(1.1)'
    logo.style.transform = 'scale(1.2)'
    aviso.style.opacity = '1'
    aviso.style.transform = 'scale(1)'
}

function mouseSair() {
    pikachu.style.transform = 'scale(1)'
    bulbasauro.style.transform = 'scale(1)'
    charmander.style.transform = 'scale(1)'
    gyarados.style.transform = 'scale(1)'
    gengar.style.transform = 'scale(1)'
    dragonite.style.transform = 'scale(1)'
    logo.style.transform = 'scale(1.1)'
    aviso.style.opacity = '0'
    aviso.style.transform = 'scale(.8)'
}