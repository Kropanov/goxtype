export function scrollPageUp() {
    window.scrollTo(0, 0);
}

export function toDefaultDate(date: string): string {
    const newDate = new Date(date);
    return newDate.toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' });
}
