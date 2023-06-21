import './globals.css';
import Header from './components/header/Header';
import { styles } from './components/fontsstyle/FontsStyle';

export const metadata = {
  title: 'кофе +',
  description: 'Всё о кофе',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={styles}>
        <Header />
        {children}
      </body>
    </html>
  );
}
