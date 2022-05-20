export const ShowManual = (props) => {

    return (
        <div className="timer">
            <h1 className="digits">
                {("0" + Math.floor((props.manual / 3600000) % 60)).slice(-2)}:
            </h1>
            <h1 className="digits">
                {("0" + Math.floor((props.manual / 60000) % 60)).slice(-2)}:
            </h1>
            <h1 className="digits">
                {("0" + Math.floor((props.manual / 1000) % 60)).slice(-2)}.
            </h1>
            <h1 className="digits mili-sec">
                {("0" + ((props.manual / 10) % 100)).slice(-2)}
            </h1>
        </div>
    );
};