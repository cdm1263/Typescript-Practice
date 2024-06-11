const example1 = () => {
  // 타입의 이름이 달라도 형식이 같으면 같은 타입이다.

  interface Food {
    name: string;
  }

  interface Drink {
    name: string;
  }

  let food: Food = { name: "pizza" };
  let drink: Drink = { name: "water" };

  food = drink; //두 변수의 타입 명이 다르지만 할당 가능
  console.log(food);
};

example1(); //{ name: "water" }
