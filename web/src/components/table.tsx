import {
  Table as ChakraTable,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { ReactNode } from "react";

interface Column<DataType> {
  title: string;
  isNumeric?: boolean;
  render: (data: DataType) => ReactNode;
}

interface TableProps<DataType> {
  columns: Column<DataType>[];
  data: DataType[];
}

function Table<DataType>(props: TableProps<DataType>) {
  return (
    <ChakraTable>
      <Thead>
        <Tr>
          {props.columns.map(({ title, isNumeric }, index) => (
            <Th key={index} isNumeric={isNumeric}>
              {title}
            </Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>
        {props.data.map((data, index) => (
          <Tr key={index}>
            {props.columns.map(({ render, isNumeric }, index) => (
              <Td key={index} isNumeric={isNumeric}>
                {render(data)}
              </Td>
            ))}
          </Tr>
        ))}
      </Tbody>
    </ChakraTable>
  );
}

export { Table };
