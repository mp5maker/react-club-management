import * as React from 'react'
import { v4 } from 'uuid'
import Box from '../box'
import './table.scss'

interface ITableProps<T> {
  properties: Array<keyof T>
  children?: React.ReactNode
  list: Array<T>
  customHeader: ({
    row,
    index,
  }: {
    row: keyof T
    index: number
  }) => React.ReactNode
  customBody: ({
    row,
    rowIndex,
    column,
    columnIndex,
  }: {
    row: T
    rowIndex: number
    column: keyof T
    columnIndex: number
  }) => React.ReactNode
}

const generatedID = v4()
const anotherGeneratedID = v4()

const Table = <T,>({
  properties,
  customHeader,
  customBody,
  list,
}: ITableProps<T>): JSX.Element => {
  return (
    <Box className={'table-container'}>
      <table>
        <thead>
          <tr>
            {properties.map((row, index) => {
              return (
                <th key={`${generatedID}-${index}`}>
                  {customHeader ? customHeader({ row, index }) : <></>}
                </th>
              )
            })}
          </tr>
        </thead>
        <tbody>
          {list.map((row, rowIndex) => {
            return (
              <tr key={`${anotherGeneratedID}-row-${rowIndex}`}>
                {properties.map((column, columnIndex) => {
                  return (
                    <td
                      key={`${anotherGeneratedID}-row-${rowIndex}-column-${columnIndex}`}
                    >
                      {customBody ? (
                        customBody({ row, column, columnIndex, rowIndex })
                      ) : (
                        <></>
                      )}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </Box>
  )
}

export default Table
