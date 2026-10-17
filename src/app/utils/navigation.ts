export function isNavLinkActive(to: string, pathname: string, hash: string): boolean {
  const [path, anchor] = to.split('#');
  if (anchor) return pathname === path && hash === `#${anchor}`;
  if (path === '/gallery' && hash === '#events') return false;
  return pathname === path;
}