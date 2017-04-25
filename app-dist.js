'use strict';

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


const app = document.getElementById('app');
function reloj() {
    let now = new Date().toLocaleTimeString();
        const el = <span>{now} </span>;
        ReactDOM.render(el,app)
   
}

setInterval(reloj,1000);


**/
//componentes
/*
function Saludar  (props){

    return <h1>hola {props.name}</h1>

}
function Saludar2  (props){

    return 


}
**/
// esto es una funcion en em6 
/*
const Paramore = props => {
        return(
            <div>
               <img src={props.img} alt={props.name} /> 
                <p> {props.name}</p>
                </div>
        )

};
ReactDOM.render(<div><Paramore img="https://ichef.bbci.co.uk/images/ic/256x256/p050jrsf.jpg" name="hard times 2017" /></div>, document.getElementById('app')) **/
//esto es una funcion mas simple, no se necesitan las llaves como en la funcion pasada si vamos a retornar un valor sin alguna expresion antes, tambien q es em6 no necesita llave actualizate rackaracka

var Avatar = function Avatar(props) {
    return React.createElement('img', { src: props.user.img, alt: props.user.name });
};
var Name = function Name(props) {
    return React.createElement(
        'p',
        null,
        ' ',
        props.user.name
    );
};

var Paramore = function Paramore(props) {
    return React.createElement(
        'div',
        { className: 'sdsd' },
        React.createElement(Avatar, { user: props.user }),
        React.createElement(Name, { user: props.user })
    );
};
//esto se puede decir que es un array de objeto 
var miembros = [{

    name: 'Hayley',
    img: 'https://s.yimg.com/wv/images/92ac33bcbf47faa5ec74a2fe18cb0f91_96.jpeg'
}, {
    name: 'Taylor',
    img: 'https://pbs.twimg.com/profile_images/1500687149/taylor_sheckler_reasonably_small.jpg'
}];
//y con esto se lo recorres
/*
const UserList =   props => {
        const userList =  props.list.map((user,i) => <Paramore user={list} key = {i}/>);
            return(
                <div className= "dsds">

                    {userlist}

                    </div>
            )
};**/
ReactDOM.render(React.createElement(
    'div',
    null,
    React.createElement(Paramore, { user: miembros[1] }),
    React.createElement(Paramore, { user: miembros[0] })
), document.getElementById('app'));