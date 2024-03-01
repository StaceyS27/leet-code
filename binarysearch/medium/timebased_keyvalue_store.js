class TimeMap {
    constructor() {
        // Initialize an empty map to store key-value pairs with timestamps
        this.map = {};
    }

    set(key, value, timestamp) {
        // Get the existing bucket for the key or create a new one
        const bucket = this.map[key] || [];

        // Update the map with the current bucket
        this.map[key] = bucket;

        // Add a new entry to the bucket with the provided value and timestamp
        bucket.push([value, timestamp]);
    }

    get(key, timestamp, value = '', bucket = this.map[key] || []) {
        // Initialize left and right pointers for binary search
        let left = 0;
        let right = bucket.length - 1;

        // Perform binary search on the bucket
        while (left <= right) {
            // Calculate the midpoint
            const mid = Math.floor((left + right) / 2);

            // Get the value and timestamp at the midpoint
            const [guessValue, guessTimestamp] = bucket[mid];

            // Check if the guess timestamp is less than or equal to the target timestamp
            const isTargetGreater = guessTimestamp <= timestamp;
            if (isTargetGreater) {
                // Update the result value and move the left pointer to the right
                value = guessValue;
                left = mid + 1;
            }

            // Check if the guess timestamp is greater than the target timestamp
            const isTargetLess = timestamp < guessTimestamp;
            if (isTargetLess) {
                // Move the right pointer to the left
                right = mid - 1;
            }
        }

        // Return the result value
        return value;
    }
}


