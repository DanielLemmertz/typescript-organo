import React from 'react';
import type { ReactNode } from 'react';
import "./Botao.css";

interface BotaoProps {
    children: ReactNode;
}

const Botao = ({ children }: BotaoProps) => {
    return <button className="botao">{children}</button>;
};

export default Botao;
