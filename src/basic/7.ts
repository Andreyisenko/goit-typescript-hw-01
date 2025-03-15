console.log(77);

type Det = {
  createAt: object;
  updateAt: object;
};

type User = {
  title: string;
  likes: number;
  accounts: string[];
  status: string;
  details?: Det;
};

const page1: User = {
  title: 'The awesome page',
  likes: 100,
  accounts: ['Max', 'Anton', 'Nikita'],
  status: 'open',
  details: {
    createAt: new Date('2021-01-01'),
    updateAt: new Date('2021-05-01'),
  },
};

const page2: User = {
  title: 'Python or Js',
  likes: 5,
  accounts: ['Alex'],
  status: 'close',
};
console.log(page1);
console.log(page2);
