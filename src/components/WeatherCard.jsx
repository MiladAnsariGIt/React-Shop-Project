function WeatherCard({weather,loading,error}){

    return(
        <div>
            {loading && <h2>loading . . .</h2>}
            {weather && <ul>
                      <li>{`📍 ${weather.city}`}</li>
                      <li>{`🌡️ ${weather.temperature}`}</li>
                  </ul>}
            {error && <h3>{error}</h3>}
        </div>
    )

}

export default WeatherCard