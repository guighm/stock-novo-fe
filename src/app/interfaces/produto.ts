export interface Produto {
    quantidadeMinima: number
    nome: string
    categoriaID: number
    descricao: string
    marca: string
    peso: number
    comprimento: number
    largura: number
    GETIN: string
    NCM: string
    observacoes?: string
    valorEntrada: number
    valorSaida: number
}