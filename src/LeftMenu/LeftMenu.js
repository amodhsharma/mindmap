import css from './leftmenu.module.css';
import Toolbar from './Toolbar.js';

function LeftMenu(props){
    /*function called left menu takes props as input   */
    return(
    <div className={css.container}>
        <Toolbar />
        {/* will show toolbar with its porperties */}
    </div>
    );

}

export default LeftMenu;