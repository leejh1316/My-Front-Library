export function throttle(callback, delay) {
    var wait = false;
    return function () {
        if (wait)
            return;
        callback();
        wait = true;
        setTimeout(function () {
            wait = false;
        }, delay);
    };
}
