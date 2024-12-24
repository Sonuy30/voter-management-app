import Navbar from '../components/Narbar';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
       <Navbar />
        <main className="container mx-auto mt-4">{children}</main>
      </body>
    </html>
  );
}
