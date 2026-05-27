import * as Icons from 'lucide-react';

export default function MaterialIcon({ name, className = 'h-5 w-5' }) {
  const LucideIcon = Icons[name];
  if (!LucideIcon) return <Icons.HelpCircle className={className} />;
  return <LucideIcon className={className} />;
}