import { Link } from "react-router-dom"
import Button from "./Button"

function Header(props) {
    return (
        <>
            <div className={props.className}>
                <img src="https://static.vecteezy.com/system/resources/previews/004/803/647/original/illustration-graphic-of-food-plate-logo-perfect-to-use-for-food-company-free-vector.jpg" alt="noPhoto"
                    width={"100px"}
                    height={"100px"}
                />
                <Link className={props.link} to="/"><Button className={props.homeButton} text={"Home"}></Button></Link>
                <Link className={props.link} to="/catalog"><Button className={props.catalogButton} text={"Catalog"}></Button></Link>
                <Link className={props.link} to="/"><Button className={props.cartButton} text={"Cart"}></Button></Link>
                {props.children}
            </div>
        </>
    )
}

export default Header