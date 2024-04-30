/* eslint-disable */
import "./Home.css";
import Button from '@mui/material/Button';
import {Typography} from "@mui/material";

function Home() {

    const getLtHandler = () => {
        console.log("test");
    }

    const title = "Hello World!";

    return (
        <>
            <div id="container">
                <Typography variant="h4" className="item">
                    {title}
                </Typography>
                <div className="item lt-ball-area">
                    <div className="lotto-ball mg5p">
                        <span className="number">23</span>
                    </div>
                    <div className="lotto-ball mg5p">
                        <span className="number">23</span>
                    </div>
                    <div className="lotto-ball mg5p">
                        <span className="number">23</span>
                    </div>
                    <div className="lotto-ball mg5p">
                        <span className="number">23</span>
                    </div>
                    <div className="lotto-ball mg5p">
                        <span className="number">23</span>
                    </div>
                    <div className="lotto-ball mg5p">
                        <span className="number">23</span>
                    </div>
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
                    >
                        GET
                    </Button>
                </div>
            </div>
        </>
    )
}


export default Home

