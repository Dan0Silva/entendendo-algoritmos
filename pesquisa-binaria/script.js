const array = new Array(100).fill(1)
const randomNumber = Math.floor(Math.random() * 101)

const generateNumbersForArray = () => {
    array.forEach((element, index) => {
        array[index] = element + index
    })
}

const binarySearch = (array, itemToSearch) => {
    let beginning = 0
    let end = array.length
    let middle = Math.floor((beginning + end) / 2)
    let guess = array[middle]

    while (guess != itemToSearch) {
        if (guess < itemToSearch) {
            beginning = middle
            middle = Math.floor((beginning + end) / 2)
            guess = array[middle]
        } else if (guess > itemToSearch) {
            end = middle
            middle = Math.floor((beginning + end) / 2)
            guess = array[middle]
        }
    }

    return middle
}  

generateNumbersForArray()
console.log(array)
console.log('\n-------=-------\n')

console.log('item a pesquisar: ', randomNumber)
console.log('resultado: ', binarySearch(array, randomNumber))


