let myPlaces =['홍대','건대','노원'];

let friendPlaces =['혜화','건대','강남'];

for(let myPlacesIndex=0;myPlacesIndex<myPlaces.length;myPlacesIndex++){
  for(let friendPlacesIndex=0;friendPlacesIndex<friendPlaces.length;friendPlacesIndex++){
  if(myPlaces[myPlacesIndex]===friendPlaces[friendPlacesIndex]){
    console.log(myPlaces[myPlacesIndex]);
  }
}
}