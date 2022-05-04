import { stocks as data } from '../stock-data.js';
import { Link } from 'react-router-dom';

export default function Dashboard() {
    const displayAllStocks = (obj, idx) => {
        return (
            <Link to={`/stock-data/${obj.symbol}`}>
                <li key={idx}>{obj.name}</li>
            </Link>
        )
    };
}