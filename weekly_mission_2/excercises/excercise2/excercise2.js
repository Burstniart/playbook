const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
   ]

console.log('~~ Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH ~~'); 
explorers.forEach((explorer) => console.log(explorer.name))

console.log('~~ Imprime el stack de cada explorer, usa FOR EACH ~~');
explorers.forEach((explorer) => console.log(`${explorer.name} Stack: ${explorer.stack}`))

console.log('~~ Crea una nueva lista con las listas de stacks de cada explorer, usa MAP ~~');
const stacks = explorers.map(function(explorer){ return explorer.stack})
console.log(stacks)

// check live session to confirm this answer
console.log('~~ Obtén la lista de explorers que tengan en su stack "js", usa FILTER (para validar un elemento en un lista se usa el método includes) ~~')
const explorersJS = explorers.filter((javascript) => // esta es una función
  javascript.stack.includes('js')) // indicación para solo filtrar elementos que incluyan "js"
console.log(explorersJS);

console.log('~~Busca el primer explorer que sea de la CDMX, usa FIND ~~')
const explorerCDMX = explorers.find((cdmx) => cdmx.city == 'CDMX')
console.log(`${explorerCDMX.name} lives in ${explorerCDMX.city}`);

console.log('~~ Obtén la suma de todos los exercises_completed, usa REDUCE ~~')
const totalExcercisesCompleted = explorers.reduce((total, current) => total + current.exercises_completed, 0)
console.log(`${totalExcercisesCompleted} total excecises completed`);

console.log('~~ Obtén la validación si al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true, usa SOME ~~')
const areSomeTrue = explorers.some((b) =>  b.missions.frontend.exercisesFinished === true)
console.log(areSomeTrue)

console.log('~~ Obtén la validación si todos los explorers tienen la propiedad isFinished del onboarding como true. Usa EVERY. ~~')
const areEveryTrue = explorers.every((b) =>  b.missions.onboarding.isFinished === true)
console.log(areEveryTrue);







