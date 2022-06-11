// Operação ternaria
// (condição) ? 'Valor para verdadeiro' : 'Valor para falso';

const pontuacaoUsuario = 1500;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuario VIP' : 'Usuario Normal';

console.log(nivelUsuario);

/* seria o mesmo que fazer essa operação abaixo

if (pontuacaoUsuario >= 1000) {
    console.log('Usuario VIP');
} else {
    console.log('Usuario Normal');
}
 */
