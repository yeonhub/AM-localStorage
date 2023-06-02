export function get(target) {
    const ele = document.querySelector(target);
    if (ele) {
        return ele;
    } else {
        throw Error('선택한 요소가 존재하지 않습니다.');
    }
}
export function getAll(target) {
    const ele = document.querySelectorAll(target);
    if (ele) {
        return ele;
    } else {
        throw Error('선택한 요소가 존재하지 않습니다.');
    }
}