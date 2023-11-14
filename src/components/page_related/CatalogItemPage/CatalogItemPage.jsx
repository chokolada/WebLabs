import styles from "./CatalogItemPage.module.css"
import Footer from "../../common/Footer"
import Header from "../../common/Header"
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import Select from "../../common/Select";
import SearchBar from "../../common/SearchBar";
import Button from "../../common/Button";

const CatalogItemPage = () => {
    const { id } = useParams()
    const [plateData, setPlateData] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:3001/items/${id}`);
                const contentType = response.headers.get('content-type');

                if (contentType && contentType.includes('application/json')) {
                    const data = await response.json();
                    setPlateData(data);
                } else {
                    console.error('Non-JSON response received:', response);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [id]);

    const filteringBarItems = (items) => {
        return items.map((options, index) => (
            <Select key={index} className={styles.selection} id={`select-${index}`} options={options} />
        ));
    };

    console.log(plateData)

    if (plateData.length === 0) {
        return null;
    }

    const title = plateData[0].title;
    const price = plateData[0].price;
    const text = plateData[0].text;
    const characteristics = plateData[0].characteristics;

    return (
        <>
            <Header
                link={styles.link}
                homeButton={styles.homeButton}
                catalogButton={styles.catalogButton}
                cartButton={styles.cartButton}
                className={styles.header}
            />
            <div className={styles.catalogItemPage}>
                <div className={styles.top}>
                    <div className={styles.photo}>
                        <img
                            className={styles.img}
                            src={"https://styleware.com.au/wp-content/uploads/2023/08/styleware-nesting-bowl-biscotti-4-piece-960x960.jpg"}
                            alt="catalogPhoto"
                        />
                    </div>
                    <div className={styles.info}>
                        <div className={styles.characteristics}>
                            {Object.keys(characteristics).map((key) => (
                                <div key={key} className={styles.char}>
                                    {characteristics[key]}
                                </div>
                            ))}
                        </div>
                        <div className={styles.title}>
                            {title}
                        </div>
                        <div className={styles.text}>
                            {text}
                        </div>
                        <div className={styles.fields}>
                            <div>
                                Countable Field
                                <SearchBar className={styles.searchBar} />
                            </div>
                            <div className={styles.select}>
                                Option Field
                                {filteringBarItems([["Option 1", "Option 2", "Option 3"]])}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.bottom}>
                    <div className={styles.price}>
                        Price: ${price}
                    </div>
                    <Button className={styles.goBack} text="Go Back" />
                    <Button className={styles.addCart} text="Add to Cart" />
                </div>
            </div>
            <Footer
                className={styles.footer}
                footerInfo={styles.footerInfo}
                footerLogo={styles.footerLogo}
                footerLinks={styles.footerLinks}
                footerCopyrights={styles.footerCopyrights}
            />
        </>
    )
}

export default CatalogItemPage