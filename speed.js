function demeritpoints(speed) {
    if (speed <70) return 'OK';
    const points = Math.floor((speed - 70) / 5);
    if (points >= 12) return 'License suspended';

}
 