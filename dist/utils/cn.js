// src/utils/cn.ts
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
/**
 * Combines clsx and tailwind-merge to conditionally join classNames together
 * and intelligently merge Tailwind CSS classes
 */
export function cn(...inputs) {
    return twMerge(clsx(inputs));
}
