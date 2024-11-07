# The significance of union and intersection types in TypeScript

TypeScript is a superset of JavaScript that includes type checking before runtime to minimize unnecessary errors. There are a greater number of types that can be used in TypeScript. However, union and intersection allow us to use multiple types with the same variable, function, and so on. Below are the explanations of the uses of union and intersection:

## Union Types

**Union** is used to assign multiple types to a single variable or function that can take only one type among all of them. If the programmer gets confused about multiple types, union is useful in that case. Below is an example of the uses of union:

```typescript
const variable: string | number;
In that example, the programmer knows that the type of the variable could be either string or number, but does not know exactly which one. So, union is used to make the type for that variable flexible where the variable can take any of the types.

Intersection Types
Intersection: On the other hand, intersection is used to combine multiple types within one variable or function. If the programmer feels that the variable or function has to take more than one type, intersection is the solution in that case. Below is an example of intersection:

typescript
type Karim = Person & Teacher;
In that case, the type of the Karim variable will be a combination of both types Person and Teacher. If a programmer feels that the variable or function should take multiple types, intersection is the solution to this problem.