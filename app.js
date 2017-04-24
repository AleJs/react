

// const el= document.createElement('h1');
// const child = document.createElement('span');

// el.setAttribute('id', 'title');
// el.textContent = 'hola';
//child.textContent = 'mundo';
//el.appendChild(child);
// document.getElementById('app').appendChild(el);



/*
* con react
**/ 
//const el2 =  React.createElement('H3', {id:'hola'}, 'Hola ',
//React.createElement('span', 'null', 'Mundo'));
//ReactDOM.render (el,document.getElementById('app'));

/*
* con react y jsx
**/
/*
* const ell = <h1 id= "title"> Hola <span>mundo </span></h1>;   
* ReactDOM.render (ell,document.getElementById('app'));
**/
/*







* ejercicio relog java script puro

const app = document.getElementById('app');
function reloj() {
    app.textContent  = new Date().toLocaleTimeString();

   
}

setInterval(reloj,1000);
**/
/*
* ejercicio relog java script  react jsx
**/

const app = document.getElementById('app');
function reloj() {
    let now = new Date().toLocaleTimeString();
        const el = <span>{now} </span>;
        ReactDOM.render(el,app)
   
}

setInterval(reloj,1000);
