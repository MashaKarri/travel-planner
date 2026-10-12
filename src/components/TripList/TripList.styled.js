import styled from "styled-components";

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 26px;
`;

export const EmptyMessage = styled.p`
  padding: 40px 0;
  text-align: center;
  font-family: "Autour One", system-ui;
  font-size: 22px;
  color: var(--muted);
`;
