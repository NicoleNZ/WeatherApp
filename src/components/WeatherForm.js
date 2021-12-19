export const WeatherForm = (props) => {

        return (
            <div>
                <form onSubmit={props.getWeather}>
                    <input type="text"></input>
                    <button type="submit">Search</button>
                </form>
            </div>
        )
};