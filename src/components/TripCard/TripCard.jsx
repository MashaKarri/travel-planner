import { useDispatch } from "react-redux";
import { updateTripStatus } from "../../redux/travelSlice";

import {
  Card,
  Image,
  Badge,
  Content,
  Title,
  Category,
  Meta,
  MetaItem,
  StatusSelect,
} from "./TripCard.styled";

const statusLabels = {
  visited: "Visited",
  planned: "Planned",
  wishlist: "Want to visit",
};

export const TripCard = ({ trip }) => {
  const dispatch = useDispatch();

  return (
    <Card>
      {trip.imageUrl && (
        <Image src={trip.imageUrl} alt={`${trip.city}, ${trip.country}`} />
      )}

      <Badge $status={trip.status}>{statusLabels[trip.status]}</Badge>

      <Content>
        <Title>
          {trip.city}, {trip.country}
        </Title>
        <Category>{trip.category}</Category>

        <Meta>
          <MetaItem>💶 ${trip.price}</MetaItem>
          <MetaItem>⏳ {trip.duration} days</MetaItem>
          <MetaItem>⭐ {trip.rating}</MetaItem>
        </Meta>

        <StatusSelect
          value={trip.status}
          onChange={(e) =>
            dispatch(updateTripStatus({ id: trip.id, status: e.target.value }))
          }
        >
          <option value="visited">Visited</option>
          <option value="planned">Planned</option>
          <option value="wishlist">Want to visit</option>
        </StatusSelect>
      </Content>
    </Card>
  );
};
