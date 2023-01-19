alert('hey');

const url ='https://platzi-avo.vercel.app/api/avo'
//conectamos al server:
window.fetch(url)
//procesar respuesta y convertirla en json
.then((respuesta) =>JSON())
.then(data=>{
    console.log(data);
})