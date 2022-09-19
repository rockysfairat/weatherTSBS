import type { NextPage } from "next";
import { useState, useEffect } from "react";
// NextJS components:
import Head from "next/head";
// Custom components:
import { Weather } from "./components/Weather";
import { Header } from "./components/Header";
import axios from "axios";
import { useDarkMode } from "../hooks/useDarkMode";

const Home: NextPage = () => {
  // User Location:
  const [lat, setLat] = useState<number>(0);
  const [long, setLong] = useState<number>(0);
  useEffect(() => {
    const geolocationAPI = global.navigator.geolocation;
    const getUserLocation = () => {
      if (!geolocationAPI) {
        console.log("Can't get your location, sorry :(");
      } else {
        geolocationAPI.getCurrentPosition((position) => {
          const { coords } = position;
          setLat(coords.latitude);
          setLong(coords.longitude);
        });
      }
    };
    getUserLocation();
    changeBtnName();
  });

  // Fetch the weather:
  const [weather, setWeather] = useState<any>({});
  const url: string = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${process.env.NEXT_PUBLIC_API_KEY}&units=metric`;
  const fetchWeather = () => {
    axios.get(url).then((response: any) => {
      setWeather(response.data);
    });
  };

  // Fetch/Refresh btn func:
  const [btn, setBtn] = useState<string>("Fetch weather");
  const changeBtnName = () => {
    if (Object.keys(weather).length > 0) {
      setBtn("Refresh");
    }
  };

  return (
    <div className="flex w-full h-screen justify-evenly items-center bg-treesBg flex-col dark:bg-darkTrees bg-center transition-all">
      <Head>
        <title>The Weather App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/hot.png" />
      </Head>
      <Header city={weather.name} country={weather.sys?.country} />
      <main className="lg:w-1/2 md:w-3/4 mx-2">
        <Weather
          temperature={weather.main?.temp}
          feelsLike={weather.main?.feels_like}
          sunrise={weather.sys?.sunrise}
          sunset={weather.sys?.sunset}
          wind={weather.wind?.speed}
          weatherShort={weather.weather?.[0].main}
          weatherDesc={weather.weather?.[0].description}
          timezone={weather.timezone}
        />
      </main>
      <button
        className="rounded-full border-solid border-4 border-zinc-900 dark:border-slate-50 px-1 py-1 backdrop-blur transition-all"
        onClick={fetchWeather}
      >
        <span className="dark:bg-slate-50 bg-zinc-900 dark:text-zinc-900 text-white rounded-full w-11/12 h-screen px-5 py-1 text-lg ">
          {btn}
        </span>
      </button>
      <footer
        className="flex justify-center w-full absolute bottom-0 pl-1 text-xs
      bg-zinc-900 
      text-white
      backdrop-blur
      bg-opacity-30
      dark:bg-slate-50
      dark:bg-opacity-30
      dark:backdrop-blur
      dark:text-black"
      >
        <p>The weather app by </p>
        <a href="https://github.com/rockysfairat" className="ml-1 underline">
          Ålexander Yurchenko
        </a>
      </footer>
    </div>
  );
};

export default Home;
