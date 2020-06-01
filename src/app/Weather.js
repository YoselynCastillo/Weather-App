export class Weather {
  constructor(city, countryCode) {
    this.apikey = "4c1e4a6c2de9676c36ce8bd51599b294";
    this.city = city;
    this.countryCode = countryCode;
  }

  //toma los datos de ciudad, codigo de pais y la apikey y hace la peticion a la API y cuando los traiga, los retorna
  async getWeather() {
    const URI = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&appid=${this.apikey}&units=metric`;
    const response = await fetch(URI);
    const data = await response.json();
    return data;
  }

  changeLocation(city, countryCode) {
    this.city = city;
    this.countryCode = countryCode;
  }
}
