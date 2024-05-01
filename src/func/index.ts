export function scrollPageUp() {
    window.scrollTo(0, 0);
}

export function toDefaultDate(date: string): string {
    const newDate = new Date(date);
    return newDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

export const parseToken = (token: string) => {
    const base64Payload = token.split('.')[1].replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
        window
            .atob(base64Payload)
            .split('')
            .map((c) => {
                return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
            })
            .join(''),
    );
    return JSON.parse(jsonPayload);
};

export const tokenExpired = (token: string) => {
    try {
        const payload = parseToken(token);

        const currentTime = Date.now();
        const expireTime = payload.exp * 1000;

        return currentTime >= expireTime - 10 * 1000; // 10 second back
    } catch (e) {
        return true;
    }
};
