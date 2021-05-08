let shoppingList = ['kenyér', 'tej', 'alma', 'tojás']
let gameOfThronesHouses = ['Stark', 'Arryn', 'Baratheon', 'Tully', 'Greyjoy', 'Lannister', 'Tyrell', 'Martell', 'Targaryen']
let fibonacciSequence = [1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
let myFavoriteMovies = ['Avatar', 'Az-1', 'Az-2']
let placesToVisit = ['Olaszország', 'Japán', 'Amerika']
let myFrieds = ['Feri', 'Szaki']
let programmingLanguages = ['HTML', 'CSS', 'jQuerry', 'JavaScript', 'PHP', 'C++']
let colorsOfRainbow = ['vörös', 'narancssárga', 'sárga', 'zöld', 'kék', 'valamilyen szin', 'ibolya']
let guestList = ['Tomi', 'Lili', 'Balázs', 'Zsuzsi', 'Misi', 'Kati', 'Janka', 'Pali']
let weddingGifts = ['turmixgép', 'kenyérpirító', 'kávéfőző', 'pohárkészlet', 'étkészlet', 'ágynemű', 'törölközők']
let booksToRead=['Svejk, a derék katona','Jane Eyre','A Gyűrű Szövetsége','A két torony','A király visszatér','Virágot Algernonnak']
let longArray=[3,4,67,32,691,72,52,38,342,87,65,7,49,9456,77,30]
let sortingHat=['Harry Potter háza a ','Hermione Granger háza a ','Ron Wweasley háza a ']
let numbers=[4,5,7,10,14]
function szorzo(szam) {
  for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]*=szam);
  }
}
shoppingList.push('rizs', 'tészta', 'bab')
shoppingList.unshift('csoki')
myFavoriteMovies.push('Naruto')
placesToVisit.push('Grönland', 'Nagy-Britannia', 'Norvégia')
myFrieds.unshift('Laci', 'Jani', 'Tomi')
shoppingList.push('tea')
shoppingList.pop()
shoppingList.unshift('tea')
shoppingList.shift()
shoppingList[0] = 'cukor'
colorsOfRainbow[5] = 'indigó'
guestList[5] = 'Marcsi'
weddingGifts.splice(2, 1)
weddingGifts.splice(1, 2)
shoppingList.splice(2, 0, 'sajt')
weddingGifts.splice(1,2, 'raftingtúra','bungee jumping')
booksToRead.splice(2,3,'Szerelem a kolera idején','Háború és béke')
sortingHat[0] +='Griffendél'
sortingHat[1] +='Griffendél'
sortingHat[2] +='Griffendél'
