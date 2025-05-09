import { css } from "lit";

export default css`
  button {
    padding: 0.5rem 1rem;
    font-size: 1rem;
    border: none;
    cursor: pointer;
    border-radius: 4px;
  }
  .primary {
    background: var(--color-primary);
    color: white;
  }
  .secondary {
    background: var(--color-secondary);
    color: white;
  }
`;
