

/* eslint-disable */
const LottoBall = ({rotate, color, setRotate, direction, rotationSpeeds, index , number }) => {

    return (
        <div className={`lotto-ball mg5p ball ${rotate ? 'rotate' : ''} ${color}`}
             onAnimationEnd={() => setRotate(0)}
             style={{
                 animation: `${direction} ${rotationSpeeds[index]}s linear`
             }}
        >
            <span className="number">{number}</span>
        </div>
    )
}

export default LottoBall;