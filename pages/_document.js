import Document, { Head, Main, NextScript } from 'next/document'
import '../sass/main.sass'

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <meta charSet="UTF-8"></meta>
          <meta httpEquiv="X-UA-Compatible" content="ie=edge"></meta>
          <title>DataZoo</title>
          <link rel="stylesheet" href="/_next/static/style.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}