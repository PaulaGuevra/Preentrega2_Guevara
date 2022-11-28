/*primer declaro las dos variables que tiene mi mazo de cartas*/
const PALOS = ["♠", " ♥", "♦", "♣ "];

const VALORES = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

/*creo la funcion para crear el mazo, utilicé flatmap ya que map solo me creaba 4 arrays diferentes, uno por cada palo*/
function crearMazoDeCartas() {
    return PALOS.flatMap (palo =>  {
        return VALORES.map (valor => {
            return new Carta(palo, valor);
        })
    })
}
/*creo la clase carta*/
class Carta {
    constructor(palo, valor){
        this.palo = palo;
        this.valor = valor;
    }
}

console.log(crearMazoDeCartas());



