import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState, useRef } from 'react';

import myGif from '../img/animation-cart.gif';
import { ReactComponent as IconCross } from 'svgImage/icon-cross.svg';
import { deleteFromCart } from 'redux/cart/cart-slice';

import { ToastContainer, toast } from 'react-toastify';

import s from './cartView.module.css';

import CartDatePicker from 'components/tools/CartDatePicker/CartDatePicker';

export default function CartView() {
  const toolsCart = useSelector(state => state.cart);
  const currentUser = useSelector(state => state.auth);
  const [selectedToolId, setSelectedToolId] = useState([]);
  const [successOrder, setSuccessOrder] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const totalPrice = toolsCart.reduce(
    (total, tool) => total + tool.orderPrice,
    0,
  );

  const handleLinkClick = toolId => {
    navigate(`/${toolId}`);
  };

  let errorCounter = useRef(0);
  const orderButtonClick = () => {
    const unselectedDateTools = toolsCart.filter(
      tool => tool.daysSelected === 0,
    );
    if (unselectedDateTools.length > 0) {
      setTimeout(() => {
        setSelectedToolId([]);
      }, 3000);
      unselectedDateTools.map(tool =>
        setSelectedToolId(prevState => [...prevState, tool.toolId]),
      );
      toast.warning('Оберіть дати для всіх інструментів', {
        className: `${s.customToast}`,
      });
      return;
    }

    if (!currentUser.isLoggedIn) {
      toast.warning(
        'Авторизуйтесь будьласка, це необхідно для завершення процессу бронювання',
        {
          className: `${s.customToast}`,
        },
      );
      errorCounter.current += 1;
      if (errorCounter.current > 2) {
        navigate(`/login`);
      }
      return;
    }
    setSuccessOrder(true);
  };

  if (toolsCart.length === 0) {
    return (
      <div className={s.orderSuccessWrapper}>
        <h2 className={s.cartPlaceholder}>Поки нема інструментів у кошику </h2>
        <img src={myGif} alt="my-gif" className={s.myGif} />
      </div>
    );
  }

  if (successOrder) {
    return (
      <div className={s.orderSuccessWrapper}>
        <h2 className={s.cartPlaceholder}>
          Заявка на бронювання успішно надіслінна!{' '}
        </h2>
        <p className={s.orderSuccessText}>
          Протягом наступної години наш менеджер звяжеться з вами. Деталі
          замовлення ви можете переглянути в архіві (посилання внизу).
        </p>

        <span className={s.gratitude}>
          Дякуемо що скорісталися нашим сервісом!
        </span>
      </div>
    );
  }

  return (
    <>
      <ToastContainer className={s.ToastContainer} />
      <div className={s.ToolsContainer}>
        <ul className={s.ToolsList}>
          {toolsCart &&
            toolsCart.map(
              ({
                toolId,
                image,
                name,
                price,
                daysSelected,
                orderPrice,
                dateRange,
              }) => {
                const isSelected = selectedToolId.includes(toolId);
                return (
                  <li
                    key={toolId}
                    className={`${s.cartTool} ${
                      isSelected ? s.selectedTool : ''
                    }`}
                  >
                    <div className={s.cartAdeptivWrapper}>
                      <div className={s.baseInfoWrapper}>
                        <img
                          src={image}
                          alt="фото інструмента"
                          className={s.cartToolPicture}
                          onClick={() => handleLinkClick(toolId)}
                        />

                        <div className={s.datePickerWrapper}>
                          <p className={s.toolName}>{name}</p>
                          <p className={s.toolPrice}>{price} гр/д </p>
                        </div>
                      </div>
                      <div className={s.datePickerWrapper}>
                        <CartDatePicker toolId={toolId} dateRange={dateRange} />
                        <div className={s.andInfoWrapper}>
                          <p className={s.daysCounter}>Днів: {daysSelected}</p>
                          <p className={s.totalPrice}>
                            Всього: {orderPrice} грн{' '}
                          </p>
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      className={s.removeToolCartBtn}
                      onClick={() => dispatch(deleteFromCart(toolId))}
                    >
                      <IconCross width={20} height={20} />
                    </button>
                  </li>
                );
              },
            )}
        </ul>
        <div className={s.createOrderWraper}>
          <p className={s.generalTotalPrice}>{totalPrice} ₴ </p>
          <button type="submit" className={s.button} onClick={orderButtonClick}>
            БРОНЮВАТИ
          </button>
        </div>
      </div>
    </>
  );
}
