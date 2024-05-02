/* eslint-disable */
import "./Home.css";
import Button from '@mui/material/Button';
import {Typography} from "@mui/material";
import {useEffect, useState} from "react";

function Home() {

    const [ballNums, setBallNums] = useState([0, 0, 0, 0, 0, 0]);

    /**
     *    get random 6 numbers
     */
    const getRandomNumbers = () => {
        const numbers = [];
        while (numbers.length < 6) {
            const randomNum = Math.floor(Math.random() * 45) + 1;
            if (!numbers.includes(randomNum)) {
                numbers.push(randomNum);
            }
        }
        setBallNums(numbers);
    };



    useEffect(() => {
        getRandomNumbers();
    }, []);


    const getLtHandler = () => {
        getRandomNumbers();
    }

    const title = "Hello World!";

    return (
        <>
            <div id="container">
                <Typography variant="h4" className="item">
                    {title}
                </Typography>
                <div className="item lt-ball-area">
                    {
                        ballNums.map((n, i) => {
                            if (n <= 10) {
                                return renderBall(n, i, 'bbg-yellow');
                            } else if (n <= 20) {
                                return renderBall(n, i, 'bbg-blue');
                            }else if (n <= 30) {
                                return renderBall(n, i, 'bbg-red');
                            }else if (n <= 40) {
                                return renderBall(n, i, 'bbg-gray');
                            } else if(n<=45){
                                return renderBall(n, i, 'bbg-green');
                            } else {
                                return renderBall(n, i, 'bbg-white');
                            }
                        })
                    }
                </div>
                <div className="item">

                    <Button variant="outlined"
                            size="large"
                            color="primary"
                            style={{
                                backgroundColor: '#090908',
                                borderRadius: '10%',
                                borderStyle: 'solid',
                                fontSize: '20px',
                                fontWeight: 'bold',
                            }}
                            onClick={getLtHandler}
                    >
                        GET
                    </Button>
                </div>
            </div>
        </>
    )
}

function renderBall(n, i, color) {
    return (
        <div className={`lotto-ball mg5p ${color}`} key={i}>
            <span className="number">{n}</span>
        </div>
    )
}


export default Home

