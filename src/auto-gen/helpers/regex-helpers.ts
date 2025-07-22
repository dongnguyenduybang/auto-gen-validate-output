import emojiRegex from 'emoji-regex';

// check regex ulid
export function checkRegexULID(value: string): boolean {
    const ulidRegex = /^[0-9A-HJKMNP-TV-Z]{26}$/;
    return typeof value === 'string' && ulidRegex.test(value);
}

// check regex emoji
export function isEmoji(str: string): boolean {
    const cleaned = str.replace(/\s/g, ''); // Xoá tất cả khoảng trắng
    // lib check emoji https://github.com/mathiasbynens/emoji-regex
    const regex = emojiRegex();
    return regex.test(cleaned);
}

// count emoji 
export function countEmojis(str: unknown): number {
    if (typeof str !== 'string') return 0;

    const regex = emojiRegex();
    return Array.from(str.matchAll(regex)).length;
}

// check regex url 
export function checkURL(value: string): boolean {
    const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
    return urlRegex.test(value);
}
