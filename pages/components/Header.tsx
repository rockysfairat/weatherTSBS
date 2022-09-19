import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { useDarkMode } from "../../hooks/useDarkMode";

type LocationData = {
  city?: string;
  country?: string;
};

export default function Header({ city, country }: LocationData) {
  // Render user location:
  const gettingUserLocation = (city: string | undefined) => {
    if (!city) {
      return <h2>Getting your current location...</h2>;
    } else {
      return (
        <h2>
          Your current city is: {city}, {country}
        </h2>
      );
    }
  };

  // DarkMode switch:
  const [colorTheme, setTheme] = useDarkMode();

  return (
    <header className="flex justify-between items-center px-3 absolute top-0 w-full py-2 backdrop-blur dark:bg-opacity-30 bg-opacity-80 dark:bg-slate-100 bg-zinc-900 text-white transition-all">
      {gettingUserLocation(city)}
      <button
        onClick={() => setTheme(colorTheme)}
        className="w-1/6 lg:w-1/12 h-9 dark:border-solid border-solid dark:border-2 border-2 border-slate-50 dark:border-zinc-900 rounded-full px-0.5 py-0.5 transition-all"
      >
        <span className="[&>svg]:h-full flex item-center justify-center w-full h-full dark:bg-zinc-900 bg-slate-50 rounded-full py-0.5 ">
          {colorTheme == "light" ? (
            <FontAwesomeIcon icon={faSun} />
          ) : (
            <FontAwesomeIcon icon={faMoon} color="black" />
          )}
        </span>
      </button>
    </header>
  );
}
