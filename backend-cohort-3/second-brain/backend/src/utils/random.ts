export const random = (len: number) => {
    const chars = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz1234567890';
    const charLength = chars.length;
    let str = '';
    for (let i = 0; i < len; i++) {
        const randomNum = Math.floor(Math.random() * charLength);
        str += chars.charAt(randomNum);
    }
    return str;
}