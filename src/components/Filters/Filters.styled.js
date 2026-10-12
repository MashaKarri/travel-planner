import styled from "styled-components";

export const FiltersWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  padding: 18px;
  margin-bottom: 28px;
  background: var(--card);
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(2, 43, 58, 0.08);
`;

export const SearchInput = styled.input`
  flex: 1 1 240px;
  padding: 10px 14px;
  border: 2px solid var(--border);
  border-radius: 12px;
  color: var(--text);
  background: #fffdf8;
  outline: none;
  transition: border-color 0.2s;

  &:focus {
    border-color: var(--primary);
  }
`;

export const FilterSelect = styled.select`
  flex: 0 1 170px;
  padding: 10px 12px;
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

export const ResetButton = styled.button`
  padding: 10px 18px;
  border: none;
  border-radius: 12px;
  color: #fff;
  background: var(--accent);
  cursor: pointer;
  transition:
    transform 0.2s,
    background 0.2s;

  &:hover {
    background: #f06a38;
    transform: translateY(-2px);
  }
`;
