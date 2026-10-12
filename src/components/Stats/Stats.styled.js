import styled from "styled-components";

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 14px;
  margin-bottom: 28px;
`;

export const StatCard = styled.div`
  background: var(--card);
  border-radius: 16px;
  padding: 16px;
  text-align: center;
  border-bottom: 4px solid ${(props) => props.$color || "var(--primary)"};
  box-shadow: 0 4px 12px rgba(2, 43, 58, 0.08);
`;

export const StatLabel = styled.p`
  font-size: 14px;
  color: var(--muted);
  margin-bottom: 6px;
`;

export const StatValue = styled.p`
  font-family: "Autour One", system-ui;
  font-size: 24px;
  color: var(--primary-dark);
`;
