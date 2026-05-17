import config from "./config";
import Header from "./components/Header";
import "./globals.css";


export const metadata = {
  title: "BasoBas",
  description: "Platform to find and rent rooms easily",
  keywords:
    "room rental, booking system, accommodation, property listing, tenants, landlords, rental management, online booking, housing, search filters",
};

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />

        {children}
      </body>
    </html>
  );
}

export default RootLayout;
