const newEmployees = () => {
    const employees = {
      id1: 'Pedro Guerra', // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: 'Luiza Drumond', // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: 'Carla Paiva', // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };
const holdArray = Object.values(newEmployees());

function createEmail(nameComplete) {
  let nameEmail = nameComplete.map((fullName) => {
      return {fullName, email: fullName.toLowerCase().replace(' ', '_') + `@trybe.com`};
  })
    return nameEmail
}
const novoEmployees = {};
createEmail(holdArray).forEach((objeto, index) => {novoEmployees[`id${index + 1}`] = objeto});



console.log(novoEmployees);