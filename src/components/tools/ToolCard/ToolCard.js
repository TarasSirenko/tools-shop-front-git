import s from './ToolCard.module.css';

import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as IconCart } from 'svgImage/icon-cart.svg';
import { toast } from 'react-toastify';

import { addToCart } from 'redux/cart/cart-slice';

function ToolCard({ toolId, image, name, price, status, catr }) {
  const dispatch = useDispatch();
  const currentCart = useSelector(state => state.cart);

  const handleAddToCartClick = event => {
    event.preventDefault();
    if (currentCart.find(tool => tool.toolId === toolId)) {
      toast.warning('Інструмент вже в кошику', {
        className: `${s.customToast}`,
      });
      return;
    }

    toast.success('Інструмент додано у кошик', {
      className: `${s.customToast}`,
    });

    dispatch(addToCart({ toolId, image, name, price, status }));
  };
  return (
    <>
      <li>
        <Link to={toolId} className={s.ToolCardLink}>
          <div className={s.ToolCardTopWrapper}>
            <div className={s.Status}>{status}</div>
            <button
              className={`${s.AddToolBtn} ${catr ? s.active : ''}`}
              onClick={handleAddToCartClick}
            >
              <IconCart width={27} height={30} />
            </button>
          </div>

          <img className={s.ToolCardImage} src={image} alt="tool imag"></img>

          <h3 className={s.ToolName}>{name}</h3>
          <p className={s.Price}>
            <span className={s.PriceTitle}>Ціна:</span> {price}грн/день
          </p>
        </Link>
      </li>
    </>
  );
}

export default ToolCard;
