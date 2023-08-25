import * as THREE from 'three';

var pi = Math.PI;

function degrees_to_radians(degrees) {
    return (degrees * pi) / 180;
}

const scene = new THREE.Scene();
scene.background = new THREE.Color( 0x000 );
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 6000 );

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),
});

const loader = new THREE.TextureLoader();

renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );
camera.position.setZ(400);
camera.position.setY(-1100);
camera.rotateX(20);

renderer.render( scene, camera );

// Planets
var planetLists = [];

// Sun
const sunGeometry = new THREE.SphereGeometry(109, 125, 125);
const sunMaterial = new THREE.MeshBasicMaterial( { color: 0xF5DA42 } );
const textureSun = loader.load('/textures/sun.jpg');
sunMaterial.map = textureSun;
const sun = new THREE.Mesh( sunGeometry, sunMaterial );
sun.rotation.x = Math.PI / 2;
sun.position.set(0, 0, 0);

// Mercury
const mercuryGeometry = new THREE.SphereGeometry(5, 25, 25);
const mercuryMaterial = new THREE.MeshBasicMaterial();
const textureMercury = loader.load('/textures/mercury.jpg');
mercuryMaterial.map = textureMercury;
const mercury = new THREE.Mesh( mercuryGeometry, mercuryMaterial );
let mercuryAngle = 90;
let mercuryRayon = 150;
mercury.rotation.x = Math.PI / 2;
mercury.position.set(0, mercuryRayon, 0);

    // Trajectory
    const mercuryTrajectoryGeometry = new THREE.RingGeometry(149.2, 150.8, 150); 
    const mercuryTrajectoryMaterial = new THREE.MeshBasicMaterial( { color: 0xE5E5E5, side: THREE.DoubleSide } );
    const mercuryTrajectory = new THREE.Mesh( mercuryTrajectoryGeometry, mercuryTrajectoryMaterial );

var mercuryArray = [mercury, mercuryAngle, mercuryRayon, mercuryTrajectory, 1];
planetLists.push(mercuryArray);

// Venus
const venusGeometry = new THREE.SphereGeometry(15.21, 15.21, 15.21);
const venusMaterial = new THREE.MeshBasicMaterial( { color: 0x8B7D82 } );
const textureVenus = loader.load('/textures/venus.jpg');
venusMaterial.map = textureVenus;
const venus = new THREE.Mesh( venusGeometry, venusMaterial );
let venusAngle = 200;
let venusRayon = 200;
venus.rotation.x = Math.PI / 2;
venus.position.set(0, venusRayon, 0);

    // Trajectory
    const venusTrajectoryGeometry = new THREE.RingGeometry(199.2, 200.8, 200); 
    const venusTrajectoryMaterial = new THREE.MeshBasicMaterial( { color: 0x8B7D82, side: THREE.DoubleSide } );
    const venusTrajectory = new THREE.Mesh( venusTrajectoryGeometry, venusTrajectoryMaterial );

var venusArray = [venus, venusAngle, venusRayon, venusTrajectory, 0.9];
planetLists.push(venusArray);

// Earth
const earthGeometry = new THREE.SphereGeometry(16.38, 16.38, 16.38);
const earthMaterial = new THREE.MeshBasicMaterial( { color: 0x6b93d6 } );
const textureEarth = loader.load('/textures/earth.jpg');
earthMaterial.map = textureEarth;
const earth = new THREE.Mesh( earthGeometry, earthMaterial );
let earthAngle = 150;
let earthRayon = 300;
earth.rotation.x = Math.PI / 2;
earth.position.set(0, earthRayon, 0);

    // Trajectory
    const earthTrajectoryGeometry = new THREE.RingGeometry(299.2, 300.8, 300); 
    const earthTrajectoryMaterial = new THREE.MeshBasicMaterial( { color: 0x6b93d6, side: THREE.DoubleSide } );
    const earthTrajectory = new THREE.Mesh( earthTrajectoryGeometry, earthTrajectoryMaterial );

var earthArray = [earth, earthAngle, earthRayon, earthTrajectory, 0.8];
planetLists.push(earthArray);

// Mars
const marsGeometry = new THREE.SphereGeometry(6.90, 6.90, 6.90);
const marsMaterial = new THREE.MeshBasicMaterial( { color: 0xAC7D6F } );
const textureMars = loader.load('/textures/mars.jpg');
marsMaterial.map = textureMars;
const mars = new THREE.Mesh( marsGeometry, marsMaterial );
let marsAngle = 150;
let marsRayon = 400;
mars.rotation.x = Math.PI / 2;
mars.position.set(0, marsRayon, 0);

    // Trajectory
    const marsTrajectoryGeometry = new THREE.RingGeometry(399.2, 400.8, 400); 
    const marsTrajectoryMaterial = new THREE.MeshBasicMaterial( { color: 0xAC7D6F, side: THREE.DoubleSide } );
    const marsTrajectory = new THREE.Mesh( marsTrajectoryGeometry, marsTrajectoryMaterial );

var marsArray = [mars, marsAngle, marsRayon, marsTrajectory, 0.7];
planetLists.push(marsArray);

// Jupiter
const jupiterGeometry = new THREE.SphereGeometry(50, 50, 50);
const jupiterMaterial = new THREE.MeshBasicMaterial( { color: 0xbcafb2 } );
const textureJupiter = loader.load('/textures/jupiter.jpg');
jupiterMaterial.map = textureJupiter;
const jupiter = new THREE.Mesh( jupiterGeometry, jupiterMaterial );
let jupiterAngle = 180;
let jupiterRayon = 500;
jupiter.rotation.x = Math.PI / 2;
jupiter.position.set(0, jupiterRayon, 0);

    // Trajectory
    const jupiterTrajectoryGeometry = new THREE.RingGeometry(499.2, 500.8, 500); 
    const jupiterTrajectoryMaterial = new THREE.MeshBasicMaterial( { color: 0xbcafb2, side: THREE.DoubleSide } );
    const jupiterTrajectory = new THREE.Mesh( jupiterTrajectoryGeometry, jupiterTrajectoryMaterial );

var jupiterArray = [jupiter, jupiterAngle, jupiterRayon, jupiterTrajectory, 0.6];
planetLists.push(jupiterArray);

// Saturn
const saturnGeometry = new THREE.SphereGeometry(50, 50, 50);
const saturnMaterial = new THREE.MeshBasicMaterial( { color: 0xfae5bf } );
const textureSaturn = loader.load('/textures/saturn.jpg');
saturnMaterial.map = textureSaturn;
const saturn = new THREE.Mesh( saturnGeometry, saturnMaterial );
let saturnAngle = 20;
let saturnRayon = 600;
saturn.rotation.x = Math.PI / 2;
saturn.position.set(0, saturnRayon, 0);

    // Trajectory
    const saturnTrajectoryGeometry = new THREE.RingGeometry(599.2, 600.8, 600); 
    const saturnTrajectoryMaterial = new THREE.MeshBasicMaterial( { color: 0xfae5bf, side: THREE.DoubleSide } );
    const saturnTrajectory = new THREE.Mesh( saturnTrajectoryGeometry, saturnTrajectoryMaterial );

var saturnArray = [saturn, saturnAngle, saturnRayon, saturnTrajectory, 0.5];
planetLists.push(saturnArray);

// Uranus
const uranusGeometry = new THREE.SphereGeometry(50, 50, 50);
const uranusMaterial = new THREE.MeshBasicMaterial( { color: 0xace5ee } );
const textureUranus = loader.load('/textures/uranus.jpg');
uranusMaterial.map = textureUranus;
const uranus = new THREE.Mesh( uranusGeometry, uranusMaterial );
let uranusAngle = 245;
let uranusRayon = 700;
uranus.rotation.x = Math.PI / 2;
uranus.position.set(0, uranusRayon, 0);

    // Trajectory
    const uranusTrajectoryGeometry = new THREE.RingGeometry(699.2, 700.8, 700); 
    const uranusTrajectoryMaterial = new THREE.MeshBasicMaterial( { color: 0xace5ee, side: THREE.DoubleSide } );
    const uranusTrajectory = new THREE.Mesh( uranusTrajectoryGeometry, uranusTrajectoryMaterial );

var uranusArray = [uranus, uranusAngle, uranusRayon, uranusTrajectory, 0.4];
planetLists.push(uranusArray);

// Neptune
const neptuneGeometry = new THREE.SphereGeometry(50, 50, 50);
const neptuneMaterial = new THREE.MeshBasicMaterial( { color: 0xace5ee } );
const textureNeptune = loader.load('/textures/neptune.jpg');
neptuneMaterial.map = textureNeptune;
const neptune = new THREE.Mesh( neptuneGeometry, neptuneMaterial );
let neptuneAngle = 245;
let neptuneRayon = 800;
neptune.rotation.x = Math.PI / 2;
neptune.position.set(0, neptuneRayon, 0);

    // Trajectory
    const neptuneTrajectoryGeometry = new THREE.RingGeometry(799.2, 800.8, 800); 
    const neptuneTrajectoryMaterial = new THREE.MeshBasicMaterial( { color: 0xace5ee, side: THREE.DoubleSide } );
    const neptuneTrajectory = new THREE.Mesh( neptuneTrajectoryGeometry, neptuneTrajectoryMaterial );

var neptuneArray = [neptune, neptuneAngle, neptuneRayon, neptuneTrajectory, 0.3];
planetLists.push(neptuneArray);

scene.add(sun);
planetLists.forEach((planet) => {
    scene.add(planet[0]);
    scene.add(planet[3]);
});

// Variables
var moving = false

function animate() {
    requestAnimationFrame( animate );

    if (moving == false) {
        sun.rotation.y += 0.05;

        planetLists.forEach((planet) => {
            planet[1] -= planet[4];
    
            if (planet[1] == -1) {
                planet[1] >= 359;
            }
        
            let yPos = planet[2] * Math.sin(degrees_to_radians(planet[1]));
            let xPos = planet[2] * Math.cos(degrees_to_radians(planet[1]));
            planet[0].position.set(xPos, yPos, 0);
    
            planet[0].rotation.y += 0.05;
        });
    }

    renderer.render( scene, camera );
}

animate()

function printMousePos(event) {
    console.log("clientX: " + event.clientX + " - clientY: " + event.clientY);
    moving = !moving;
}
  
document.addEventListener("click", printMousePos);