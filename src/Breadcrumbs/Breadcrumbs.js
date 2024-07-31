import css from './breadcrumbs.module.css';

function Breadcrumbs(){
    return(<div className={css.container}>
            <span className={css.item} >Breadcrumbs</span>
            {/*span is used to apply css styling to a small element without inducing structural meaning */}
        </div>);
}

export default Breadcrumbs;