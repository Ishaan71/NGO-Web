"use client";

import { Search } from "lucide-react";
import { useState } from "react";

const PublicationFilters = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  return (
    <section className="bg-white px-6 py-8 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="relative w-full md:max-w-md">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted"
          />

          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search publications..."
            className="w-full rounded-lg border border-border bg-white py-2.5 pl-10 pr-4 text-sm text-text outline-none placeholder:text-text-muted focus:border-primary focus:ring-2 focus:ring-primary-light"
          />
        </div>

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="rounded-lg border border-border bg-white px-4 py-2.5 text-sm text-text outline-none focus:border-primary focus:ring-2 focus:ring-primary-light"
        >
          <option>All</option>
          <option>Reports</option>
          <option>Research</option>
          <option>Guides</option>
          <option>Publications</option>
        </select>
      </div>
    </section>
  );
};

export default PublicationFilters;