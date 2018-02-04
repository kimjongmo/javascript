const satellite = 'The Moon'
     ,galaxy = 'The Milky Way';

let stars = 'North Star';

const myNightSky = function(){
  stars = 'Sirius';
  return 'Night Sky: '+satellite+','+stars+','+galaxy;
};

console.log(myNightSky());
console.log(stars);