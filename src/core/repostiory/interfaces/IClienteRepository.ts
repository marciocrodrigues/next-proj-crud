import Cliente from "../../models/Cliente";

export default interface IClienteRepository {
  salvar(cliente: Cliente): Promise<Cliente>;
  excluir(cliente: Cliente): Promise<void>;
  obterTodos(): Promise<Cliente[]>;
}
