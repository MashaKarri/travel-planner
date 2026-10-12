import styled from "styled-components";

const statusColors = {
  visited: "var(--visited)",
  planned: "var(--planned)",
  wishlist: "var(--wishlist)",
};

export const Card = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: var(--card);
  border-radius: 20px;
  box-shadow: 0 6px 18px rgba(2, 43, 58, 0.1);
  transition:
    transform 0.25s,
    box-shadow 0.25s;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 28px rgba(2, 43, 58, 0.18);
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 230px;
  object-fit: cover;
  display: block;
`;

export const Badge = styled.span`
  position: absolute;
  top: 12px;
  left: 12px;
  padding: 4px 12px;
  border-radius: 999px;
  font-size: 13px;
  color: #fff;
  background: ${(props) => statusColors[props.$status] || "var(--primary)"};
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 16px;
  flex-grow: 1;
`;

export const Title = styled.h3`
  font-size: 18px;
  line-height: 1.3;
`;

export const Category = styled.p`
  font-size: 14px;
  color: var(--primary);
`;

export const Meta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const MetaItem = styled.span`
  padding: 4px 10px;
  border-radius: 10px;
  font-size: 14px;
  background: #eef6f8;
  color: var(--primary-dark);
`;

export const StatusSelect = styled.select`
  margin-top: auto;
  padding: 8px 10px;
  border: 2px solid var(--border);
  border-radius: 12px;
  color: var(--text);
  background: #fffdf8;
  cursor: pointer;
  outline: none;
  transition: border-color 0.2s;

  &:focus,
  &:hover {
    border-color: var(--primary);
  }
`;
