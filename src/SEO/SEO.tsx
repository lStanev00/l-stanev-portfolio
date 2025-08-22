import { ReactNode } from "react";
import { Helmet } from "react-helmet-async";

interface ParentProps {
    children: ReactNode; 
}


export default function SEO({ children }: ParentProps) {
    return (<>
        <Helmet>
            <title>Lachezar Stanev - Full-stack Developer</title>
            <meta name="description" content="Portfolio of Lachezar Stanev, full-stack developer specializing in React and Node.js." />
            <meta name="keywords" content="React, Node.js, full-stack developer, portfolio" />
            <meta name="author" content="Lachezar Stanev" />
            <link rel="canonical" href="https://yourwebsite.com/" />
            <meta property="og:title" content="Lachezar Stanev - Full-stack Developer" />
            <meta property="og:description" content="Portfolio of Lachezar Stanev, full-stack developer specializing in React and Node.js." />
            <meta property="og:image" content="/pictures/me" />


            <script type="application/ld+json">
                {`
                    {
                        "@context": "https://schema.org",
                        "@type": "Person",
                        "name": "Lachezar Stanev",
                        "url": "https://www.lstanev.dev",
                        "sameAs": [
                            "https://github.com/lStanev00",
                            "https://www.linkedin.com/in/lstanev00/",
                            "mailto:l.stanev2000@gmail.com",
                            "tel:+359898844033"
                        ]
                    }
                `}
            </script>
        </Helmet>
        {children}
        </>)
}