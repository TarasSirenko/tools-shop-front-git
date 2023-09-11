import s from './ToolCard.module.css';

// import toolImg from './09 1.png';
import AddCircleIcon from '@mui/icons-material/AddCircle';

function ToolCard({ image, name, price, status }) {
  console.log(price);
  return (
    <a href="#" className={s.ToolCardLink}>
      <div className={s.ToolCardTopWrapper}>
        <div className={s.Status}>{status}</div>
        <button className={s.AddToolBtn}>
          <AddCircleIcon
            color="success"
            fontSize="large"
            titleAccess="Додати інструмент у кошик"
          />
        </button>
      </div>

      <img className={s.ToolCardImage} src={image} alt="tool imag"></img>

      <h3 className={s.ToolName}>{name}</h3>
      <p className={s.Price}>
        <span className={s.PriceTitle}>Ціна:</span> {price}грн/день
      </p>
    </a>
  );
}

export default ToolCard;
