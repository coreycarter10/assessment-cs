Insert time | Append time | Array passed in
33.3 μs     | 79.9 μs     | tinyArray
42.2 μs     | 82.5 μs     | smallArray
155.6 μs    | 113.8 μs    | mediumArray
7.9072 ms   | 436.6 μs    | largeArray
930.3632 ms | 2.5585 ms   | extraLargeArray

Push is more efficient (being used in the append function) because as the array gets larger the time for the function to complete stays closer together. The larger and larger the array becomes unshift gets worse as far as scalability goes. The bigger the array the bigger the time cap becomes.

Push is more efficient because it just adds the new element to the end of the array but unshift has to increment the index of all of the elements previously in the array to be able to 'unshift' the new item to the front of the array.