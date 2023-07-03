import { useState } from "react";
import ClienteRepository from "@/core/firebase/repository/ClienteRepository";
import Cliente from "@/core/models/Cliente";
import IClienteRepository from "@/core/repostiory/interfaces/IClienteRepository";
import useTabelaOuForm from "./useTabelaOuForm";

export default function useClientes() {
  const repo: IClienteRepository = new ClienteRepository();

  const { tabelaVisivel, formularioVisivel, exibirTabela, exibirFormulario } =
    useTabelaOuForm();

  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio());
  const [clientes, setClientes] = useState<Cliente[]>([]);

  function obterTodos() {
    repo.obterTodos().then((clientes) => {
      setClientes(clientes);
      exibirTabela();
    });
  }

  function selecionarCliente(cliente: Cliente) {
    setCliente(cliente);
    exibirFormulario();
  }

  async function excluirCliente(cliente: Cliente) {
    await repo.excluir(cliente);
    obterTodos();
  }

  async function salvarCliente(cliente: Cliente) {
    await repo.salvar(cliente);
    obterTodos();
  }

  function novoCliente() {
    setCliente(Cliente.vazio());
    exibirFormulario();
  }

  return {
    cliente,
    clientes,
    tabelaVisivel,
    formularioVisivel,
    exibirTabela,
    novoCliente,
    salvarCliente,
    excluirCliente,
    selecionarCliente,
    obterTodos,
  };
}
