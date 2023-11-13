import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import { BrowserRouter } from "react-router-dom";
import Header from "../components/content/Header/Header";
import HeaderBottom from "../components/content/Header/HeaderBottom";

describe('Header', () => {
    test("should render correctly", () => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        );

        expect(screen.getByText("Mundo . Geek")).toBeInTheDocument();
    });

    test("should check search input", () => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        );

        const input = screen.getByTestId('query') as HTMLInputElement;
        expect(input).toBeInTheDocument();
    });

    test("should start with empty field", () => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        );

        const input = screen.getByTestId('query') as HTMLInputElement;
        expect(input.value).toBe('');
    });

    test("should fill the search input", () => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        );

        const input = screen.getByTestId('query') as HTMLInputElement;
        fireEvent.change(input, {  target: { value: 'Texto de pesquisa' } });
        expect(input.value).toBe('Texto de pesquisa');
    });
});

describe("HeaderBottom", () => {
    test("should render correctly", () => {
        render(
            <BrowserRouter>
                <HeaderBottom />
            </BrowserRouter>
        );

        expect(screen.getByText('Filmes e TV'));
        expect(screen.getByText('Quadrinhos'));
        expect(screen.getByText('Otaku'));
        expect(screen.getByText('Jogos'));
        expect(screen.getByText('Tecnologia'));
    })
});