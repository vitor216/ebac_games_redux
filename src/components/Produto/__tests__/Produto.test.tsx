import { screen, fireEvent } from '@testing-library/react'
import Produto from '..'
import { rendenizaComProvider } from '../../utils/tests'

const jogo = {
  id: 2,
  categoria: 'RPG',
  imagem: '',
  plataformas: ['Windows', 'PS5', 'Xbox Series S/x'],
  preco: 199.9,
  precoAntigo: 299.9,
  titulo: 'Hogwarts Legacy'
}

describe('Testes para o componente Produto', () => {
  test('Deve rendenizar corretamente', () => {
    rendenizaComProvider(<Produto game={jogo} />)
    expect(screen.getByText('Hogwarts Legacy')).toBeInTheDocument()
  })

  test('Deve Adicionar um item ao carrinho', () => {
    const { store } = rendenizaComProvider(<Produto game={jogo} />)
    const botao = screen.getByTestId('btn-adicionar-produto')
    fireEvent.click(botao)

    expect(store.getState().carrinho.itens).toHaveLength(1)
  })
})
