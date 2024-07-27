import css from './header.module.css';

function Header(){
    return(<div className={css.container}>
        {/* the biggest parent class becomes the container class */}
        <div className={css.title} >Header</div>
    </div>);
}

export default Header;