/*eslint-disable */
export default class HolbertonClass {
    constructor (size, location) {
        this._size = size;
        this._location = location;
    }

    [Symbol.toPrimitive](note) {
        if (note === 'number') {
            return this._size;
        }
        else {
            return this._location;
        }
    }

}