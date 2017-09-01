/**
 * @param {number} capacity
 */
/**
 * Definition for a cache node
 * function CacheNode(key, value) {
 *     this.value = value;
 *     this.key = key;
 *     this.prev = this.next = null;
 * }
 */
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.size = 0;
    this.cache = {};
    this.latest = null;
    this.earliest = null;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    let current = this.cache[key];
    if (!current) return -1;
    if (current === this.latest) return current.value;

    if (this.earliest === current) {
        this.earliest = current.next;
        this.earliest.prev = null;
    }
    current.prev && (current.prev.next = current.next);
    current.next && (current.next.prev = current.prev);
    current.prev = this.latest;
    current.next = null;
    this.latest.next = current;
    this.latest = current;
    return current.value;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    let current = {
        key,
        value,
        prev: null,
        next: null
    };
    if (this.size === 0 || this.capacity === 1) {
        if (this.size === 1) {
            this.cache[this.latest.key] = null;
        } else {
            this.size++;
        }
        this.latest = current;
        this.earliest = current;
        this.cache[key] = current;
        return;
    }
    if (!this.cache[key]) { // insert
        if (this.size === this.capacity) {
            this.cache[this.earliest.key] = null;
            this.earliest = this.earliest.next
        } else {
            this.size++;
        }
        this.cache[key] = current;
        this.latest.next = current;
        current.prev = this.latest;
        this.latest = current;
    } else { // set
        this.cache[key].value = value;
        this.get(key);
    }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = Object.create(LRUCache).createNew(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
