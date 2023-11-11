export default function Footer(props) {
    return (
        <>
        <div className={props.className}>
            <div className={props.footerInfo}>
                <h3>Branding stuff</h3>
                <section>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p>Sed euismod libero auctor metus congue, a finibus nisi cursus.</p>
                </section>
            </div>
            <div className={props.footerLogo}>
                <img src="https://static.vecteezy.com/system/resources/previews/004/803/647/original/illustration-graphic-of-food-plate-logo-perfect-to-use-for-food-company-free-vector.jpg" alt="" />
            </div>
            <div className={props.footerLinks}>
                <a href="./"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png" alt="" /></a>
                <a href="./"><img src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-twitter-social-media-round-icon-png-image_6315985.png " alt="" /></a>
                <a href="./"><img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png" alt="" /></a>
            </div>
            <div className={props.footerCopyrights}>
                <section>2020 IoT Copyright all rights reserved, bla bla</section>
            </div>
        </div>
        </>
    )
}