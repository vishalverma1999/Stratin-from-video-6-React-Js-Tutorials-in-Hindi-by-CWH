import ui, {a,b,c} from './module2.mjs'   // ab kyunki a,b,c named export hai isliye name ko same rakhna padega, unlike default export mein c ki jagah kuch bhi rakh sakte hai like ui for example
// We need to use culry braces jab koi cheez ny default export nahi ho rahi hai doosre module se

console.log(ui);
console.log(a);
console.log(b);
console.log(c);