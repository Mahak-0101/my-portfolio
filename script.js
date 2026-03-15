/* ============================= */
/* THREE JS 3D BACKGROUND */
/* ============================= */

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
60,
window.innerWidth / window.innerHeight,
0.1,
1000
);

const renderer = new THREE.WebGLRenderer({
alpha:true,
antialias:true
});

renderer.setSize(window.innerWidth, window.innerHeight);

document.getElementById("three-bg").appendChild(renderer.domElement);


/* 3D OBJECT */

const geometry = new THREE.IcosahedronGeometry(2.5,1);

const material = new THREE.MeshStandardMaterial({
color:0x00d0ff,
wireframe:true,
emissive:0x0044ff,
emissiveIntensity:0.6
});

const mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);


/* LIGHTS */

const light = new THREE.PointLight(0xffffff,1);
light.position.set(5,5,5);
scene.add(light);

const glowLight = new THREE.PointLight(0x7c4dff,2,20);
glowLight.position.set(-5,-5,5);
scene.add(glowLight);


/* CAMERA */

camera.position.z = 7;


/* ANIMATION */

function animate(){

requestAnimationFrame(animate);

mesh.rotation.x += 0.002;
mesh.rotation.y += 0.003;

renderer.render(scene, camera);

}

animate();


/* RESPONSIVE */

window.addEventListener("resize", () => {

camera.aspect = window.innerWidth / window.innerHeight;
camera.updateProjectionMatrix();

renderer.setSize(window.innerWidth, window.innerHeight);

});


/* ============================= */
/* MOUSE INTERACTION */
/* ============================= */

document.addEventListener("mousemove", (event) => {

const mouseX = (event.clientX / window.innerWidth) - 0.5;
const mouseY = (event.clientY / window.innerHeight) - 0.5;

mesh.rotation.x = mouseY * 1.5;
mesh.rotation.y = mouseX * 1.5;

});


/* ============================= */
/* PARTICLE STAR BACKGROUND */
/* ============================= */

const canvas = document.createElement("canvas");
document.body.appendChild(canvas);

canvas.style.position = "fixed";
canvas.style.top = "0";
canvas.style.left = "0";
canvas.style.zIndex = "-1";

const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


const particles = [];

for(let i = 0; i < 120; i++){

particles.push({

x: Math.random() * canvas.width,
y: Math.random() * canvas.height,
r: Math.random() * 2

});

}


function drawParticles(){

ctx.clearRect(0,0,canvas.width,canvas.height);

particles.forEach(p => {

ctx.beginPath();
ctx.arc(p.x,p.y,p.r,0,Math.PI*2);

ctx.fillStyle = "rgba(255,255,255,0.2)";

ctx.fill();

});

requestAnimationFrame(drawParticles);

}

drawParticles();


/* ============================= */
/* SMOOTH SCROLL */
/* ============================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener("click", function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior: "smooth"

});

});

});
