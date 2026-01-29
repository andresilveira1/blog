import { cn } from "@/lib/utils";
import { CircleX, SearchIcon } from "lucide-react";
import { useRouter } from "next/router";
import { useCallback } from "react";

export const Search = () => {
  const router = useRouter();
  const query = (router.query.q as string) ?? "";

  const handleSearch = useCallback(
    (event: React.FormEvent) => {
      event.preventDefault();

      if (query.trim()) {
        router.push(`/blog?q=${encodeURIComponent(query)}}`);
      }
    },
    [query, router],
  );

  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = event.target.value;

    router.push(`/blog?q=${encodeURIComponent(newQuery)}`, undefined, {
      shallow: true,
      scroll: false,
    });
  };

  const clearInputSearch = () => {
    router.push("/blog", undefined, {
      shallow: true,
      scroll: false,
    });
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex items-center border px-4 py-3 rounded-md w-[358px] md:w-60 group border-gray-400 transition-all duration-200 focus-within:border-blue-300 focus-within:ring-1 focus-within:ring-blue-300"
    >
      <label htmlFor="search">
        <SearchIcon
          className={cn(
            "mr-3 transition-colors duration-200 group-focus-within:text-blue-200",
            query ? "text-blue-200" : "text-gray-300",
          )}
          size={16}
        />
      </label>

      <input
        type="text"
        id="search"
        value={query}
        onChange={handleQueryChange}
        placeholder="Buscar"
        className="bg-transparent outline-none w-fit text-gray-100 placeholder:text-gray-300 text-body-sm"
      />

      {query && (
        <CircleX
          className="text-gray-300"
          size={16}
          onClick={clearInputSearch}
        />
      )}
    </form>
  );
};
