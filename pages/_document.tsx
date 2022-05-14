import Document, {Html, Head, Main, NextScript} from "next/document";

export default class myDocument extends Document {
    render() {
        return(
            <Html>
                <Head>
                    <title>Goals</title>
                    <link rel="shortcut icon" href="favicon.png" type="image/x-icon" />
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&family=Rajdhani:wght@600&display=swap" rel="stylesheet" />
                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        );
    }
}