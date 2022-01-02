import { Box, Flex, StackDivider, Text, VStack } from "@chakra-ui/react";
import { useBooks } from "../hooks/useBooks";
import { BooksQuery_books } from "../__generated__/BooksQuery";
import { Card } from "./card";

function Books() {
  const { data, loading, error } = useBooks();

  if (loading) {
    return null;
  }

  return (
    <Card>
      <VStack spacing="4" divider={<StackDivider borderColor="gray.200" />}>
        {data?.books
          .filter((book): book is BooksQuery_books => book !== null)
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
                <Text fontSize="lg" fontWeight="medium">
                  {book.title}
                </Text>
                <Text>by {book.authors.join()}</Text>
                <Text my="2" fontSize="sm">
                  {book.description}
                </Text>
                <Text fontWeight="medium">{`$ ${
                  book.price?.toFixed(2) ?? 0
                }`}</Text>
              </Box>
            </Flex>
          ))}
      </VStack>
    </Card>
  );
}

export { Books };
