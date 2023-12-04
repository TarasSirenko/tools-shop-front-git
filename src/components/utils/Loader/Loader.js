import s from './Loader.module.css';
import { InfinitySpin } from 'react-loader-spinner';

export default function Loader() {
  return (
    <div className={s.Loading}>
      <InfinitySpin width="200" color="rgb(240, 132, 0)" />
    </div>
  );
}
