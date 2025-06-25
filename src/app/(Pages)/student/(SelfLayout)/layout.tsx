import { Header } from './LAYOUT/Header'

export default function NofiticationLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
   return (
     <div>
        <Header />
        {children}
     </div>
   );
}