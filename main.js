import * as THREE from 'three';

function degrees_to_radians(degrees)
{
    var pi = Math.PI;
    return (degrees * pi) / 180;
}

const scene = new THREE.Scene();
scene.background = new THREE.Color( 0x0d1833 );
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 6000 );

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );
camera.position.setZ(200);
camera.position.setY(-600);
camera.rotateX(20);

renderer.render( scene, camera );

// Sun
const sunGeometry = new THREE.SphereGeometry(109, 125, 125);
const sunMaterial = new THREE.MeshBasicMaterial( { color: 0xF5DA42 } );
const sun = new THREE.Mesh( sunGeometry, sunMaterial );
sun.position.set(0, 0, 0);

// Mercury
const mercuryGeometry = new THREE.SphereGeometry(5, 25, 25);
const mercuryMaterial = new THREE.MeshBasicMaterial( { color: 0xE5E5E5 } );
const mercury = new THREE.Mesh( mercuryGeometry, mercuryMaterial );
let mercuryAngle = 90;
let mercuryRayon = 200;
mercury.position.set(0, mercuryRayon, 0);

    // Trajectory
    const mercuryTrajectoryGeometry = new THREE.RingGeometry(199.2, 200.8, 200); 
    const mercuryTrajectoryMaterial = new THREE.MeshBasicMaterial( { color: 0xE5E5E5, side: THREE.DoubleSide } );
    const mercuryTrajectory = new THREE.Mesh( mercuryTrajectoryGeometry, mercuryTrajectoryMaterial );

// Venus
const venusGeometry = new THREE.SphereGeometry(15.21, 15.21, 15.21);
const venusMaterial = new THREE.MeshBasicMaterial( { color: 0x8B7D82 } );
const venus = new THREE.Mesh( venusGeometry, venusMaterial );
let venusAngle = 200;
let venusRayon = 350;
venus.position.set(0, venusRayon, 0);

    // Trajectory
    const venusTrajectoryGeometry = new THREE.RingGeometry(349.2, 350.8, 350); 
    const venusTrajectoryMaterial = new THREE.MeshBasicMaterial( { color: 0x8B7D82, side: THREE.DoubleSide } );
    const venusTrajectory = new THREE.Mesh( venusTrajectoryGeometry, venusTrajectoryMaterial );

// Earth
const earthGeometry = new THREE.SphereGeometry(16.38, 16.38, 16.38);
const earthMaterial = new THREE.MeshBasicMaterial( { color: 0x6b93d6 } );
const earth = new THREE.Mesh( earthGeometry, earthMaterial );
let earthAngle = 150;
let earthRayon = 500;
earth.position.set(0, earthRayon, 0);

    // Trajectory
    const earthTrajectoryGeometry = new THREE.RingGeometry(499.2, 500.8, 500); 
    const earthTrajectoryMaterial = new THREE.MeshBasicMaterial( { color: 0x6b93d6, side: THREE.DoubleSide } );
    const earthTrajectory = new THREE.Mesh( earthTrajectoryGeometry, earthTrajectoryMaterial );

// Mars
const marsGeometry = new THREE.SphereGeometry(6.90, 6.90, 6.90);
const marsMaterial = new THREE.MeshBasicMaterial( { color: 0xAC7D6F } );
const mars = new THREE.Mesh( marsGeometry, marsMaterial );
let marsAngle = 150;
let marsRayon = 750;
mars.position.set(0, marsRayon, 0);

    // Trajectory
    const marsTrajectoryGeometry = new THREE.RingGeometry(749.2, 750.8, 750); 
    const marsTrajectoryMaterial = new THREE.MeshBasicMaterial( { color: 0xAC7D6F, side: THREE.DoubleSide } );
    const marsTrajectory = new THREE.Mesh( marsTrajectoryGeometry, marsTrajectoryMaterial );

// Jupiter
const jupiterGeometry = new THREE.SphereGeometry(50, 50, 50);
const jupiterMaterial = new THREE.MeshBasicMaterial( { color: 0xbcafb2 } );
const jupiter = new THREE.Mesh( jupiterGeometry, jupiterMaterial );
let jupiterAngle = 180;
let jupiterRayon = 1200;
jupiter.position.set(0, jupiterRayon, 0);

    // Trajectory
    const jupiterTrajectoryGeometry = new THREE.RingGeometry(1199.2, 1200.8, 1200); 
    const jupiterTrajectoryMaterial = new THREE.MeshBasicMaterial( { color: 0xbcafb2, side: THREE.DoubleSide } );
    const jupiterTrajectory = new THREE.Mesh( jupiterTrajectoryGeometry, jupiterTrajectoryMaterial );

// Saturn

// Uranus

// Neptune

scene.add(sun);
scene.add(mercury);
scene.add(mercuryTrajectory);
scene.add(venus);
scene.add(venusTrajectory);
scene.add(earth);
scene.add(earthTrajectory);
scene.add(mars);
scene.add(marsTrajectory);
scene.add(jupiter);
scene.add(jupiterTrajectory);

function animate() {
    requestAnimationFrame( animate );

    // Mercury
    mercuryAngle -= 0.5;

    if (mercuryAngle == -1) {
        mercuryAngle = 359;
    }

    let yPos = mercuryRayon * Math.sin(degrees_to_radians(mercuryAngle));
    let xPos = mercuryRayon * Math.cos(degrees_to_radians(mercuryAngle));
    mercury.position.set(xPos, yPos, 0);

    // Venus
    venusAngle -= 0.4;

    if (venusAngle == -1) {
        venusAngle = 359;
    }

    yPos = venusRayon * Math.sin(degrees_to_radians(venusAngle));
    xPos = venusRayon * Math.cos(degrees_to_radians(venusAngle));
    venus.position.set(xPos, yPos, 0);

    // Earth
    earthAngle -= 0.3;

    if (earthAngle == -1) {
        earthAngle = 359;
    }

    yPos = earthRayon * Math.sin(degrees_to_radians(earthAngle));
    xPos = earthRayon * Math.cos(degrees_to_radians(earthAngle));
    earth.position.set(xPos, yPos, 0);

    // Mars
    marsAngle -= 0.3;

    if (marsAngle == -1) {
        marsAngle = 359;
    }

    yPos = marsRayon * Math.sin(degrees_to_radians(marsAngle));
    xPos = marsRayon * Math.cos(degrees_to_radians(marsAngle));
    mars.position.set(xPos, yPos, 0);

    // Jupiter
    jupiterAngle -= 0.3;

    if (jupiterAngle == -1) {
        jupiterAngle = 359;
    }

    yPos = jupiterRayon * Math.sin(degrees_to_radians(jupiterAngle));
    xPos = jupiterRayon * Math.cos(degrees_to_radians(jupiterAngle));
    jupiter.position.set(xPos, yPos, 0);

    renderer.render( scene, camera );
}

animate()

function printMousePos(event) {
    console.log("clientX: " + event.clientX + " - clientY: " + event.clientY);

}
  
document.addEventListener("click", printMousePos);