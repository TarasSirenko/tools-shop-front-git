import s from './Specifications.module.css';

export default function Specifications({ specifications }) {
  return (
    <div className={s.specificationsWrapper}>
      <h3 className={s.specificationsTitle}>Характеристики</h3>
      <table className={s.specificationsTable}>
        <tbody>
          {specifications.map(({ _id, label, value }) => (
            <tr key={_id} className={s.specificationsRow}>
              <th className={s.specificationsLabel}>{label}</th>
              <td className={s.specificationsValue}>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
