// anything in this file will span the whole project/page
import "../globals.css";


export const metadata = {
    title: 'My Personal Website',
    description: 'Generated by Next + Sanity',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>{children}</body>


            {/* try adding/changing className params and you'll see- eg add bg-pink 500 - you'll get a pink bgd */}
        </html>
    )
}