import ProductItem from '../../components/ProductItem/ProductItem'
import { connect } from "react-redux";
import './Products.css'
import { Button } from '../../components/UI/Button/Button';
import { mapDispatchToProps, mapStateToProps } from '../../redux/dispatch';
import { useEffect, useRef, useState } from 'react';
import { Loading } from '../../components/UI/Loading/Loading';

const Products = ({ products, onSortByName, onSortByCost, onSearch, onOrdering }) => {
    let productList = products.productList
    if (products.productListFilter.length) {
        productList = products.productListFilter
    }
    const [load, setLoad] = useState(true)

    const lastElement = useRef()
    const observer = useRef()

    const [countriesPerPage, setCountriesPerPage] = useState(15)

    const currentCountry = productList.slice(0, countriesPerPage)

    useEffect(() => {
        let page = 1

        const callback = function (entries) {
            if (entries[0].isIntersecting && ((page * 15) < productList.length) && productList.length) {
                setLoad(true)
                setTimeout(() => {
                    page++
                    setCountriesPerPage(page * 15)
                    setLoad(false)
                }, 500);
            }
        }
        observer.current = new IntersectionObserver(callback);
        observer.current.observe(lastElement.current)
    }, [productList])

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
                <span className='text'>Показано позиций: {typeof currentCountry === 'object' ? currentCountry.length : 0}</span>
                <Button func={onSortByName}>Сортировать по названию</Button>
                <Button func={onSortByCost}>Сортировать по цене</Button>
                <input type="text" onChange={(e) => onSearch(e.target.value)} name='search' placeholder='Поиск по названию...' />
            </div>
            {
                typeof productList === 'object'
                    ?
                    <>
                        <ProductItem items={currentCountry} />
                        {load && <Loading />}
                    </>
                    :
                    <h4 className='message'>{productList}</h4>
            }
            <div ref={lastElement} />
        </div>
    )
}
export default connect(mapStateToProps, mapDispatchToProps)(Products)