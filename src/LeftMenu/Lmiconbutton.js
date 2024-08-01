import Lmicon from "./Lm.icon.js";
import './Lmiconbutton.css';

function Lmiconbutton(props){

    return(
        <div className={props.className} onClick={props.onClick}> 
        {/* syntax of dynamically assigning a CSS class to a React element. */}
        <Lmicon name={props.name}/>
        {/* we are going to call the icon y props.name */}
        </div>
        );
}

export default Lmiconbutton;