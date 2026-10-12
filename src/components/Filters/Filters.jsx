import { useDispatch, useSelector } from "react-redux";
import {
  setSearch,
  setCategory,
  setStatus,
  setSortPrice,
  setSortRating,
  clearFilters,
} from "../../redux/travelSlice";
import { selectFilters, selectCategories } from "../../redux/travelSelectors";

import {
  FiltersWrapper,
  SearchInput,
  FilterSelect,
  ResetButton,
} from "./Filters.styled";

export const Filters = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);
  const categories = useSelector(selectCategories);

  return (
    <FiltersWrapper>
      <SearchInput
        type="text"
        placeholder="Search by city or country"
        value={filters.search}
        onChange={(e) => dispatch(setSearch(e.target.value))}
      />

      <FilterSelect
        value={filters.category}
        onChange={(e) => dispatch(setCategory(e.target.value))}
      >
        <option value="all">All categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </FilterSelect>

      <FilterSelect
        value={filters.status}
        onChange={(e) => dispatch(setStatus(e.target.value))}
      >
        <option value="all">All statuses</option>
        <option value="visited">Visited</option>
        <option value="planned">Planned</option>
        <option value="wishlist">Want to visit</option>
      </FilterSelect>

      <FilterSelect
        value={filters.sortPrice}
        onChange={(e) => dispatch(setSortPrice(e.target.value))}
      >
        <option value="default">Price: default</option>
        <option value="priceAsc">Price: low to high</option>
        <option value="priceDesc">Price: high to low</option>
      </FilterSelect>

      <FilterSelect
        value={filters.sortRating}
        onChange={(e) => dispatch(setSortRating(e.target.value))}
      >
        <option value="default">Rating: default</option>
        <option value="ratingAsc">Rating: low to high</option>
        <option value="ratingDesc">Rating: high to low</option>
      </FilterSelect>

      <ResetButton type="button" onClick={() => dispatch(clearFilters())}>
        Reset filters
      </ResetButton>
    </FiltersWrapper>
  );
};
