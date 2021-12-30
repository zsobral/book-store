import { Button, VStack } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import slugify from "slugify";
import { InputField, NumberInputField, TextareaField } from "../fields";
import { useInsertBook } from "./useInsertBook";

interface FormData {
  title: string;
  description: string;
  author: string;
  price: number;
}

export function BookForm({ onSuccess }: { onSuccess: () => void }) {
  const [insert] = useInsertBook();

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit = handleSubmit(async ({ author, ...data }) => {
    await insert({
      variables: {
        data: {
          ...data,
          authors: [author],
          slug: slugify(data.title),
        },
      },
    });
    reset();
    onSuccess();
  });

  return (
    <form onSubmit={onSubmit}>
      <VStack spacing="4" alignItems="flex-start">
        <InputField
          label="Title"
          id="title"
          error={errors.title}
          {...register("title", { required: "Required" })}
        />
        <InputField
          label="Author"
          id="author"
          error={errors.author}
          {...register("author", { required: "Required" })}
        />
        <NumberInputField
          label="Price"
          id="price"
          type="number"
          error={errors.price}
          {...register("price", { required: "Required" })}
        />
        <TextareaField
          label="Description"
          id="description"
          error={errors.description}
          {...register("description")}
        />
        <Button type="submit" colorScheme="green" isLoading={isSubmitting}>
          Save
        </Button>
      </VStack>
    </form>
  );
}
