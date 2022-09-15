import { Container } from './styles';
import React from 'react'

export default function TransactionsTable() {
  return (
   <Container>
    <table>
        <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
        </tr>

        <tbody>
            <tr>
                <td>
                    Desenvolvimento de website
                </td>
                <td>
                    R$12000.00
                </td>
                <td>
                    Desenvolvimento
                </td>
                <td>
                    02/02/2022
                </td>
            </tr>
            <tr>
                <td>
                    Desenvolvimento de website
                </td>
                <td>
                    R$12000.00
                </td>
                <td>
                    Desenvolvimento
                </td>
                <td>
                    02/02/2022
                </td>
            </tr>
            <tr>
                <td>
                    Desenvolvimento de website
                </td>
                <td>
                    R$12000.00
                </td>
                <td>
                    Desenvolvimento
                </td>
                <td>
                    02/02/2022
                </td>
            </tr>
        </tbody>
    </table>
   </Container>
  )
}