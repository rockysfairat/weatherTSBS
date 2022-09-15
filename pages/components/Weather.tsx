import { useEffect, useState } from "react";

type Weather = {
  temperature?: number;
  feelsLike?: number;
  weatherShort?: string;
  weatherDesc?: string;
  sunrise?: number;
  sunset?: number;
  wind?: number;
};

export const Weather = ({
  temperature,
  feelsLike,
  weatherShort,
  weatherDesc,
  sunrise,
  sunset,
  wind,
}: Weather) => {
  const [temp, setTemp] = useState<string | number>("Loading...");
  const [fl, setFl] = useState<string | number>("Loading...");

  useEffect(() => {
    if (temperature) {
      setTemp(Math.round(temperature) + "°C");
    }
    if (feelsLike) {
      setFl(Math.round(feelsLike) + "°C");
    }
  });

  console.log(sunrise);

  const t = new Date(sunrise);

  const foo = t.toTimeString();

  console.log(foo);

  return (
    <section className="flex">
      <div className="rounded-lg flex flex-col items-center w-1/3 justify-center backdrop-blur ">
        <p>{temp}</p>
        <p>Feels like {fl}</p>
      </div>
      <div className="rounded-lg flex w-1/3 flex-col items-center justify-center backdrop-blur mx-4">
        <p>{weatherShort}</p>
        <p>{weatherDesc}</p>
      </div>
      <div className="rounded-lg flex w-1/3 flex-col  backdrop-blur">
        <p>Wind speed : {wind}</p>
        <p>Sunrise: {sunrise}</p>
        <p>Sunset: {sunset}</p>
      </div>
    </section>
  );
};
