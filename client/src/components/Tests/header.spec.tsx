import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import { BrowserRouter } from "react-router-dom"; // Importe BrowserRouter
import Header from "../Header/Header"; // Importe o componente Header

describe('Logo', () => {
    it("should render correctly", () => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        );

        expect(screen.getByText("Mundo . Geek")).toBeInTheDocument();
    });
});