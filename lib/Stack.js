/**
 * Class => Stack
 * -----------------------------
 * Creates a stack data structure.
 *
 * A stack is a data structure that allows adding and removing elements in a particular order
 * Everytime an item is added, it goes to the top of the 'stack' Everytime an item is removed,
 * the item on the top of the stack is removed.  A stack is a LIFO (last in first out) structure.
 *
 * @private {object} _storage              Default value should be an empty object.
 * @private {number} _size                 Default value should be set 0.
 */

 class Stack {
     constructor(storage, size) {
         this._storage = {};
         this._size = 0;

        //  console.log('storage: ', this._storage);
        //  console.log('size: ', this._size);
     }

     size() {
         return this._size;
     };
     push(item) {
         this._storage[this._size] = item;
         this._size++;

        //  console.log('item: ', item);
         console.log('add to storage: ', this._storage);
     };
     pop() {
        if (this._size === 0) {
            return null;
        } 
        else {
            delete this._storage[this._size];
            this._size --; // reducing the storage as you remove key values
            console.log('removing items: ', this._size);
            return this._storage[this._size]; //returns the next one in the q
        }
        

     };

 }




  /**
   * Stack Class Method => size()
   * -----------------------------
   * Returns the size of the stack.
   *
   * @name size
   * @return {Number}
   */

  /**
   * Stack Class Method => push(item)
   * -----------------------------
   * Puts an item on top of the stack structure.
   *
   * @name push
   * @param item
   */

  /**
   * Stack Class Method => pop()
   * -----------------------------
   * Takes an item off the top of the stack and returns the item.
   *
   * @name pop
   * @return {Object}   Note that everything in javascript is an Object.
   */


module.exports = Stack;