// Inital items
const items = [
  {name: 'Bike', selected: false},
  {name: 'Car', selected: false},
  {name: 'Plane', selected: false},
  {name: 'Boat', selected: false},
  {name: 'Train', selected: false},
  {name: 'Bus', selected: false},
  {name: 'Subway', selected: false},
  {name: 'Motorcycle', selected: false},
]

function shuffle(array) {
  // Fisher-Yates (Knuth) Shuffle algorithm
  let currentIndex = array.length, randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
}

// Separate items in groups of 2
const separateItems = (items) => {
  const groups = []

  for (let i of items) {
    let index = items.indexOf(i)

    if (index % 2 !== 0 && (items.length % 2 === 0)) continue

    groups.push([items[index], items[items.indexOf(i) + 1]])

    if (items.indexOf(i) === (items / 2) - 1) {
      break
    }
  }

  return groups
}

const separateMoreGroups = (groups) => {
  // Split groups
  let array = []
  groups.forEach(group => group.forEach(item => array.push(item)))

  // Remove no selected items
  array = array.filter(group => group.selected)
  // Define selected false for all items
  array = array.map(group => {
    return {...group, selected: false}
  })

  if (groups.length === 1) {
    return []
  }

  return separateItems(array)
}

const suffleItems = shuffle(items)
const groups = separateItems(suffleItems)

let groupsShow = groups
let selected = []

while(groupsShow.length > 0) {
  groupsShow[0][0].selected = true
  selected.push(groupsShow[0][0])

  // Remove the first group
  groupsShow.shift()

  // Separate more groups
  if (groupsShow.length === 0 && selected.length >= 2) {
    groupsShow = separateItems(selected)
    console.log('NOVA RODADA')
    selected = []
  }
}

console.log(`O selecionado foi ${selected.map(item => item.name)}`)
