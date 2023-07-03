import { useState } from "react";
import Entrada from "./Entrada";
import Cliente from "@/core/models/Cliente";
import Botao from "./Botao";

interface FormularioProps {
  cliente: Cliente;
  clienteMudou: (cliente: Cliente) => void;
  cancelado?: () => void;
}

export default function Formulario(props: FormularioProps) {
  const id = props.cliente?.id ?? null;
  const [nome, setNome] = useState<string>(props.cliente?.nome ?? "");
  const [idade, setIdade] = useState<number>(props.cliente?.idade ?? 0);
  return (
    <div>
      {id ? (
        <Entrada
          texto="Código"
          valor={id}
          tipo="text"
          somenteLeitura
          className="mb-4"
        />
      ) : (
        false
      )}
      <Entrada
        texto="Nome"
        valor={nome}
        tipo="text"
        valorMudou={setNome}
        className="mb-4"
      />
      <Entrada
        texto="Idade"
        valor={idade}
        tipo="number"
        valorMudou={setIdade}
      />
      <div className="flex justify-end mt-7">
        <Botao
          cor="blue"
          className="mr-2"
          onClick={() => props.clienteMudou?.(new Cliente(nome, +idade, id))}
        >
          {id ? "Alterar" : "Salvar"}
        </Botao>
        <Botao onClick={props.cancelado}>Cancelar</Botao>
      </div>
    </div>
  );
}
