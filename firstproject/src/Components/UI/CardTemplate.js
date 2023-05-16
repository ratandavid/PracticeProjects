import './Card.css';

const CardTemplate = (props) => {
    let classes= `card ${props.className}`;
    return (<div className={classes}>{props.children}</div>);
}

export default CardTemplate;