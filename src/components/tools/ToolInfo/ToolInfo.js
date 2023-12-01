import s from './ToolInfo.module.css';
import { useDispatch, useSelector } from 'react-redux';

import { addToCart } from 'redux/cart/cart-slice';
import { toast, ToastContainer } from 'react-toastify';

function ToolInfo({
  image,
  toolId,
  name,
  type,
  cityLocation,
  description,
  price,
  status,
}) {
  const currentCart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const buttonAddToCartClick = event => {
    if (currentCart.find(tool => tool.toolId === toolId)) {
      toast.warning('Інструмент вже у кошику', {
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
      <ToastContainer className={s.ToastContainer} />
      <div className={s.info}>
        <div className={s.addButtonWrapper}>
          <h2 className={s.toolName}>{name}</h2>
          <button
            onClick={buttonAddToCartClick}
            className={`${s.button} ${s.addButton}`}
          >
            Додати до замовлення
          </button>
        </div>

        <h3 className={s.price}>Ціна: {price}грн/день</h3>

        <h3 className={s.descriptionTitle}>Опис:</h3>
        <p className={s.descriptionList}>{description}</p>

        <p className={s.type}>
          <b>Тип:</b> {type}
        </p>
        <p className={s.location}>
          <b>Місце знаходження:</b> {cityLocation}
        </p>
      </div>
    </>
  );
}

export default ToolInfo;
