import Lmiconbutton from "./Lmiconbutton.js";
import css from "./toolbar.module.css";

function Toolbar(props){
/* toolbar takes an arguement called props 
a component with a list of icon buttons*/

    const list = [ 
        {name : 'home', onClick: () => alert('Home') },
        {name : 'help', onClick: () => alert('Help') }
    ];
    /* to refer to each element of the list, we have to use the item keyword, imagine it as index i in java */

    /* defining the inputs that we want to be displayed as buttons 
    ie we are only going to show 2 buttons home and help 
    the unique identifier is 'name', so when we have to call it, we will call it by 'name'*/
    /* to rendeer the list of icon buttons, we need a map method and an arrow funciton */
    
    return(
        <div className={css.container}>
            {list.map(item=>(
                /* to refer to each element of the list, we have to use the item keyword, imagine it as index i in java */
            <Lmiconbutton 
            key={item.name} 
            name = {item.name} 
            onClick={item.onClick}
            className={css.button}/>
            
            ))}
        </div>
       
    );

}

export default Toolbar;