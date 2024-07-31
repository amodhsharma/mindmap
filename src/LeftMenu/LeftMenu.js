import css from './leftmenu.module.css';
import Toolbar from './Toolbar';

function LeftMenu(props){
    /*function called left menu takes props as input   */
    return(<div className={css.container}>
        <Toolbar type="primary" />
        {/* will show the icons in  primary colors */}
    </div>);

}

export default LeftMenu;