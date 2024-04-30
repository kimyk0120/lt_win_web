import "./Main.css";

function Main() {

    const getLtHandler = () => {
        console.log("test");
    }

    return (
        <>
            <div id="container">
                <div className="item title_area">
                    <h1>Hello World</h1>
                </div>
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
                <div className="item button-area">
                    <button onClick={getLtHandler}>
                        ROLL
                    </button>
                </div>
            </div>
        </>
    )
}


export default Main

