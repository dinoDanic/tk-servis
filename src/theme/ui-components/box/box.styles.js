import styled from "styled-components";

const defaultStyle = (theme) => `
    background: white;
    border-radius: ${theme.spacing.border.md};
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    padding: ${theme.spacing.padding.md};
    position: relative;  
`;

const lg = (theme) => `
    padding: ${theme.spacing.padding.xl};
    width: 80%;
    max-width: 1100px;
  
  
`;

const sm = (theme) => `
    padding: ${theme.spacing.padding.sm};
`;

const sizes = {
  lg,
  sm,
};

export const Container = styled.div`
  ${({ theme }) => defaultStyle(theme)};
  ${({ theme, size }) => size && sizes[size](theme)};
  @media (max-width: 700px) {
    width: 98%;
    height: 100%;
  }
`;
