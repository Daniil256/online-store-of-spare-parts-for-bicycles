import ProductItem from '../../components/ProductItem/ProductItem'
import { connect } from "react-redux";
import './Products.css'
import { Button } from '../../components/UI/Button/Button';
import { mapDispatchToProps, mapStateToProps } from '../../redux/dispatch';
import { useEffect, useRef, useState } from 'react';
// import { Pagination } from '../../components/Pagination/Pagitanion';
import { Loading } from '../../components/UI/Loading/Loading';

const Products = ({ products, onSortByName, onSortByCost, onSearch, onOrdering }) => {
    let productList = products.productList

    const [load, setLoad] = useState(true)

    const lastElement = useRef()
    const observer = useRef()

    const [currentPage, setCurrentPage] = useState(1)
    const [countriesPerPage] = useState(15)

    const lastCountryIndex = currentPage * countriesPerPage
    // const firstCountryIndex = lastCountryIndex - countriesPerPage
    const currentCountry = productList.slice(0, lastCountryIndex)

    useEffect(() => {
        let x = 1
        productList.length && setLoad(false)
        const callback = function (entries) {
            if (entries[0].isIntersecting) {
                setLoad(true)
                setTimeout(() => {
                    x++
                    setCurrentPage(x)
                    setLoad(false)
                }, 500);
            }
        };
        observer.current = new IntersectionObserver(callback);
        productList.length && observer.current.observe(lastElement.current)
    }, [productList.length])

    useEffect(() => {
        onSearch('')
        onOrdering([])
    }, [])

    return (
        <div className="Products content">
            <div className="title blue-violet">
                <h2>Список товаров</h2>
            </div>

            <div className="sort">
                <span className='text'>Показано позиций: {currentCountry.length}</span>
                <Button func={onSortByName}>Сортировать по названию</Button>
                <Button func={onSortByCost}>Сортировать по цене</Button>
                <input type="text" onChange={(e) => onSearch(e.target.value)} name='search' placeholder='Поиск по названию...' />
            </div>

            {
                productList.length
                    ?
                    <>
                        <ProductItem items={currentCountry} />
                        <div ref={lastElement} />

                        {/* <Pagination
                                countriesPerPage={pagitanionPage}
                                totalCountries={productList.length}
                                setCurrentPage={setCurrentPagePagination}
                                currentPage={currentPagePagination} /> */}
                    </>

                    :
                    !load && <h4 className='message'>Ничего не найдено</h4>
            }
            {
                load && (currentCountry.length !== productList.length || !productList.length)
                &&
                <Loading />
            }
        </div>
    )
}
export default connect(mapStateToProps, mapDispatchToProps)(Products)
