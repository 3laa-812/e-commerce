import { SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { APP_NAME } from "@/lib/constants";
const categories = ["men", "women", "kids", "accessories"];
const Search = () => {
  return (
    <form action="/search" method="get" className="flex items-stretch h-10">
      <Select name="category">
        <SelectTrigger className="w-30 rounded-md border rounded-e-none ">
          <SelectValue placeholder="Category" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All</SelectItem>
          {categories.map((category) => (
            <SelectItem key={category} value={category}>
              {category}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Input
        className="flex-1 rounded-none dark:border-gray-200 bg-gray-100 text-black text-base "
        placeholder={`Search Site ${APP_NAME}`}
        name="q"
        type="search"
      />
      <button
        type="submit"
        className="bg-primary text-primary-foreground rounded-s-none rounded-e-md px-3 h-9"
      >
        <SearchIcon className="h-5 w-5" />
      </button>
    </form>
  );
};

export default Search;
