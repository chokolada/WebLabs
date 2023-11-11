function Heading(props) {
    return (
        <>
            <div className={props.className}>
                <div className={props.leftSideName}>
                    <img src="https://www.moes.com/-/media/moes/menu/bowls/moes_457694_menu-image-updates_891x490_bowl-no-guac_v1.jpg?v=1&d=20201118T110709Z&la=en&h=490&w=891&hash=E746C8BD0350774A1FB022D89C1588BC" alt="" />
                </div>
                <div className={props.rightSideName}>
                    <h1>Heading</h1>
                    <section>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
                        libero auctor metus congue, a finibus nisi cursus. Nullam et ultricies ex.
                        Nunc eget nunc ac arcu feugiat bibendum. Vivamus ultrices odio id bibendum.
                        Phasellus tincidunt.
                    </section>
                </div>
            </div>
        </>
    )
}

export default Heading