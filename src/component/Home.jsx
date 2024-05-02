/* eslint-disable */
import "./Home.css";
import Button from '@mui/material/Button';
import {Typography} from "@mui/material";
import {useEffect, useState} from "react";

function Home() {

    const [ballNums, setBallNums] = useState([0, 0, 0, 0, 0, 0]);
    const [rotate, setRotate] = useState(false);
    const [rotationSpeeds, setRotationSpeeds] = useState([]);
    const [rotationDirections, setRotationDirections] = useState([]);

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

        numbers.sort((a, b) => a - b);
        setBallNums(numbers);
    };

    /**
     *   render ball
     */
    function renderBall(n, i, color) {

        const direction = rotationDirections[i] === 'clockwise' ? 'spin-clockwise' : 'spin-counter-clockwise';
        return (
            <div className={`lotto-ball mg5p ball ${rotate ? 'rotate' : ''} ${color}`}
                 onAnimationEnd={() => setRotate(0)}
                 style={{
                     animation: `${direction} ${rotationSpeeds[i]}s linear`
                 }}
                 key={i}>
                <span className="number">{n}</span>
            </div>
        )
    }

    useEffect(() => {
        getRandomNumbers();
        setSpeedAndDirection();
    }, []);


    function setSpeedAndDirection() {
        const speeds = [];
        const directions = [];
        for (let i = 0; i < 6; i++) {
            speeds.push(Math.random() * 2 + 0.3); // random speed between 0.3s and 2.3s
            directions.push(Math.random() < 0.5 ? 'clockwise' : 'counter-clockwise'); // random direction
        }
        setRotate(prev => prev + 1);
        setRotationSpeeds(speeds);
        setRotationDirections(directions);
    }

    const getLtHandler = () => {
        getRandomNumbers();
        setSpeedAndDirection();
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
                            } else if (n <= 30) {
                                return renderBall(n, i, 'bbg-red');
                            } else if (n <= 40) {
                                return renderBall(n, i, 'bbg-gray');
                            } else if (n <= 45) {
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
                        ROLL
                    </Button>
                </div>
            </div>
        </>
    )
}


export default Home

