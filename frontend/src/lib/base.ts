import { css } from "lit";

// Shared tokens for the panel and the screen. Phase 1 brings the full Vidro material; this is the neutral base.
export const base = css`
  :host {
    --p3-bg: #0f1113;
    --p3-pane: rgba(255, 255, 255, 0.06);
    --p3-pane-strong: rgba(255, 255, 255, 0.1);
    --p3-rim: rgba(255, 255, 255, 0.12);
    --p3-text: #eef1f4;
    --p3-muted: rgba(238, 241, 244, 0.6);
    --p3-accent: #ffb547;
    --p3-ok: #5ad19a;
    --p3-bad: #ff6b6b;
    --p3-radius: 1.4rem;
    font-family: "Geist", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
    color: var(--p3-text);
    -webkit-font-smoothing: antialiased;
  }
  button {
    font: inherit;
    color: inherit;
    border: 1px solid var(--p3-rim);
    background: var(--p3-pane-strong);
    border-radius: 999px;
    padding: 0.55rem 1.1rem;
    cursor: pointer;
  }
  button.primary {
    background: var(--p3-accent);
    border-color: transparent;
    color: #1a1204;
    font-weight: 600;
  }
  button.danger {
    color: var(--p3-bad);
  }
  button:disabled {
    opacity: 0.5;
    cursor: default;
  }
  input,
  select {
    font: inherit;
    color: inherit;
    background: rgba(0, 0, 0, 0.25);
    border: 1px solid var(--p3-rim);
    border-radius: 0.8rem;
    padding: 0.55rem 0.8rem;
    min-width: 0;
  }
  .pane {
    background: var(--p3-pane);
    border: 1px solid var(--p3-rim);
    border-radius: var(--p3-radius);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
  }
  .muted {
    color: var(--p3-muted);
  }
`;
