import Icon from "./Icon";
import css from './IconButton.module.css';

function IconButton(props){

    return(
        <div className={css.container} onClick={props.onClick}> 
        {/* syntax of dynamically assigning a CSS class to a React element. */}
        <Icon type={props.type} name={props.name} className={props.className}/>
        {/* we are going to call the icon y props.name */}
        </div>
        );
}

export default IconButton;