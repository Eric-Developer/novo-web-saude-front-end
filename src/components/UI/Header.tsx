"use client"
import Link from "next/link";
import Button from "./Button";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header>
            <div className="header-logo">
                <h1>WEB SAÚDE</h1>
            </div>

            <FaBars
                className="header-hamburger"
                onClick={() => setMenuOpen(!menuOpen)}
            />

            <nav className={`header-menu ${menuOpen ? "open" : ""}`}>
                <div className="header-button">
                    <Button>Entrar</Button>
                </div>
                <ul className="header-list">
                    <li><Link href="#">Início</Link></li>
                    <li><Link href="#">Sobre</Link></li>
                </ul>
            </nav>
        </header>
    );
}
