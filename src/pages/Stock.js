import React from 'react';
import { useParams } from 'react-router';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Stock(props) {
    const apiKey = "0d8549135377a48644c3e54129de948d"
    const params = useParams();
    const symbol = params.symbol;
    const URL = `https://financialmodelingprep.com/api/v3/quote/${symbol}?apikey=${apiKey}`;
    const [stock, setStock] = useState({});

    const getStock = async () => {
        try {
            const response = await fetch(URL);
            const data = await response.json();
            setStock(data[0]);
        } catch (err) {
            console.error(err)
        }
    };

    useEffect(() => {
        getStock()
    }, []);

    const loaded = () => {
        return (
            <main>
                <div className="container">
                    <h5>Company Name:
                        <li>{stock.name}</li></h5>
                    <h5>Price:
                        <li>{stock.price}</li></h5>
                    <h5>Change:
                        <li>{stock.change.toFixed(2)}</li></h5>
                    <h5>Daily High:
                        <li>{stock.dayHigh}</li></h5>
                    <h5>Daily Low:
                        <li>{stock.dayLow}</li></h5>
                    <h5>Volume:
                        <li>{stock.volume}</li></h5>
                </div>
                <Link to="/stocks">Back</Link>
            </main>

        )
    };

    const loading = () => {
        return (
            <h1>Loading...</h1>
        )
    };

    return (
        stock && stock.price ? loaded() : loading()
    );
};