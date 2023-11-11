import React from "react"; // Make sure to import React
import Header from "../../common/Header";
import SearchBar from "../../common/SearchBar";
import Select from "../../common/Select";
import styles from "./Catalog.module.css";
import Button from "../../common/Button";
import Catalogitem from "../../page_related/CatalogItem/CatalogItem";
import Footer from "../../common/Footer";

function Catalog() {
    const filteringBarItems = (items) => {
        const selectComponents = [];
        for (let i = 0; i < items.length; i++) {
            selectComponents.push(
                <Select key={i} className={styles.selection} id={`select-${i}`} options={items[i]} />
            );
        }
        return selectComponents;
    }

    return (
        <>
            <div className={styles.catalog}>
                <Header
                    link={styles.link}
                    homeButton={styles.homeButton}
                    catalogButton={styles.catalogButton}
                    cartButton={styles.cartButton}
                    className={styles.header}
                >
                    <SearchBar className={styles.searchBar} />
                </Header>
                <div className={styles.filteringBar}>
                    <div className={styles.filters}>
                        {filteringBarItems([["Option 1", "Option 2", "Option 3"], ["Option 1", "Option 2", "Option 3"]])}
                    </div>
                    <div className={styles.applyButton}>
                        <Button className={styles.apply} text="Apply" />
                    </div>
                </div>
                <div className={styles.catalogItems}>
                    <Catalogitem
                        className={styles.catalogItem}
                        header="Item1"
                        title="Amazing Stuff"
                        price="2414"
                    />
                    <Catalogitem
                        className={styles.catalogItem}
                        header="Item1"
                        title="Amazing Stuff"
                        price="2414"
                    />
                    <Catalogitem
                        className={styles.catalogItem}
                        header="Item1"
                        title="Amazing Stuff"
                        price="2414"
                    />
                    <Catalogitem
                        className={styles.catalogItem}
                        header="Item1"
                        title="Amazing Stuff"
                        price="2414"
                    />
                    
                </div>
                <Footer
                    className={styles.footer}
                    footerInfo={styles.footerInfo}
                    footerLogo={styles.footerLogo}
                    footerLinks={styles.footerLinks}
                    footerCopyrights={styles.footerCopyrights}
                />
            </div>
        </>
    );
}

export default Catalog;
