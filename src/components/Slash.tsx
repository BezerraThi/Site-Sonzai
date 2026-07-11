/** Motivo gráfico derivado das barras diagonais do "S" da logo. */
export function Slash({ color = "var(--gold)" }: { color?: string }) {
  return (
    <svg
      className="slash"
      width="22"
      height="14"
      viewBox="0 0 22 14"
      fill="none"
      aria-hidden="true"
    >
      <rect x="2" y="0" width="5" height="17" rx="2.5" transform="rotate(32 2 0)" fill={color} />
      <rect x="12" y="0" width="5" height="17" rx="2.5" transform="rotate(32 12 0)" fill={color} opacity="0.45" />
    </svg>
  );
}
