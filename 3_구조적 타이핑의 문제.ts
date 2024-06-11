interface Cube {
  width: number;
  height: number;
  depth: number;
}

const example4 = () => {
  //예기치 못한 결과 발생
  // cube[axis]가 반드시 number일거라는 예측이 불가능함
  // 구조적 타이핑의 특징으로 인해 namedCube의 name이라는 string값을 에러없이 받을 수 있게 되어버림

  const namedCube = {
    width: 5,
    height: 4,
    depth: 3,
    name: "The Cube",
  };

  const addlines = (cube: Cube) => {
    let total = 0;

    for (const axis of Object.keys(cube)) {
      const length = cube[axis];
      // 'string' 형식의 식을 'Cube' 인덱스 형식에 사용할 수 없으므로 요소에 암시적으로 'any' 형식이 있습니다.
      //  'Cube' 형식에서 'string' 형식의 매개 변수가 포함된 인덱스 시그니처를 찾을 수 없습니다.
      total += axis;
    }
  };

  addlines(namedCube); //ok
};

example4();
