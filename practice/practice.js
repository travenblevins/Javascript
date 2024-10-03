const duplicate = document.getElementById('duplicate')



function pair(list) {
    const matches = []
    const currentList = []


    for (let i = 0; i < list.length; i++) {
        const listItem = list[i]

        if(currentList.includes(listItem)) {
            matches.push(listItem)
            currentList.push(listItem)
            duplicate.innerHTML = 'Duplicates are ' + matches
        } else {
            currentList.push(listItem)
            console.log(currentList)
        }
    }
}

const firstList = [1, 2, 3, 4, 5, 6, 6, 7 , 7]

pair(firstList)

const include = document.getElementById('include')

function search(text, searchTerm) {
    const words = text.split(' ')

    if(words.includes(searchTerm)) {
        include.innerHTML = searchTerm + ' is included in ' + words.join(' ')
    }
}

search('Hello there', 'Hello')


class zoo {
    constructor(address, entryFee, animals) {
        this.address = address
        this.entryFee = entryFee
        this.animals = animals

        this.residentDiscount = 10
        this.Status = true
    }

    hasAnimal(animal) {
        if (this.animals.includes(animal)) {
            return 'We have ' + animal
        } else {
            return 'Sorry we do not have this animal'
        }
    }

    isOpen() {
        if(Status === true) {
            return 'We are open'
        } else {
            return 'We are closed'
        }
    }

    getResidentPrice() {
        return entryFee - residentDiscount
    }
}

