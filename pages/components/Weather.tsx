import { useEffect, useState } from "react";

type Weather = {
  temperature?: number;
  feelsLike?: number;
  weatherShort?: string;
  weatherDesc?: string;
  sunrise?: number;
  sunset?: number;
  wind?: number;
  timezone?: number | undefined;
};

export const Weather = ({
  temperature,
  feelsLike,
  weatherShort,
  weatherDesc,
  sunrise,
  sunset,
  wind,
  timezone,
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
  }, [temperature, feelsLike]);

  // Sunrise and sunset:

  const todaySunrise = new Date((timezone + sunrise!) * 1000)
    .toTimeString()
    .slice(0, 8);

  const todaySunset = new Date((timezone + sunset!) * 1000)
    .toTimeString()
    .slice(0, 8);

  return (
    <section
      className="flex text-white
     dark:[&>div]:backdrop-blur
     dark:[&>div]:bg-slate-100 
     dark:[&>div]:bg-opacity-30
     [&>div]:backdrop-blur
     [&>div]:bg-opacity-90
     [&>div]:text-lg
     [&>div]:bg-zinc-900"
    >
      <div className="rounded-lg flex flex-col items-center w-1/3 justify-center ">
        <p>{temp}</p>
        <p>Feels like {fl}</p>
      </div>
      <div className="rounded-lg flex w-1/3 flex-col items-center justify-center mx-4">
        <p>{weatherShort}</p>
        <p>{weatherDesc}</p>
      </div>
      <div className="rounded-lg flex w-1/3 flex-col pl-2">
        <p>Wind speed : {wind} m/s</p>
        <p>Sunrise: {todaySunrise}</p>
        <p>Sunset: {todaySunset}</p>
      </div>
    </section>
  );
};
