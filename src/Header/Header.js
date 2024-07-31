import css from './header.module.css';
import IconButton from '../Icons/IconButton';

function Header(){
    return(<div className={css.container}>
        <IconButton name="menu" onClick={()=>alert('click!')}/>
                {/* the biggest parent class becomes the container class */}
        <div className={css.title} >Header</div>
    </div>);
}

export default Header;