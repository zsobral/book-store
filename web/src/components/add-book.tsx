import {
  Box,
  Button,
  HStack,
  InputRightElement,
  VStack,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import slugify from "slugify";
import { useAddBook } from "../hooks/useAddBook";
import { InputField, NumberInputField, TextareaField } from "./fields";

interface AddBookFormData {
  title: string;
  description: string | null;
  author: string;
  price: number;
  imageUrl: string;
  slug: string;
}

export function AddBook() {
  const [addBook] = useAddBook();
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
    watch,
    setValue,
  } = useForm<AddBookFormData>();

  const title = watch("title");

  const generateSlugFromTitle = () => {
    setValue(
      "slug",
      slugify(title, {
        lower: true,
        remove: /[*+~.()'"!:@,]/g,
      })
    );
  };

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
    await addBook({
      variables: {
        data: {
          imageUrl: data.imageUrl.trim(),
          title: data.title.trim(),
          slug: data.slug.trim(),
          description: data.description?.trim(),
          price: Number(data.price),
          authors: [data.author.trim()],
        },
      },
    });
    // await insert({
    //   variables: {
    //     data: {
    //       ...data,
    //       authors: [author],
    //       slug: slugify(data.title),
    //     },
    //   },
    // });
    // reset();
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
        <Button
          size="sm"
          onClick={generateSlugFromTitle}
          disabled={!Boolean(title)}
        >
          generate slug
        </Button>
        <InputField
          label="Slug"
          id="slug"
          error={errors.slug}
          {...register("slug", { required: "Required" })}
        />
        <InputField
          label="Author"
          id="author"
          error={errors.author}
          {...register("author", { required: "Required" })}
        />
        <InputField
          label="Image URL"
          id="imageUrl"
          error={errors.imageUrl}
          {...register("imageUrl", { required: "Required" })}
        />
        <NumberInputField
          label="Price"
          id="price"
          type="number"
          containerProps={{
            min: 0,
          }}
          error={errors.price}
          {...register("price", { required: "Required" })}
        />
        <TextareaField
          label="Description"
          id="description"
          error={errors.description}
          {...register("description")}
        />
        <HStack justifyContent="flex-end" w="100%">
          <Button type="button" variant="ghost" disabled={isSubmitting}>
            Cancel
          </Button>
          <Button type="submit" colorScheme="green" isLoading={isSubmitting}>
            Add
          </Button>
        </HStack>
      </VStack>
    </form>
  );
}
