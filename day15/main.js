


function pairs() {
    const list = ['a','b','c', 'a', 'b', 'b', 'a',]
    const numberCounter = {}
    for(let i = 0; i < list.length; i++) {
        const currentItem = list[i]
        const previousCount = numberCounter[currentItem] ?? 0
        const newCount = previousCount + 1
        
        if (newCount === 3) {
            return currentItem
        } else {
            numberCounter[currentItem] = newCount
        }
    }  
}

console.log(pairs())



function search(text, searchText) {
    const words = text.split('')
    for (let i = 0; i < words.length; i++) {
        const currentWord = [words[i]]
        const isMatch = currentWord.toLowerCase().indexOf(searchText.LowerCase()) !== -1

        if(isMatch) {
            MatchedWords.push(currentWord)
        }
    }
    
}


class zoo {
    constructor(address, EntryFee, animals) {
        this.address = address
        this.EntryFee = EntryFee
        this.animals = animals

        this.residentDiscount = 10
        this.Status = true
    }
    hasAnimal(animal) {
        return this.animals.includes(animal);
    }

    isOpen(Status) {
        if (Status) {
            return true
        }
        else {
            false
        }
    }

    getResidentPrice() {
        return this.EntryFee - this.residentDiscount
    }   
}




