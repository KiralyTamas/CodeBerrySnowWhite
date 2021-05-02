let currentYear = 2021;
let adult = 18;
function adultAge() {
  let age = prompt('Szia, melyik évben születtél?');
  if (adult < currentYear - age) {
    alert('Köszönjük! Elolvashatja ezt a cikket');
  }else if(adult==currentYear-age){
  alert('Pont 18? Gratulálunk, üdv a felnőttek között! Jó szórakozást a cikkhez!')
  } 
  else {
    alert('Sajnáljuk, de ez a cikk csak ' + adult + ' éven felüliek számára érjető el.')
  }
}