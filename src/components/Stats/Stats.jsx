import { useSelector } from "react-redux";
import { selectTravelStats } from "../../redux/travelSelectors";

import { StatsGrid, StatCard, StatLabel, StatValue } from "./Stats.styled";

export const Stats = () => {
  const stats = useSelector(selectTravelStats);

  return (
    <StatsGrid>
      <StatCard>
        <StatLabel>Total Directions</StatLabel>
        <StatValue>{stats.total}</StatValue>
      </StatCard>

      <StatCard $color="var(--visited)">
        <StatLabel>Visited</StatLabel>
        <StatValue>{stats.visited}</StatValue>
      </StatCard>

      <StatCard $color="var(--planned)">
        <StatLabel>Planned</StatLabel>
        <StatValue>{stats.planned}</StatValue>
      </StatCard>

      <StatCard $color="var(--wishlist)">
        <StatLabel>Wish List</StatLabel>
        <StatValue>{stats.wishlist}</StatValue>
      </StatCard>

      <StatCard $color="var(--accent)">
        <StatLabel>Planned Budget</StatLabel>
        <StatValue>${stats.plannedBudget}</StatValue>
      </StatCard>

      <StatCard $color="var(--accent)">
        <StatLabel>Planned Days</StatLabel>
        <StatValue>{stats.plannedDays}</StatValue>
      </StatCard>
    </StatsGrid>
  );
};
