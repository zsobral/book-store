import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useAtom } from "jotai";
import { useForm } from "react-hook-form";
import { searchAtom } from "../atoms/search";

interface FormData {
  search: string;
}

function Search() {
  const [search, setSearch] = useAtom(searchAtom);
  const { register, handleSubmit } = useForm<FormData>({
    defaultValues: { search },
  });

  const onSubmit = handleSubmit((data) => {
    setSearch(data.search);
  });

  return (
    <form onSubmit={onSubmit}>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <SearchIcon color="gray.300" />
        </InputLeftElement>
        <Input variant="filled" {...register("search")} />;
      </InputGroup>
    </form>
  );
}

export { Search };
