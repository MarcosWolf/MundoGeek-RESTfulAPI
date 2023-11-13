import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import { BrowserRouter } from "react-router-dom";
import Footer from "../components/content/Footer/Footer";

describe('Footer', () => {
    test("should render correctly", () => {
        render(
            <BrowserRouter>
                <Footer />
            </BrowserRouter>
        );

        expect(screen.getByText("Mundo . Geek"));
        expect(screen.getByText("O material deste site foi desenvolvido com o propósito de divulgação do meu portfólio."));
    });
});