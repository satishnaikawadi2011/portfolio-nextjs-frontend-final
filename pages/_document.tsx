import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html data-theme="dark" lang="en">
				<Head>
					<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0" />
					<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
					<meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
					<meta name="HandheldFriendly" content="True" />
					<meta name="MobileOptimized" content="320" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
