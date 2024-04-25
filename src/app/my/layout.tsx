

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
     <>
        <h2>Inner Nav Item</h2>
        {children}
    </>
  );
}
