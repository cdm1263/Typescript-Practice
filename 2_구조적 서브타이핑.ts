const example2 = () => {
  //타입을 집합으로 나타낼 수 있다.

  interface Fruit {
    name: string;
  }

  interface Apple {
    name: string;
    size: number;
  }

  let fruit: Fruit;
  let apple: Apple = { name: "apple", size: 1 };

  fruit = apple;
  console.log(fruit);
};

const example3 = () => {
  // 매개변수의 경우

  interface Pet {
    name: string;
  }

  let cat = { name: "Cat", age: 1 };

  const greet = (pet: Pet) => {
    console.log("Hello, " + pet.name);
  };

  greet(cat);
};

example2(); // { name: 'apple', size: 1 }
example3(); // Hello, Cat
