import { Header } from "../components/common/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Header />
      <div className="mx-auto px-4 py-8 pt-20 h-screen bg-gray-100">
        {children}
      </div>
    </div>
  );
}
