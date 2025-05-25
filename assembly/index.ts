export function get3DText(): usize {
  return changetype<usize>(String.UTF8.encode("Samasemo", true));
}
