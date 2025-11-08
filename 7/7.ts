function reverse(x: number): number {

    const LIMIt_LOW = - (Math.pow(2, 31));
    const LIMIt_HIGH = (Math.pow(2, 31) - 1);

    const signed = x < 0 ? true : false;
    if (signed) {
        x = -x;
    }

    let reversed = 0;
    while (x) {
        reversed *= 10;
        reversed += (x % 10);
        x = Math.floor(x / 10);
    }

    const ans = signed ? (-reversed) : (reversed);

    if (ans < LIMIt_LOW || ans > LIMIt_HIGH) {
        return 0;
    }
    else {
        return ans;
    }
};
export {};
