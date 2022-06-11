// Arrays 

// const alunos = 'Lui Maria Joao' // dessa maneira fica mais dificil de trabalhar, precisa fatiar... o jeito certo é o debaixo

const alunos = ['Luiz', 'Joao', 'Maria']; // aqui separados por virgulas, preferencialmente com apenas um tipo de dados dentro, para ficar mais facil e organizado

console.log(alunos);

// Sabemos que as strigs sao indexadas por numeros ex: 0123456789...... para cada carater 
// nos arrays sao indexado por cada elemento, sendo 1 para o Luiz, 2 para o Joao, 3 para a Maria

//               0       1       2
const alunos = ['Luiz', 'Joao', 'Maria'];
console.log(alunos[1]);
//Joao

alunos[0] = 'Eduardo';
//assim vc substitui um item do array na posição 0

alunos[3] = 'Luiz'
//dessa forma vc adiciona uma nova posição no array na posição 3, o problema é saber quando termina o ultimo item do array para adicionar dessa forma;


alunos[alunos.length] = 'Mario' 
alunos[alunos.length] = 'Mario2'
alunos[alunos.length] = 'Mario3'
//dessa forma adiciona mais nomes na ultima posição 

alunos.push('Otavio');
alunos.push('Paulo');
console.log(alunos)
//Dessa forma adiciona os nomes ao final do array tbm

alunos.unshift('Amarildo'); //dessa forma o item adicionado é no começo do array, conforme for adicionando os itens vao sendo adicionados no começo
alunos.unshift('Amaro');

alunos.pop('Amaro'); // esse comando retira itens do array
const removido = alunos.pop('Amarildo'); // Dessa forma o item removido é adicionado a uma variavel "removido"

delete alunos[1];
//dessa forma é removido um item do array, porem o indice "1" continua intacto, mantendo a configuração de indices do array deixando-o apenas vazio

console.log(alunos[50]); // dessa forma vc pode acessar uma posição de indice, porem nao dara erro mas dara a mensagem undefined

//o typeof do array sera Object

