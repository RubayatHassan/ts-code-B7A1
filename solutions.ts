function filterEvenNumbers(numbers: number[]): number[] {
  return numbers.filter((num) => num % 2 === 0);
}

filterEvenNumbers([1, 2, 3, 4, 5, 6]);

// .................. 1


function reverseString(input: string): string {
  return input.split("").reverse().join("");
}

reverseString("typescript");


// ................... 2


type StringOrNumber = string | number;

function checkType(value: StringOrNumber): string {
  if (typeof value === "string") {
    return "String";
  } else if (typeof value === "number") {
    return "Number";
  }
  return "Unknown";
}

checkType("Hello"); 
checkType(123); 


// ..................... 3


function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user = { id: 1, name: "John Doe", age: 21 };

getProperty(user, "name");

// ..................... 4


interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

function toggleReadStatus(book: Book): Book & { isRead: boolean } {
  return {
    ...book,
    isRead: true,
  };
}


const myBook = {
  title: "TypeScript Guide",
  author: "Jane Doe",
  publishedYear: 2024,
};

toggleReadStatus(myBook);


// .................... 5


class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}

const student = new Student("Alice", 20, "A");

student.getDetails();


// ...................... 6


function getIntersection(arr1: number[], arr2: number[]): number[] {
  return arr1.filter((num) => arr2.includes(num));
}

getIntersection( [1, 2, 3, 4, 5], [3, 4, 5, 6, 7]);


// ...................... 7








