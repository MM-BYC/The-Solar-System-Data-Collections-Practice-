/////////////////////////////
// The Solar System, Part 1 //
// Cohort: rtt-31       date submitted: 07/30/2024 
// Student: Michael Marquez
//////////////////////////////

const solarSystem = [
  { name: "Mercury", ringSystem: false, moons: [] },
  { name: "Venus", ringSystem: false, moons: [] },
  { name: "Earth", ringSystem: false, moons: ["The Moon"] },
  { name: "Mars", ringSystem: false, moons: ["Phobos", "Deimos"] },
  { name: "Jupiter", ringSystem: true,moons: ["Europa", "Ganymede", "Io", "Callisto"]},
  { name: "Saturn", ringSystem: true, moons: ["Titan", "Enceladus", "Rhea", "Mimas"]},
  { name: "Uranus", ringSystem: true, moons: ["Miranda", "Titania", "Ariel", "Umbriel"]},
  { name: "Neptune", ringSystem: true, moons: ["Triton", "Nereid"] },
];

// 1. Print the array of Jupiter's moons to the console (no for loop, just print the entire array).
//    Solution give away:
//             console.log(solarSystem[4].moons);
console.log("<=====>");
const jupiterMoons = solarSystem.find(planet => planet.name === "Jupiter").moons; // returns Jupiter's moons
console.log(jupiterMoons);
const moonsFormatted = jupiterMoons.map(moon => `"${moon}"`).join(", ");
console.log(`Formatted output: [${moonsFormatted}]`);


// 2. Print the name of Neptune's moon "Nereid" to the console.
console.log("<=====>");

const locateNereid = solarSystem.find(ourPlanet => ourPlanet.name === "Neptune").moons.indexOf("Nereid")
console.log(solarSystem[7].moons[locateNereid]);
    /* shorthand */
console.log(solarSystem[7].moons[1]);


// 3. Add a new moon called "Endor" to Venus' moons array.
console.log("<=====>");
const findVenus = solarSystem.find(thisPlanet => thisPlanet.name === "Venus") // locate venus & assign to findVenus
findVenus.moons.push("Endor"); // add "Endor" to venus's moon array
console.log(`Venus moon's array updated: ${JSON.stringify(solarSystem[1])}`)

// 4. Add a Pluto object to the solarSystem array using .push. The object should contain Pluto's name, ringSystem boolean, and moons array (which includes "Charon").
console.log("<=====>");
const plutoObject = { name: "Pluto", ringSystem: false, moons: ["Charon"] };    //setup the pluto object
solarSystem.push(plutoObject);                                                  // push to add pluto object
const indexOfPluto = solarSystem.indexOf(plutoObject);                          //find index of Pluto
console.log(console.log(`index PLUTO: ${indexOfPluto}`));
console.log(solarSystem[indexOfPluto].name === "Pluto"? console.log(`Pluto added: ${JSON.stringify(solarSystem[indexOfPluto])}`) : console.log('NoPluto'));                                                   //ternary flow 

// 5. Add a new key-value pair to the the Earth object: the key should be 'diameter', and the value should be Earth's diameter in miles represented as a string.
console.log("<=====>");
const diameterEarth = {diameter: 7917.50 }                                      // define key value pair to be added
const updatedSolarSystem = solarSystem.map(planet =>
    {if (planet.name === "Earth"){
        return { ...planet, diameter: diameterEarth.diameter};                  // use spread operator
    }
    return planet;
});
console.log(`Diameter Earth has been added: ${JSON.stringify(updatedSolarSystem[2])}`);   // convert object to string

// 6. Change Mercury's ringSystem boolean to true.
console.log("<=====>");
const mercuryRingSystem = true;                                                           // setup a boolean to be used 
solarSystem[0].ringSystem = mercuryRingSystem;                                            // change Mercury's ringSystem
console.log(`Mercury's ringSystem has been updated: ${JSON.stringify(solarSystem[0])}`);


// 7. Change Uranus' moon "Umbriel" to "Oberon"
console.log("<=====>");
const UranusMoonOberon = "Oberon"
solarSystem[6].moons[3] = UranusMoonOberon;
console.log("Uranus moon 'Umbriel' has been replaced: " + JSON.stringify(solarSystem[6]));


// 8. Iterate through the solarSystem array and print only the objects that have a ringSystem (where ringSystem: true), and ignore the others.
console.log("<=====>");
for (let planet in solarSystem) {
    if (solarSystem[planet].ringSystem ===true) {
        console.log(`Ring system is ${solarSystem[planet].ringSystem} see`, solarSystem[planet])
    }
}
//////////////////////////////
// The Solar System, Part 2 //
//////////////////////////////

const system = {
  mercury: {
    radiusp: "same",
    name: "Mercury",
    density: 5.43,
    tilt: 2,
    image: "textures/mercury.gif",
    rotationperiod: 1408,
    period: 0.24,
    radiuse: 2439,
    satellites: 0,
    au: 0.3871,
    eccentricity: 0.206,
    velocity: 47.89,
    mass: 0.06,
    inclination: 7,
  },
  venus: {
    radiusp: "same ",
    name: "Venus",
    density: 5.25,
    tilt: 177.3,
    image: "textures/venus.gif",
    rotationperiod: 5832,
    period: 0.62,
    radiuse: 6052,
    satellites: 0,
    au: 0.7233,
    eccentricity: 0.007,
    velocity: 35.04,
    mass: 0.82,
    inclination: 3.4,
  },
  earth: {
    radiusp: 6357,
    name: "Earth",
    density: 5.52,
    tilt: 23.45,
    image: "textures/earth.gif",
    rotationperiod: 23.93,
    period: 1,
    radiuse: 6378,
    satellites: 1,
    au: 1,
    eccentricity: 0.017,
    velocity: 29.79,
    mass: 1,
    inclination: 0,
  },
  mars: {
    radiusp: 3380,
    name: "Mars",
    density: 3.95,
    tilt: 25.19,
    image: "textures/mars.gif",
    rotationperiod: 24.62,
    period: 1.88,
    radiuse: 3397,
    satellites: 2,
    au: 1.524,
    eccentricity: 0.093,
    velocity: 24.14,
    mass: 0.11,
    inclination: 1.85,
  },
  jupiter: {
    radiusp: 66854,
    name: "Jupiter",
    density: 1.33,
    tilt: 3.12,
    image: "textures/jupiter.gif",
    rotationperiod: 9.92,
    period: 11.86,
    radiuse: 71490,
    satellites: "69",
    au: 5.203,
    eccentricity: 0.048,
    velocity: 13.06,
    mass: 317.89,
    inclination: 1.3,
  },
  saturn: {
    radiusp: 54360,
    name: "Saturn",
    density: 0.69,
    tilt: 26.73,
    image: "textures/saturn.gif",
    rotationperiod: 10.66,
    period: 29.46,
    radiuse: 60268,
    satellites: 30,
    au: 9.539,
    eccentricity: 0.056,
    velocity: 9.64,
    mass: 95.18,
    inclination: 2.49,
  },
  uranus: {
    radiusp: 24973,
    name: "Uranus",
    density: 1.29,
    tilt: 97.86,
    image: "textures/uranus.gif",
    rotationperiod: 17.24,
    period: 84.01,
    radiuse: 25559,
    satellites: 24,
    au: 19.19,
    eccentricity: 0.046,
    velocity: 6.81,
    mass: 14.53,
    inclination: 0.77,
  },
  neptune: {
    radiusp: 24340,
    name: "Neptune",
    density: 1.64,
    tilt: 29.6,
    image: "textures/neptune.gif",
    rotationperiod: 16.11,
    period: 164.79,
    radiuse: 25269,
    satellites: 8,
    au: 30.06,
    eccentricity: 0.01,
    velocity: 5.43,
    mass: 17.14,
    inclination: 1.77,
  },
  pluto: {
    radiusp: "same",
    name: "Pluto",
    density: 2.03,
    tilt: 122.46,
    image: "textures/pluto.gif",
    rotationperiod: 153.3,
    period: 248.54,
    radiuse: 1160,
    satellites: 1,
    au: 39.48,
    eccentricity: 0.248,
    velocity: 4.74,
    mass: 0.002,
    inclination: 17.15,
  },
};

// 1. Console.log the mass of Mercury
console.log("<=====>");
const mercuryMass = system.mercury.mass;
console.log(`Mercury's mass is: ${mercuryMass}`);
console.log("Access with bracket" + system['mercury']['mass'])

// 2. Console.log the eccentricity of Venus
console.log("<=====>");
const venusEccentricity = system.venus.eccentricity
console.log(`Venus's eccentricity is: ${venusEccentricity}`)
console.log(`Access with bracket  ${system['venus']['eccentricity']}`)

// 3. Console.log the sum of the number of satellites of Jupiter, Saturn, Uranus, and Neptune (131)
console.log("<=====>");
jupiterSatellites = stringToNumber(system['jupiter']['satellites'])     //convert numeric string to numeric.
/* need to employ a function to convert numeric string to numeric*/
saturnSatellites  = stringToNumber(system['saturn']['satellites']) 
uranusSatellites  = stringToNumber(system['uranus']['satellites'])
neptuneSatellites = stringToNumber(system['neptune']['satellites'])
let count = jupiterSatellites + saturnSatellites + uranusSatellites + neptuneSatellites
console.log('The sum of satellites of Jupiter, Saturn, Uranus, and Neptune is: ' + count)

function stringToNumber(parameter) {
    /* converts numerics string to number */
    switch (typeof(parameter)) {
        case 'number':
            return parameter                     
        case 'string':
            return Number(parameter)             
        case 'undefined':                       // case fall through  
        case 'boolean':                         // combines to  
        case 'function':                        // execute 
        case 'NaN':                             // same logic 
            return 0                            //if undefined, return 0
    }
}        


// 4. Write a conditional that checks if Mercury's radiusp is a string (remember the typeof command). If Mercury's radiusp is a string, change the value to be the same as its radiuse value. (radiusp is radius at the poles, radiuse is radius at the equator).
console.log("<=====>");
const mercuryRadiusE = system.mercury.radiuse;   //source object variable
const mercuryRadiusP = system.mercury.radiusp;
if (typeof(mercuryRadiusP === 'string')) {
    console.log(`Before replacing mercury's radiusp: ${system.mercury.radiusp}`)
    system.mercury.radiusp = mercuryRadiusE;     // update the object directly.
}

// 5. Console.log Mercury's radiusp (should be 2439, not 'same').
console.log("<=====>");
console.log(`After replacing Mercury's radiusp: ${system.mercury.radiusp}`)

// 6. Find the difference between Jupiter's momentum and Pluto's momentum. (To get momentum, you'll want the product of velocity and mass).
console.log("<=====>");
const jupiterMomentum = planetMomentum('jupiter');
const plutoMomentum = planetMomentum('pluto');
let difference = 0

switch (jupiterMomentum > plutoMomentum) {
    case true:
        difference = jupiterMomentum - plutoMomentum;
        console.log(`Jupiter\'s momentum - Pluto\'s momentum is ${difference}`);
        break;
    case false:
        difference = plutoMomentum - jupiterMomentum;
        console.log(`Pluto\'s momentum - Jupiter\'s momentum is ${difference}`);
        break;
    default:
        difference = 0
}

function planetMomentum(planet) {           
    //Use [bracket] notation to dynamically access object properties 
    const planetV = system[planet].velocity 
    const planetM = system[planet].mass
    console.log(`${planet}\'s velocity: ${planetV}`)
    console.log(`${planet}\'s mass: ${planetM}`)
    console.log(`${planet}\'s momentum: Velocity * Mass is ${planetV * planetM}`)
    return planetV * planetM 
}