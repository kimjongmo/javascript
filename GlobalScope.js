//Global Scope

const satellite = 'The Moon'
     ,galaxy = 'The Milky Way';

let stars = 'North Star';

const myNightSky = function(){
  return 'Night Sky: '+satellite+','+stars+','+galaxy;
};

console.log(myNightSky());