fi = (function() {
 return {
   libraryMethod: function() {
     return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
   },

   each: function(collection, cb) {
     if (Array.isArray(collection)) {
       for (let element of collection) {
         cb(element);
       }
     } else {
         for (let key in collection) {
           cb(collection[key])
         }
       }
     return collection;
   },

   map: function(collection, cb) {
     let newArr = [];
     if (Array.isArray(collection)) {
       for (let element of collection) {
         newArr.push(cb(element));
       }
     } else {
       for (let key in collection) {
         newArr.push(cb(collection[key]));
       }
     }
     return newArr;
   },

   reduce: function(arr, cb, initialValue) {
     let total = initialValue;
     for (let element of arr) {
       total = cb(total, element);
     }
     return total;
   },

   find: function(collection, cb) {
     for (let element of collection) {
       if (cb(element)) {
         return true;
         { break; }
       }
     }
     return false;
   },

   filter: function(collection, cb) {
   let result = [];
   for (let element of collection) {
     if (cb(element)) {
       result.push(element)
     }
   }
   return result;
 },

 size: function (collection) {
   let counter = 0;
   for(let element in collection){
     counter +=1
   }
   return counter;
 },

 first: function(array, n) {
   if (n != undefined) {
     return array.slice(0,n);
   } else {
     return array[0];
   }
 },

 last: function(array, n) {
   if (n != undefined) {
     return array.slice(-n);
   } else {
     return array[array.length-1];
   }
 },

 compact: function(array) {
   result = [];
   for(let element of array) {
     if (element) {
       result.push(element);
     }
   }
   return result;
 },

 sortBy: function(array, cb) {
   result = [...array];
   for(let element of array) {

     return result.sort(function(a,b){return (cb(a)-cb(b))});
   }
 },

 flatten: function(collection, shallow) {
   let newArr = [];
   if (shallow !== undefined) {
     for(let i of collection) {
       if (Array.isArray(i)) {
         for (let j of i) {
           newArr.push(j);
         }
       } else {
         newArr.push(i);
       }
     }
   } else {
     for(let i of collection) {
       if (Array.isArray(i)) {
          newArr.push(...this.flatten(i))
       } else {
         newArr.push(i);
       }
     }
   }
   return newArr;
 },

 uniq: function(array, sorted, cb) {
   let newArr = [];
   if (sorted === true) {
     for(let element of array) {
       if (element !== newArr.slice(-1)) {
         newArr.push(element);
       }
     }
   } else {
     if (cb !== undefined) {
       let uniqueResults = [];
       for(let element of array) {
         if (!uniqueResults.includes(cb(element)) && !newArr.includes(element)) {
           newArr.push(element);
           uniqueResults.push(cb(element));
         }
       }
     } else {
       for(let element of array) {
         if (!newArr.includes(element)) {
           newArr.push(element);
         }
       }
     }
   }
   return newArr;
 },

 keys: function(obj) {
   let result = [];
   for(key in obj){
     result.push(key);
   }
   return result;
 },

 values: function(obj) {
   let result = [];
   for(key in obj){
     result.push(obj[key]);
   }
   return result;
 },

 functions: function(obj) {
   let result = [];
   const allObjects = Object.getOwnPropertyNames(obj);

   for(let key in obj) {
     if (typeof obj[key] === 'function') {
       result.push(key);
     }
   }
   return result;

 }


 }

})();
