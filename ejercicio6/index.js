let pedro = {
    nombre: "Pedro Perez",
    edad: 30,
    activo: true,
    hobbies: ["programar","squash","piano"]
};
pedro.estatura = 1.8;
delete pedro.activo

for (let key in pedro) {
    console.log(key,":", pedro[key]);
}