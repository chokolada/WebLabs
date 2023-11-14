import Button from "../../common/Button"
import styles from "./CatalogItem.module.css"
import { BrowserRouter as Router, Link } from 'react-router-dom';


function Catalogitem(props) {
    return (
        <div id={props.id} className={props.className}>
            <header>{props.header}</header>
            <img src="https://styleware.com.au/wp-content/uploads/2023/08/styleware-nesting-bowl-biscotti-4-piece-960x960.jpg"
                width='200px'
                alt="" />
            <h3>{props.title}</h3>
            {props.text ? props.text :
                <section>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                    <p>when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <p>It has survived not only five centuries, but also the leap into electronic</p>
                </section>}
            <div className={styles.price}>
                Price: ${props.price}
            </div>
            <Link
                to={{
                    pathname: `/catalogItem/${props.id}`,
                }}
            >
                <Button className={styles.viewButton} text="View More" />
            </Link>
        </div>
    )
}

export default Catalogitem