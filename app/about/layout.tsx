import { Header } from "../components/common/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Header />
      <div className="mx-auto px-4 py-8 pt-20 bg-gray-100 h-full">
        {children}
      </div>
    </div>
  );
}
