import { Link } from 'react-router-dom'
import mainStyles from './main.module.css'

export function Main() {
  return (

    <div className={mainStyles.wr}>
      <h3> Добро пожаловать в интернет-магазин Dog Shop</h3>
      <Link to="/products">
        <button type="button" className={mainStyles.btn}>Каталог</button>
      </Link>
    </div>
  )
}
// push