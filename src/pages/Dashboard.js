import { Link } from "react-router-dom";
import stockData from "../stock-data";

export default function Stocks(props) {

    return (
        <main>
            <h1>Most Active Stocks</h1>
            <ul>
                {
                    stockData.map((stock, idx) => {
                        const { name, symbol } = stock;
                        return (
                            <Link to={`/stocks/${symbol}`}>{name}, {symbol}</Link>
                        )
                    })
                }
            </ul>
        </main>
    );
};