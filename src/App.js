import React,{Component} from 'react'
import Nav from './Nav'
import Grid from './Grid'

class App extends Component{
    arr = [{ color: 'red', id: 1,ability:'hidden'},
          { color: 'red', id: 2, ability: 'hidden' },
          { color: 'brown', id: 3 ,ability: 'hidden' },
          { color: 'brown', id: 4 ,ability: 'hidden' },
          { color: 'blue', id: 5, ability: 'hidden' },
          { color: 'blue',  id: 6,ability: 'hidden' },
          { color: 'orange', id: 7, ability: 'hidden' },
          { color: 'orange', id: 8, ability: 'hidden' },
          { color: 'green', id: 9,ability: 'hidden' },
          { color: 'green', id: 10,ability: 'hidden' },
          { color: 'purple', id: 11, ability: 'hidden' },
          { color: 'purple', id: 12, ability: 'hidden'},
          { color: 'yellow', id: 13, ability: 'hidden' },
          { color: 'yellow', id: 14, ability: 'hidden' },
          { color: 'black', id: 15,ability: 'hidden'},
          { color: 'black', id: 16,  ability: 'hidden'},
        

      ]


    shuffle = (brr) => {
       this.arr.map((m, key) => {
         var  v = Math.floor(Math.random() * 8)
           var temp = brr[key]
            brr[key] = brr[v]
            brr[v] = temp
        }

        )
        return brr;
    }
    constructor(props) {
        super(props)
    
        this.state = {
            box: this.shuffle(this.arr),
            show: 0,
            hidden: 1,
            matching: 2,
           noClick:false
        }
    }
setcolor=(id)=>{
const mapCardState=(box,idstochange,newboxstate)=>{
    return box.map(c=>{
        if(idstochange.includes(c.id)){
            return{
                ...c,
                ability:newboxstate
            }
        }
        return c
    })
}

const foundcard = this.state.box.find(c=>c.id==id)

if(this.state.noClick||foundcard.ability!='hidden'){
    console.log(this.state.noClick)
   
return;
}
let noClick=false;

let box = mapCardState(this.state.box,[id],'showing')

const showingcards = box.filter((c)=>c.ability=='showing')

const ids = showingcards.map(c=>c.id);

if(showingcards.length==2&&showingcards[0].color== showingcards[1].color)
{
    box=mapCardState(box,ids,'matching')
}
else if(showingcards.length==2){
    let hidingcard = mapCardState(box,[id],'hidden');
    noClick=true;
    this.setState({box,noClick},()=>{
        setTimeout(() => {
            this.setState({ box:hidingcard, noClick:false } )
        }, 700);
    });
    return;
}
this.setState({box,noClick})


}

newsetup=()=>{
    this.setState(prevState=>{
        let box = prevState.box.map((m)=>(
            {...m,ability:'hidden'}
        ))
        return {box}
    })
}
    
    
    render(){
       
        return(
            <div>
                <Nav restart={()=>this.newsetup()}/>
                <div class='container'>
                    <div class='row mt-5'>
             {  this.state.box.map(m=>
                (
                    <Grid a={m} onClick={()=>this.setcolor(m.id)} />
                
                )
                   
                )
                
    }
                    </div>
    </div>
            
            </div>
        )
    }
}

export default App;