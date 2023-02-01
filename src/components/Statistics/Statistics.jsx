import PropTypes from 'prop-types';
// import './Statistics.css';
import css from './Statistics.module.scss';
// import data from '../../data/data';
// console.log(data);

const Statistics = ({ stats, title }) => {
    const statsElements = stats.map(({ id, label, percentage }) => (
        <li key={id} className={css.stats_item}>
            <span className={css.stats_label}>{label}</span>
            <span className={css.stats_percentage}>{percentage}%</span>
        </li>));
    return (
        <section className={css.statistics}>
            {title && <h2 className={css.statistics_title}>{title}</h2>}
            <ul className={css.stats}>
                {statsElements}
            </ul>
        </section>
    )
};

export default Statistics;

Statistics.defaultProps = { stats: [] };
Statistics.propTypes = {
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired
    }))
};

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};
/* <section className="statistics">
            <h2 className="title">Upload stats</h2>
            <ul className="stat-list">
                {data.map(i =>
                    <li key={i.id} className="item">
                    <span className="label">{i.label}</span>
                    <span className="percentage">{i.percentage}</span>
                </li>)}
            </ul>
        </section> */