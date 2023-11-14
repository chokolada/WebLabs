import React, { useState, useEffect } from "react";
import Header from "../../common/Header";
import SearchBar from "../../common/SearchBar";
import Select from "../../common/Select";
import styles from "./Catalog.module.css";
import Button from "../../common/Button";
import CatalogItem from "../../page_related/CatalogItem/CatalogItem";
import Footer from "../../common/Footer";

function Catalog() {
    const [catalogData, setCatalogData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedSubcategory, setSelectedSubcategory] = useState(null);

    const categories = [
        { label: 'Size', options: ['Large', 'Medium', 'Small'] },
        { label: 'Price', options: ['Expensive', 'Normal', 'Cheap'] },
    ];

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setSelectedSubcategory(null);


    };

    const handleSubcategoryChange = (subcategory) => {
        setSelectedSubcategory(subcategory);
    };

    const dataDisplay = (dataToDisplay) => {
        return dataToDisplay.map(({ id, text, title, price }, key) => (
            <CatalogItem
                key={key}
                id={id}
                className={styles.catalogItem}
                header={`Item ${key}`}
                text={text}
                title={title}
                price={price}
            />
        ));
    };

    const filterItems = () => {
        const filters = document.querySelectorAll("select");

        let filteredDataCopy = JSON.parse(JSON.stringify(catalogData));

        filters.forEach((filter, index) => {
            const filterValue = filter.value.toLowerCase().trim();
            if (filterValue) {
                if (index === 0) {
                    filteredDataCopy = filteredDataCopy.filter((item) => String(item.size).toLowerCase().trim() === filterValue);
                } else if (index === 1) {
                    switch (filterValue) {
                        case 'cheap':
                            filteredDataCopy = filteredDataCopy.filter((item) => item.price < 10);
                            break;
                        case 'normal':
                            filteredDataCopy = filteredDataCopy.filter((item) => item.price >= 10 && item.price < 30);
                            break;
                        case 'expensive':
                            filteredDataCopy = filteredDataCopy.filter((item) => item.price >= 30);
                            break;
                        default:
                            break;
                    }
                }
            }
        });

        setFilteredData(filteredDataCopy);
    };

    const searching = () => {
        const searchBar = document.getElementById("search-bar");
    
        const searchValue = searchBar.value.trim();
    
        const searchedItems = catalogData.filter((item) =>
            item.title.toLowerCase().includes(searchValue.toLowerCase())
        );
    
        setFilteredData(searchedItems);
    };
    useEffect(() => {
        fetch('http://localhost:3001/plates')
            .then((response) => response.json())
            .then((data) => {
                setCatalogData(data);
                setFilteredData(data);
            })
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

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
                    <div className={styles.searcher}>
                        <SearchBar className={styles.searchBar} />
                        <Button onClick={searching} className={styles.searchBarButton} text="Search" />
                    </div>
                </Header>
                <div className={styles.filteringBar}>
                    <div className={styles.filters}>
                        {categories.map((category, index) => (
                            <Select
                                key={index}
                                className={styles.selection}
                                id={`select-${index}`}
                                options={category.options}
                                onChange={(value) =>
                                    index === 0 ? handleCategoryChange(value) : handleSubcategoryChange(value)
                                }
                                disabled={index === 1 && !selectedCategory}
                            />
                        ))}
                    </div>
                    <div className={styles.applyButton}>
                        <Button onClick={filterItems} className={styles.apply} text="Apply" />
                    </div>
                </div>
                <div className={styles.catalogItems}>
                    {dataDisplay(filteredData)}
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
