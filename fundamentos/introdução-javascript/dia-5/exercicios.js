    // Executando esse código iremos receber um erro `TypeError: Assignment to constant variable.`
    let pessoa = {
        nome: 'Henri',
        idade: 20
      }
      pessoa = {
        nome: 'Luna',
        idade: 19
      } // Altere essa estrutura para corrigir o erro.
      console.log('Nome:', pessoa.nome);
      console.log('Idade:', pessoa.idade);

    //EX 2 Transforme a função hello em uma arrow function

    // function hello(nome) {
    //     return `Olá, ${nome}!`
    //   }
    //   let nome = 'Ivan';
    //   console.log(hello(nome));

    const hello = (nome) => `Olá ${nome}!`;
    let nome = 'Xablau';

   
   // EX 3 Transforme a função nomeCompleto em uma arrow function
    // console.log(hello(nome));

    // function nomeCompleto(nome, sobrenome) {
    //     return `${nome} ${sobrenome}`
    //   }
    //   let nome = 'Ivan';
    //   let sobrenome = 'Pires';
    //   console.log(nomeCompleto(nome, sobrenome));

    const nomeCompleto = (nome, sobrenome) => `Olá ${nome} ${sobrenome}`;
    
    console.log(nomeCompleto('Ivan', 'Pires'))

    //EX 4 Altere a expressão if/else utilizando ternary operator


    // let speed = 90;
    // const speedCar = (speed) => {
    //   if (speed >= 120) {
    //     return `Você ultrapassou o limite de velocidade`;
    //   } else {
    //     return `Você está na velocidade permitida`;
    //   }
    // };
    // console.log(speedCar(speed));

    let speed = 1220;

    const speedCar = (speed) => (speed >= 120 ? `Você ultrapassou o limite de velocidade` : `Você NÃO ultrapassou o limite de velocidade`);
      console.log(speedCar(speed));