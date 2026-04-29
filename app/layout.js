import './globals.css'

   export const metadata = {
     title: 'Car Bidding Tracker',
     description: 'Track used car bidding prices',
   }

   export default function RootLayout({ children }) {
     return (
       <html lang="en">
         <body>{children}</body>
       </html>
     )
   }
