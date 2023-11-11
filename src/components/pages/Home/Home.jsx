import React from 'react';
import styles from "./Home.module.css"
import Button from '../../common/Button';
import DetailedInfo from '../../common/DetailedInfo';
import Footer from '../../common/Footer';
import Header from '../../common/Header';
import Heading from '../../common/Heading';

function Home() {
    return (
        <>
            <div className={styles.Home}>
                <Header
                    link={styles.link}
                    homeButton={styles.homeButton}
                    catalogButton={styles.catalogButton}
                    cartButton={styles.cartButton}
                    className={styles.header} />
                <main>
                    <Heading
                        className={styles.heading}
                        leftSideName={styles.headingPhoto}
                        rightSideName={styles.info}
                    />
                    <div className={styles.bottomInfo}>
                        <DetailedInfo title={"Tile 1 heading"} className={styles.firstInfo} />
                        <DetailedInfo title={"Tile 2 heading"} className={styles.secondInfo} />
                        <DetailedInfo title={"Tile 3 heading"} className={styles.thirdInfo} />
                    </div>
                    <div className={styles.viewMoreButton}>
                        <Button text={"View More"} className={styles.viewMore} />
                    </div>
                    <Footer
                        className={styles.footer}
                        footerInfo={styles.footerInfo}
                        footerLogo={styles.footerLogo}
                        footerLinks={styles.footerLinks}
                        footerCopyrights={styles.footerCopyrights}
                    />
                </main>
            </div>
        </>
    )
}

export default Home