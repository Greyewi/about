const ladderLength = 100

// const travelingByLadder = (countSteps) => {
//   if(countSteps === 0) {
//     return 1
//   } else if(countSteps < 0){
//     return 0
//   } else {
//     return travelingByLadder(countSteps - 1) + travelingByLadder(countSteps - 2)
//   }
// }

let previousResult = {}

const travelingByLadder = (countSteps) => {
  if(previousResult[countSteps]){
    return previousResult[countSteps]
  }

  if(countSteps === 0) {
    return 1
  } else if(countSteps < 0){
    return 0
  } else {
    previousResult[countSteps] = travelingByLadder(countSteps - 1) + travelingByLadder(countSteps - 2)
    return previousResult[countSteps]
  }
}

console.log(travelingByLadder(ladderLength))