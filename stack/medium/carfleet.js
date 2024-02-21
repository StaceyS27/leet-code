// given n cars going to the same direction along a one lane road, return the numbers of fleets that will arrive at a destination
// a car fleet is a set of cars driving at the same position and same speed/ when they catch up to each other 


function carFleet(target, position, speed) {
    const n = position.length;

    if (n === 0) {                                                  // if there are no cars, no fleets will be formed 
        return 0
    }

    const cars = [];                                                // will be used to combine information about card and their position and the time of arrival
                                                                    // based on current position, target, and speed 
    for (let i = 0; i < n; i++) {                                   // obj for each car pushed to the cars array containing current position and time of arrival to destination
        cars.push({
            position: position[i],
            time: (target - position[i]) / speed[i],
        })
    }

    cars.sort(function(a, b) {                                  // new cars array with obj elements sorted based on positions key in obj 
        return a.position = b.position                          // compare one objs position key to the other and sort in ascending order 
    });

    let fleets = 0;
    let timeToReachDestination = 0;

    for(let i=n-1; i>=0; i--) {                                 // cars array with objs as elements iterated starting from back (position closest to destination)
        const position = cars[i].position;                      // value at these keys accessed and stored in variable 
        const time = cars[i].time;

        if(time > timeToReachDestination) {                     // the idea is that if cars in positions furher away from the destination have lower times, meaning they would reach the destination faster,
            fleets++;                                           // then they will catch up to the car before it and reduce its speed to it, forming a car fleet. will happen since cannot skip another car, just go the same speed and position
            timeToReachDestination = time;                      // however, if next car in the obj has a slower time of arrival (time > timetoreachdestination currently stored), then it won't catch up and will form its own fleet
        }
    }

    return fleets; 

}

// time complexity
    // O(nlogn) - cars array is sorted
    // for loop iterates through cars array but not dominant contributor to time complexity since its O(n)
// space complexity
    // O(n) - the size of the cars array created directly dependent on n, the number of cars/elements present in speed and position array





