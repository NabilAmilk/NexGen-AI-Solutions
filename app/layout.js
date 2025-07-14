// app/layout.js

import '../styles/globals.css';

export const metadata = {
  title: 'NexGen AI',
  description: 'Your trusted AI Transformation Partners',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}
