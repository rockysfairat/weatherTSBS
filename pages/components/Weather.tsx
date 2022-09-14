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
    <section>
      <p>{temp}</p>
      <p>{fl}</p>
      <p>{weatherShort}</p>
      <p>{weatherDesc}</p>
      <p>Wind speed : {wind}</p>
      <p>Sunrise: {sunrise}</p>
      <p>Sunset: {sunset}</p>
    </section>
  );
};
