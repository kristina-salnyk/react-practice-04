import { StatisticItem } from 'components';
import { StatisticsList, StatisticTitle } from './Statistics.styled';
import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';
import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
  return (
    <>
      {title && <StatisticTitle>{title}</StatisticTitle>}

      <StatisticsList>
        {stats.map(item => (
          <StatisticItem key={item.id} {...item} icon={getIcon(item.title)} />
        ))}
      </StatisticsList>
    </>
  );
};

function getIcon(title) {
  switch (title) {
    case 'Happy Customers':
      return <MdPeople />;
    case 'Registered Members':
      return <MdOutlineProductionQuantityLimits />;
    case 'Available Products':
      return <FaRegThumbsUp />;
    case 'Saved Trees':
      return <GiTreeDoor />;
  }
}

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      total: PropTypes.number.isRequired,
    }),
  ).isRequired,
  title: PropTypes.string,
};
