import './Lm.icon.css';
//no need to write import css full thing 
import Lmicons from './Lm.icons';

function Lmicon(props){
    return(
            <svg xmlns="http://www.w3.org/2000/svg" 
            /*comment*/
                height="30px" 
                viewBox="0 -960 960 960" 
                width="30px"
                /* classname is used for css styling*/
                className="primary">
                    {/* imports orimary directly from Lm.icons.css}
                    {/*to dynamically combine multiple CSS class names into a single string that can be applied to a React component. 
                    This is particularly useful when you want to apply multiple classes conditionally or when you need to combine static and dynamic class names.*/}
                    
                    {/* this above line is what turns the icons green in the toolbar*/}
                    <path d={Lmicons[props.name]}></path>
                {/* the d format of the icon holds the vector code || the icon name is the key and rhe vector name is the property*/}
                </svg>
        );
}

export default Lmicon;