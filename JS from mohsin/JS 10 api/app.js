// Promise
// An js object that acts as an placeholder for the future value of an async operation

// 2 ways to use Promise
// 1 Consume promise
// 2 Build promise

// fetch("http://api.alquran.cloud/v1/ayah/sdf")
//   .then((response) => {
//     return response.json();
//   })
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// cd6d872f269bef81f5699c507550b9da

// https://api.openweathermap.org/data/2.5/weather?q=lahore&appid=1cf37b5d25e1987a6850ab3c6b76e2de&units=metric

const output = document.getElementById("output");

const getTemperature = (cityName) => {
  const promise = fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=1cf37b5d25e1987a6850ab3c6b76e2de&units=metric`
  );

  promise
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      const { main } = response;
      output.innerText = main.feels_like;
    });
};

getTemperature("lahore");