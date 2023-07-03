import { ReactNode } from "react";

interface BotaoProps {
  cor?: "green" | "blue" | "gray";
  className?: string;
  children: ReactNode;
  onClick?: () => void;
}

export default function Botao(props: BotaoProps) {
  const cor = props.cor ?? "gray";
  return (
    <button
      onClick={props.onClick}
      className={`

        bg-gradient-to-r from-${cor.toString().trim()}-400 to-${cor
        .toString()
        .trim()}-700
        text-white px-4 py-2 rounded-md
        ${props.className}
        `}
    >
      {props.children}
    </button>
  );
}
