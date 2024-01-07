import type { AppProps } from "next/app";
import { Container } from "../components/Container";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Container>
			<Component {...pageProps} />
		</Container>
	);
}
