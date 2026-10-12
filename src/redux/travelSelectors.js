import { createSelector } from "reselect";

export const selectTrips = (state) => state.travel.items;

export const selectFilters = (state) => state.travel.filters;

export const selectSearch = (state) => state.travel.filters.search;

export const selectCategory = (state) => state.travel.filters.category;

export const selectStatus = (state) => state.travel.filters.status;

export const selectSortPrice = (state) => state.travel.filters.sortPrice;

export const selectSortRating = (state) => state.travel.filters.sortRating;

export const selectTravelStats = createSelector([selectTrips], (trips) => {
  const visited = trips.filter((trip) => trip.status === "visited");
  const planned = trips.filter((trip) => trip.status === "planned");
  const wishlist = trips.filter((trip) => trip.status === "wishlist");

  return {
    total: trips.length,
    visited: visited.length,
    planned: planned.length,
    wishlist: wishlist.length,
    plannedBudget: planned.reduce((sum, trip) => sum + trip.price, 0),
    plannedDays: planned.reduce((sum, trip) => sum + trip.duration, 0),
  };
});

export const selectFilteredTrips = createSelector(
  [
    selectTrips,
    selectSearch,
    selectCategory,
    selectStatus,
    selectSortPrice,
    selectSortRating,
  ],
  (trips, search, category, status, sortPrice, sortRating) => {
    const normalized = search.trim().toLowerCase();

    const filtered = trips.filter((trip) => {
      const matchSearch =
        normalized === "" ||
        trip.city.toLowerCase().includes(normalized) ||
        trip.country.toLowerCase().includes(normalized);

      const matchCategory = category === "all" || trip.category === category;

      const matchStatus = status === "all" || trip.status === status;

      return matchSearch && matchCategory && matchStatus;
    });

    const sorted = [...filtered];

    sorted.sort((a, b) => {
      if (sortPrice !== "default") {
        const diff =
          sortPrice === "priceAsc" ? a.price - b.price : b.price - a.price;
        if (diff !== 0) return diff;
      }

      if (sortRating !== "default") {
        return sortRating === "ratingAsc"
          ? a.rating - b.rating
          : b.rating - a.rating;
      }

      return 0;
    });

    return sorted;
  },
);

export const selectCategories = createSelector([selectTrips], (trips) => [
  ...new Set(trips.map((trip) => trip.category)),
]);
