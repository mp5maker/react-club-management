import * as React from 'react'
import { v4 } from 'uuid'
import Box from '../box'
import NoDataFound from '../no-data-found'
import Typography from '../typography'
import './table.scss'

interface ITableProps<T> {
  loading?: boolean
  autoSerial?: boolean
  properties: Array<keyof T>
  children?: React.ReactNode
  list: Array<T>
  customDataHeader: ({ column }: { column: keyof T | 'serial' }) => string
  customHeader: ({
    column,
    index,
  }: {
    column: keyof T | 'serial'
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
  rowOptions?: ({ row }: { row: T }) => React.ReactNode
}

const generatedID = v4()
const anotherGeneratedID = v4()

const Table = <T,>({
  loading = false,
  properties,
  customDataHeader,
  customHeader,
  customBody,
  list,
  autoSerial = true,
  rowOptions,
}: ITableProps<T>): JSX.Element => {
  const colSpan = properties.length + (autoSerial ? 1 : 0)

  const TheadContent = (
    <thead>
      <tr>
        {autoSerial ? (
          <th key={`${generatedID}-id`}>
            {customHeader ? (
              customHeader({ column: 'serial', index: 0 })
            ) : (
              <></>
            )}
          </th>
        ) : (
          <></>
        )}
        {properties.map((column, index) => {
          return (
            <th key={`${generatedID}-${index}`}>
              {customHeader ? customHeader({ column, index }) : <></>}
            </th>
          )
        })}
      </tr>
    </thead>
  )

  const NoDataContent = !loading ? (
    <tbody>
      <tr>
        <td colSpan={colSpan}>
          <NoDataFound />
        </td>
      </tr>
    </tbody>
  ) : <></>

  const TBodyContent = (
    <tbody>
      {list.map((row, rowIndex) => {
        return (
          <tr key={`${anotherGeneratedID}-row-${rowIndex}`}>
            {autoSerial ? (
              <td
                key={`${generatedID}-id`}
                data-header={
                  customDataHeader ? customDataHeader({ column: 'serial' }) : ''
                }
              >
                <Box>
                  <Typography>{rowIndex + 1}</Typography>
                </Box>
              </td>
            ) : (
              <></>
            )}
            {properties.map((column, columnIndex) => {
              return (
                <td
                  data-header={
                    customDataHeader ? customDataHeader({ column }) : ''
                  }
                  key={`${anotherGeneratedID}-row-${rowIndex}-column-${columnIndex}`}
                >
                  {customBody ? (
                    customBody({ row, column, columnIndex, rowIndex })
                  ) : (
                    <></>
                  )}
                  {rowOptions && columnIndex === properties.length - 1 ? (
                    <Box className={'row-options'}>{rowOptions({ row })}</Box>
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
  )

  return (
    <Box className={'table-container'}>
      <table>
        {TheadContent}
        {list.length ? TBodyContent : NoDataContent}
      </table>
    </Box>
  )
}

export default Table
