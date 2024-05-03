import Button from "@mui/material/Button";

// eslint-disable-next-line react/prop-types
const RollButton = ({getLtHandler}) => {
    return (
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
    )
}

export default RollButton