import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Layout } from './pages/Layout/Layout';
import Products from './pages/Products/Products';
import { Contacts } from './pages/Contacts/Contacts';
import { About } from './pages/About/About';
import Order from './pages/Order/Order';
import Cart from './pages/Cart/Cart';

export const productList = [
  {
    name: 'Велокамера',
    cost: 285,
    limited: false,
    img: 'bike_chamber'
  },
  {
    name: 'Комплект крыльев',
    cost: 499,
    limited: false,
    img: 'fenders'
  },
  {
    name: 'Трос переключения скоростей',
    cost: 499,
    limited: false,
    img: 'shift_cable'
  },
  {
    name: 'Колёса опорные боковые',
    cost: 449,
    limited: false,
    img: 'support_side_wheels'
  },
  {
    name: 'Переключатель задний',
    cost: 899,
    limited: true,
    img: 'rear_switch'
  },
  {
    name: 'Колодки тормозные',
    cost: 499,
    limited: false,
    img: 'brakes'
  },
  {
    name: 'Колодки тормозные',
    cost: 900,
    limited: false,
    img: 'brakes2'
  },
  {
    name: 'Трещотка',
    cost: 2950,
    limited: false,
    img: 'kasset'
  },
  {
    name: 'Цепь',
    cost: 899,
    limited: false,
    img: 'chain'
  },
  {
    name: 'Каретка',
    cost: 279,
    limited: true,
    img: 'caret'
  },
  {
    name: 'Подшипник ступицы',
    cost: 359,
    limited: false,
    img: 'bearing'
  },
  {
    name: 'Shifter',
    cost: 459,
    limited: false,
    img: 'shifter'
  },
  {
    name: 'Педали',
    cost: 2399,
    limited: false,
    img: 'pedals'
  },
  {
    name: 'Колодки тормозные',
    cost: 2699,
    limited: false,
    img: 'brakes'
  },
  {
    name: 'Руль',
    cost: 1499,
    limited: false,
    img: 'st_wheel'
  },
  {
    name: 'Грипсы',
    cost: 399,
    limited: false,
    img: 'grips'
  },
  {
    name: 'Тормозной диск',
    cost: 2499,
    limited: false,
    img: 'brakes_disk'
  },
  {
    name: 'Покрышка',
    cost: 420,
    limited: false,
    img: 'tire'
  },
]
productList.map((item, index) => item['id'] = index)

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Products />} />
          <Route path='contacts' element={<Contacts />} />
          <Route path='about' element={<About />} />
          <Route path='cart' element={<Cart />} />
          <Route path='order' element={<Order />} />
          <Route path='*' element={<h2>Страница не найдена</h2>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App