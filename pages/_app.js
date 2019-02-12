import Wires from "@spatie/wires";
import App, { Container } from "next/app";

export default class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props;

    return (
      <Container>
        <Wires pages={["/"]} path={router.pathname}>
          <div className="flex flex-col min-h-screen">
            <div className="flex-1 w-full max-w-lg mx-auto">
              <Component {...pageProps} />
            </div>
            <footer className="py-6 bg-grey-lighter text-xs text-center text-grey-dark">
              A <a href="https://spatie.be" target="_blank" className="underline">spatie.be</a> project.
            </footer>
          </div>
        </Wires>
      </Container>
    );
  }
}
