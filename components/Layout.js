import Link from 'next/link';
import Head from 'next/head';

export default class Layout extends React.Component {
  render() {
    const { children, title } = this.props;

    return <div>
      <Head>
        <title>{ title }</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      { children }
      
       <header><Link href="/"><a>Podcasts</a></Link></header>

      <style jsx>{`
        header {
          color: #fff;
          background: #8756ca;
          padding: 15px;
          text-align: center;
          position: fixed;
          top: 0;
          width: 100%;
        }
        header a {
          color: #fff;
          text-decoration: none;
        }
      `}</style>


      <style jsx global>{`
        body {
          margin: 0;
          font-family: system-ui;
          background: white;
        }
      `}</style>
    </div>
  }
}