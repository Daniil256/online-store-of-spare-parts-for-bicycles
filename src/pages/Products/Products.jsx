import ProductItem from '../../components/ProductItem/ProductItem'
import { connect } from "react-redux";
import './Products.css'
import { Button } from '../../components/UI/Button/Button';
import { mapDispatchToProps, mapStateToProps } from '../../redux/dispatch';
import { useEffect, useState } from 'react';
import { Pagination } from '../../components/Pagination/Pagitanion';

const Products = ({ products, onSortByName, onSortByCost, onSearch, onOrdering }) => {

    let productList = products.productList

    const [currentPage, setCurrentPage] = useState(1)
    const [countriesPerPage] = useState(15)

    const lastCountryIndex = currentPage * countriesPerPage
    const firstCountryIndex = lastCountryIndex - countriesPerPage
    const currentCountry = productList.slice(firstCountryIndex, lastCountryIndex)


    useEffect(() => {
        onOrdering([])
    }, [])

    return (
        <div className="Products content">
            <div className="title blue-violet">
                <h2>Список товаров</h2>
            </div>
            <div className="sort">
                <span className='text'>Найдено позиций: {productList.length}</span>
                <Button func={onSortByName}>Сортировать по названию</Button>
                <Button func={onSortByCost}>Сортировать по цене</Button>
                <input type="text" onChange={(e) => onSearch(e.target.value)} name='search' placeholder='Поиск по названию...' />
            </div>
            <div className="items">
                {currentCountry.map(item =>
                    <ProductItem item={item} key={item.id} />
                )}
            </div>
            <Pagination
                countriesPerPage={countriesPerPage}
                totalCountries={productList.length}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage} />
        </div>
    )
}
export default connect(mapStateToProps, mapDispatchToProps)(Products)
