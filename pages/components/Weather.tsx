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

export default function Weather({
  temperature,
  feelsLike,
  weatherShort,
  weatherDesc,
  sunrise,
  sunset,
  wind,
  timezone,
}: Weather) {
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

  const todaySunrise = new Date(
    ((timezone !== undefined ? timezone : 0) + sunrise!) * 1000
  )
    .toTimeString()
    .slice(0, 8);

  const todaySunset = new Date(
    ((timezone !== undefined ? timezone : 0) + sunset!) * 1000
  )
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
     [&>div]:bg-zinc-900
     [&>div]:py-2
     sm:[&>div]:text-lg"
    >
      <div className="rounded-lg flex flex-col items-center w-1/3 justify-center transition-all">
        <p>{temp}</p>
        <p>Feels like {fl}</p>
      </div>
      <div className="rounded-lg flex w-1/3 flex-col items-center justify-center mx-4 transition-all">
        <p>{weatherShort}</p>
        <p>{weatherDesc}</p>
      </div>
      <div className="rounded-lg flex w-1/3 flex-col pl-2 transition-all">
        <p>Wind speed : {wind} m/s</p>
        <p>Sunrise: {todaySunrise}</p>
        <p>Sunset: {todaySunset}</p>
      </div>
    </section>
  );
}
