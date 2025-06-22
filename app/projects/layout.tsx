import { Header } from "../components/common/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white">
      <Header />
      <div className="container mx-auto px-4 py-8 pt-20">{children}</div>
    </div>
  );
}
