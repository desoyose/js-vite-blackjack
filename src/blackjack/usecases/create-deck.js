import _ from "underscore";

/**
 * Esta función crea un nuevo deck
 * @param {array<string>} tiposDeCartas 
 * @param {array<string>} tiposEspeciales 
 * @returns {array} retorna un nuevo deck
 */

export const crearDeck = (tiposDeCartas, tiposEspeciales) => {
    let deck = [];

    if(!tiposDeCartas || tiposDeCartas.length === 0) 
        throw new Error('TiposDeCarta es obligatorio y tiene que ser un Array de string');
    if(!tiposEspeciales || tiposEspeciales.length === 0) 
        throw new Error('tiposEspeciales es obligatorio y tiene que ser un Array de string');

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCartas ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCartas ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    return deck;
}