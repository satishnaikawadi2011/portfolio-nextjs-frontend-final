import Document, { Html, Head, Main, DocumentContext } from 'next/document';
import DeferNextScript from '../utils/DeferNextScript';

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html data-theme="dark" lang="en">
				<Head>
					<meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
					<meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
					<meta name="HandheldFriendly" content="True" />
					<meta name="MobileOptimized" content="320" />
					<link rel="manifest" href="/manifest.json" />
					<link rel="apple-touch-icon" href="/images/logo.png" />
					<meta name="theme-color" content="#2196f3" />
				</Head>
				<body>
					<Main />
					<DeferNextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
