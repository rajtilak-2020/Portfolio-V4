import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string) {
  const istOffset = 5.5 * 60 * 60 * 1000; // IST UTC+5:30
  const now = new Date();
  const postDate = new Date(date);
  now.setTime(now.getTime() + istOffset);
  postDate.setTime(postDate.getTime() + istOffset);

  if (postDate > now) {
    return 'scheduled';
  }

  const diff = now.getTime() - postDate.getTime();
  const minutes = Math.floor(diff / (1000 * 60));
  const hours = Math.floor(diff / (1000 * 60 * 60));

  if (minutes < 1) return 'just now';
  if (minutes < 60) return `${minutes} minute${minutes === 1 ? '' : 's'} ago`;
  if (hours < 24) return `${hours} hour${hours === 1 ? '' : 's'} ago`;

  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const yearDiff = now.getFullYear() - postDate.getFullYear();
  const monthDiff = now.getMonth() - postDate.getMonth();
  const dayDiff = now.getDate() - postDate.getDate();

  let totalMonths = yearDiff * 12 + monthDiff;
  let adjustedDayDiff = dayDiff;

  if (dayDiff < 0) {
    totalMonths--;
    const prevMonthDays = getDaysInMonth(
      postDate.getMonth() === 0 ? postDate.getFullYear() - 1 : postDate.getFullYear(),
      postDate.getMonth() === 0 ? 11 : postDate.getMonth() - 1
    );
    adjustedDayDiff += prevMonthDays;
  }

  if (totalMonths === 0) {
    if (adjustedDayDiff === 0) return 'today';
    if (adjustedDayDiff === 1) return 'yesterday';
    return `${adjustedDayDiff} day${adjustedDayDiff === 1 ? '' : 's'} ago`;
  }

  if (totalMonths < 12) {
    return `${totalMonths} month${totalMonths === 1 ? '' : 's'} ago`;
  }

  const years = Math.floor(totalMonths / 12);
  const remainingMonths = totalMonths % 12;

  if (remainingMonths > 0) {
    return `${years} year${years === 1 ? '' : 's'}, ${remainingMonths} month${remainingMonths === 1 ? '' : 's'} ago`;
  }
  
  return `${years} year${years === 1 ? '' : 's'} ago`;
}

export function formatFullDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}