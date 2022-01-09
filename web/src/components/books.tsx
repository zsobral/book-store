import {
  Box,
  Flex,
  Heading,
  StackDivider,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useAtomValue } from "jotai/utils";
import { searchAtom } from "../atoms/search";
import { useBooks } from "../hooks/useBooks";
import { SearchBooks_searchBooks } from "../__generated__/SearchBooks";
import { Card } from "./card";

function Books() {
  const search = useAtomValue(searchAtom);
  const { data, loading } = useBooks({ search });

  if (loading) {
    return null;
  }

  return (
    <Card>
      <VStack spacing="4" divider={<StackDivider borderColor="gray.200" />}>
        {data?.searchBooks
          ?.filter((book): book is SearchBooks_searchBooks => book !== null)
          .map((book) => (
            <Flex key={book._id}>
              <Box width="200px" flexShrink="0">
                <img
                  src={book.imageUrl}
                  alt={book.title}
                  style={{
                    objectFit: "contain",
                    width: "100%",
                    height: "100%",
                  }}
                />
              </Box>
              <Box ml="8">
                <Heading as="h1" fontSize="lg" fontWeight="medium">
                  {book.title}
                </Heading>
                <Text as="div">by {book.authors.join()}</Text>
                <Text my="2" fontSize="sm">
                  {book.description}
                </Text>
                <Text as="div" fontWeight="medium">
                  $ {book.price.toFixed(2)}
                </Text>
              </Box>
            </Flex>
          ))}
      </VStack>
    </Card>
  );
}

export { Books };
