type LocationData = {
  city?: string;
  country?: string;
};

export const Header = ({ city, country }: LocationData) => {
  return (
    <header className="flex justify-center px-3 absolute top-0">
      <h2>
        Your current city is: {city}, {country}
      </h2>
    </header>
  );
};
