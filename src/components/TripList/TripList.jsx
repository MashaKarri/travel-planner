import { useSelector } from "react-redux";
import { selectFilteredTrips } from "../../redux/travelSelectors";
import { TripCard } from "../TripCard/TripCard";

import { List, EmptyMessage } from "./TripList.styled";

export const TripList = () => {
  const trips = useSelector(selectFilteredTrips);

  if (trips.length === 0) {
    return <EmptyMessage>Nothing found</EmptyMessage>;
  }

  return (
    <List>
      {trips.map((trip) => (
        <TripCard key={trip.id} trip={trip} />
      ))}
    </List>
  );
};
