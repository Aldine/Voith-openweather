const API_KEY = process.env.REACT_APP_API_KEY;

export const getWeather = async () => {
   try {
      const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=48.6786&lon=10.1507&appid=${API_KEY}`);
      const jsonConverted = await res.json();
      return jsonConverted;
   } catch (e) {
      return e.message;
   }
};
