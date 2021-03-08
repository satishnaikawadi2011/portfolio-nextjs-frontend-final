import Document, { Html, Head, Main, DocumentContext } from 'next/document';
import { GA_TRACKING_ID } from '../libs/gtag/gtag';
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
					<script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
					<script
						dangerouslySetInnerHTML={{
							__html:
								`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_TRACKING_ID}', {
                  page_path: window.location.pathname,
                });
              `
						}}
					/>
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
