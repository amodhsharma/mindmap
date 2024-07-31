import IconButton from "../Icons/IconButton";
import Icons from "../Icons/Icons";
import css from "../Icons/Icon.module.css";

function Toolbar(props){
/* toolbar takes an arguement called props 
a component with a list of icon buttons*/

    const list = [ 
        {name : 'home', onClick: () => alert('Home') },
        {name : 'help', onClick: () => alert('Help') }
    ];
    /* defining the inputs that we want to be displayed as buttons 
    ie we are only going to show 2 buttons home and help 
    the unique identifier is 'name', so when we have to call it, we will call it by 'name'*/
    /* to rendeer the list of icon buttons, we need a map method and an arrow funciton */
    
    return(
        <div>
        {list.map(item=>(
            <div key={item.name}>
            <IconButton name = {item.name} onClick={item.onClick} type= {props.type} className={css.primary}/>
            </div>
        ))}
        </div>
    );

}

export default Toolbar;