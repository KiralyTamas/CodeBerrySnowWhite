let myFilm = {
  'title': 'Avatar',
  'author': 'James Cameron',
  'genre': 'scifi',
  'has been see': true,
  'year of publication': 2008,
  'borrowed by': null,
  'main caracters': ['Netiri', 'Jack', 'Toruk Makto'],
  'quotes': {
    'Netiri': 'Látlak téged',
    'Jack': 'Egy vagyok közületek',
    'Toruk Makto': 'Repülj velem testvérem'
  }
}
let myFavourites = {
  'szín': 'Kék',
  'number': 18,
  'Foods': ['Rakott Krumpli', 'Pörkölt', 'Spagi']
}
var solarSystem = {
  'Mercury': 'bolygó',
  'Venus': 'bolygó',
  'Earth': 'bolygó',
  'Mars': 'bolygó',
  'Jupiter': 'bolygó',
  'Saturn': 'bolygó',
  'Uranus': 'bolygó',
  'Neptune': 'bolygó',
  'Pluto': 'bolygó',
  'Ceres': 'törpebolygó',
  'Makemake': 'törpebolygó',
  'Haumea': 'törpebolygó',
  'Eris': 'törpebolygó'
}
solarSystem.Pluto = 'törpebolygó';
myFilm.rating = 5;
let apartment = {
  'type of the building': 'tégla',
  'floor': '4. emelet',
  'number of rooms': '3 szoba',
  'size': '62 négyzetméter',
  'view': 'kert',
  'pets allowed': ['kutyák', 'macskák'],
  'shortest rental period': 'legalább egy év'
}
var leonardoDiCaprio = {
  'born': 1974,
  'birth name': 'Leonardo Wilhelm DiCaprio',
  'most popular movies': [
    'Titanic',
    'A tégla',
    'Viharsziget',
    'Eredet',
    'Django elszabadul'],
  'oscarFilm': null,
  'film': function () {
    leonardoDiCaprio.oscarFilm = prompt('Melyik Filmmel nyerte meg DiCaprio az Oscart?')
    alert('A ' + leonardoDiCaprio.oscarFilm + ' című filmmel nyerte meg az Oscart.')
  }
}
var odometer = {
  'initialValue': null,
  'finalValue': 250,
  'difference': function () {
    console.log('A különbség az ' + odometer.initialValue + ' és ' + odometer.finalValue + ' között ' + (odometer.finalValue - odometer.initialValue) + '.');
  }
}
let bookCatalog = {
  'page marker': function (book) {
    var previousPage = this[book].page;
    this[book].page = prompt('Melyik oldalon tartasz az alábbi könyvben:' + this[book].title + '?')
    if (typeof previousPage === 'undefined') {
      alert('Jelenleg az alábbi oldalon tartasz: ' + this[book].page + ' az alábbi könyvedben: ' + this[book].title + '.')
    } else if (previousPage > this[book].page) {
      alert('Legutóbb a ' + previousPage + '. oldalon hagytad abba az olvasást, most pedig a ' + this[book].page + ' oldalon tartasz? Valami itt nem kerek :)')
    } else {
      alert('Jelenleg az alábbi oldalon tartasz: ' + this[book].page + ' az alábbi könyvedben: ' + this[book].title + '. Legutóbb az alábbi oldalon tartottál: ' + previousPage + ', így ez alkalommal ' + (this[book].page - previousPage) + ' oldalt olvastál.')
    }
  },
  'myBook1': {
    'title': 'Ryan közlegény megmentése',
    'author': 'Harper Lee',
    'genre': 'coming-of-age story',
    'year of publication': 2015,
    'has been read': true,
    'main characters': ['Jean Louise Finch', 'Jeremy Finch', 'Atticus Finch'],
    'quotes': {
      'p116': '"Atticus, you must be wrong..." "How\'s that?" "Well, most folks seem to think they\'re right and you\'re wrong..." "They\'re certainly entitled to think that, and they\'re entitled to full respect for their opinions," said Atticus, "but before I can live with other folks I\'ve got to live with myself. The one thing that doesn\'t abide by majority rule is a person\'s conscience."',
      'p124': 'I wanted you to see something about her—I wanted you to see what real courage is, instead of getting the idea that courage is a man with a gun in his hand. It\'s when you know you\'re licked before you begin but you begin anyway and you see it through no matter what. You rarely win, but sometimes you do.',
      'p309': '"An\' they chased him \'n\' never could catch him \'cause they didn\'t know what he looked like, an\' Atticus, when they finally saw him, why he hadn\'t done any of those things... Atticus, he was real nice..." His hands were under my chin, pulling up the cover, tucking it around me. "Most people are, Scout, when you finally see them."'
    },
    'borrowed by': null,
    'rating': 5
  },
  'myBook2': {
    'title': 'Angyalok és Démonok',
    'author': 'Harper Lee',
    'genre': 'coming-of-age story',
    'year of publication': 2015,
    'has been read': true,
    'main characters': ['Jean Louise Finch', 'Jeremy Finch', 'Atticus Finch'],
    'quotes': {
      'p116': '"Atticus, you must be wrong..." "How\'s that?" "Well, most folks seem to think they\'re right and you\'re wrong..." "They\'re certainly entitled to think that, and they\'re entitled to full respect for their opinions," said Atticus, "but before I can live with other folks I\'ve got to live with myself. The one thing that doesn\'t abide by majority rule is a person\'s conscience."',
      'p124': 'I wanted you to see something about her—I wanted you to see what real courage is, instead of getting the idea that courage is a man with a gun in his hand. It\'s when you know you\'re licked before you begin but you begin anyway and you see it through no matter what. You rarely win, but sometimes you do.',
      'p309': '"An\' they chased him \'n\' never could catch him \'cause they didn\'t know what he looked like, an\' Atticus, when they finally saw him, why he hadn\'t done any of those things... Atticus, he was real nice..." His hands were under my chin, pulling up the cover, tucking it around me. "Most people are, Scout, when you finally see them."'
    },
    'borrowed by': null,
    'rating': 5
  },
  'myBook3': {
    'title': 'Ragyogás',
    'author': 'Harper Lee',
    'genre': 'coming-of-age story',
    'year of publication': 2015,
    'has been read': true,
    'main characters': ['Jean Louise Finch', 'Jeremy Finch', 'Atticus Finch'],
    'quotes': {
      'p116': '"Atticus, you must be wrong..." "How\'s that?" "Well, most folks seem to think they\'re right and you\'re wrong..." "They\'re certainly entitled to think that, and they\'re entitled to full respect for their opinions," said Atticus, "but before I can live with other folks I\'ve got to live with myself. The one thing that doesn\'t abide by majority rule is a person\'s conscience."',
      'p124': 'I wanted you to see something about her—I wanted you to see what real courage is, instead of getting the idea that courage is a man with a gun in his hand. It\'s when you know you\'re licked before you begin but you begin anyway and you see it through no matter what. You rarely win, but sometimes you do.',
      'p309': '"An\' they chased him \'n\' never could catch him \'cause they didn\'t know what he looked like, an\' Atticus, when they finally saw him, why he hadn\'t done any of those things... Atticus, he was real nice..." His hands were under my chin, pulling up the cover, tucking it around me. "Most people are, Scout, when you finally see them."'
    },
    'borrowed by': null,
    'rating': 5
  }
}
let characters = {
  'helloheroe':function (guy) {
alert('Hello ' +this[guy]['first name']+this[guy]['last name']+'!')
  },
  'character1': {
    'first name': 'James',
    'last name': 'Bond'
  },
  'character2': {
    'first name': 'Luke',
    'last name': 'Skywalker'
  },
  'character3': {
    'first name': 'Jason',
    'last name': 'Bourne'
  }
};