const a = "Harry";
const b = "Rohan";
const c = "Aakash";
const d = "Priyanka"


// export default c;   // humne by default aakash ko export kiya tha
export default d;     // priyanka will be exported and printed in mofule1.mjs....remember in module1 we didn't import with the same name as it is in module2....aisa isliye kyunki we are exporting by default, wahi agr named default se karte to hume same name use karna padta during import time also

// ab maanlo a,c,d ko bhi export kiya but NOT default 
export {a};
export {b};
export {c};