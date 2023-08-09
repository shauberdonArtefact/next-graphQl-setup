"use client";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { FC, FormEvent, useState } from "react";

const Search: FC = () => {
  const [searchValue, setSearchValue] = useState<string>("");

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams()!;

  const handleSubmitSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams.toString());
    params.set("q", searchValue);

    router.push(pathname + "/results?" + params.toString());
  };

  return (
    <div style={{ marginBottom: "16px" }}>
      <form onSubmit={(e) => handleSubmitSearch(e)}>
        <input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearchValue(e.target.value)
          }
          required
        />

        <button type="submit">Rechercher</button>
      </form>
    </div>
  );
};

export default Search;
