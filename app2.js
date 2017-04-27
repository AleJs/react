// const Hello = props =>{
//     return (

//         <h1>{props.funcion}</h1>
//     )
// };

// ReactDOM.render(<Hello funcion="holaaaaa"/>, document.getElementById('app'));

//estados y eventos
// class  Hello extends React.Component{

//         constructor(props){
//             super(props);
//             this.state = {
//                 name: 'hola'
//         }

//     }
//         chao = ()=>{
//             this.setState({name : 'chao'
        
//     }  )
//     };  
//     render(){
//         return (
//             <h1 onClick={this.chao}>ay ya yai{this.state.name}</h1>
//         )
//     }
// }
// ReactDOM.render(<Hello />, document.getElementById('app'));


class Counter extends React.Component{
        
        constructor(props){
            super(props);

            this.state = {
                    count: 0
            }

        }
            up = (e) =>{
                e.preventDefault();
                this.setState(function(prevState){
                    return {
                        count : prevState.count + 1 
                    }
                });
            }
            
            down = (e) =>{
                e.preventDefault();
                     this.setState(function(prevState){
                         if (prevState.count >= 1){
                             
                    return {
                        count : prevState.count - 1} 
                    }
                });
            }
            
            reset = (e) =>{
                e.preventDefault();
                this.setState({count:0});
            }
        render(){
            return (
                <div className= "hola">

                       <div className= "hey"> {this.state.count}</div> 
                         <div className= "hola">
                             <a href="#" onClick={this.up}>Up</a>
                             <a href="#" onClick={this.down}>down</a>
                            <a href="#" onClick={this.reset}>reset</a>
                                </div>
                </div>
            )
        }
    
}
ReactDOM.render(<Counter/>, document.getElementById('app'));