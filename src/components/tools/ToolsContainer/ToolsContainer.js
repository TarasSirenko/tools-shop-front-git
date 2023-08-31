import s from './ToolsContainer.module.css';

// import toolImg from './09 1.png';
import ToolCard from '../ToolCard/ToolCard';
import axios from 'axios';
import { useQuery } from 'react-query';

function ToolsContainer() {
  async function fetchTools() {
    const response = await axios.get(
      'https://tools-shop-server.vercel.app/api/tools/',
    );

    console.log(response.data);
    return response.data;
  }
  const { data, isLoading, isError } = useQuery('tools', fetchTools);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  return (
    <div className={s.ToolsContainer}>
      {data.map(({ _id, toolPicture, name, price, status }) => {
        return (
          <ToolCard
            key={_id}
            image={toolPicture}
            name={name}
            price={price}
            status={status}
          />
        );
      })}
    </div>
  );
}

export default ToolsContainer;
