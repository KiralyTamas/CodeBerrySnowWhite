var totalDwarf = 20;
var dwarfCounter = 1;
var workingDwarfs = 7;
function click() {
  for (dwarfCounter; dwarfCounter <= workingDwarfs; dwarfCounter++) {
    console.log(dwarfCounter + '. törpe a bányában van.');
  };
  for (dwarfCounter; dwarfCounter <= totalDwarf; dwarfCounter++) {
    console.log(dwarfCounter + '. törpe még az ágyában alszik.');
  };
};