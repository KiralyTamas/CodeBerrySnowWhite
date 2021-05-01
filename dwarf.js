var totalDwarf = 10;
var dwarfCounter = 1;
var workingDwarfs = 7;
function torpe() {
  for (dwarfCounter; dwarfCounter <= workingDwarfs; dwarfCounter++) {
    prompt(dwarfCounter + '. törpe a bányában van.')
  }
  for (dwarfCounter; dwarfCounter <= totalDwarf; dwarfCounter++) {
    console.log(dwarfCounter + '. törpe még az ágyában alszik.')
  }
}
