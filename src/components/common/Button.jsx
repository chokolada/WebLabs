function Button(props) {
    return (
        <>
        <button className={props.className} href={props?.link}>
            {props.text}
        </button>
        </>
    )
}

export default Button