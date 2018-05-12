import Document, { Head, Main, NextScript } from 'next/document'
import '../styles/main.scss';

export default class MyDocument extends Document {
	render() {
		return (
			<html>
			<Head>
				<link rel="stylesheet" href="/_next/static/style.css" />
			</Head>
			<body>
			<div class="container">
					<Main />
			</div>
			<NextScript />
			</body>
			</html>
		)
	}
}