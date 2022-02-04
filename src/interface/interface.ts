// 宣言のマージ
// インターフェースの場合
interface Bread {
  calories: number;
}

interface Bread {
  type: string;
}

const francePan: Bread = {
  calories: 300,
  type: 'herd',
};

// 型エイリアスの場合
type MaboDofu = {
  calories: number;
  spicyLevel: number;
};

type Rice = {
  calories: number;
  gram: number;
};

type MaboDon = MaboDofu & Rice; // 交差型(union)を使う

// MaboDofuとRice両方の型を持つ変数を定義
const maboDon: MaboDon = {
  calories: 3000,
  spicyLevel: 3,
  gram: 500,
};

// インターフェースの継承
interface Book {
  page: number;
  title: string;
}

interface Magazin extends Book {
  cycle: 'daily' | 'weekly' | 'monthly' | 'yearly';
}

const jump: Magazin = {
  page: 300,
  title: '週刊少年ジャンプ',
  cycle: 'weekly',
};

// インターフェースは型エイリアスも拡張できる
type Booktype = {
  page: number;
  title: string;
};

interface Handbook extends Booktype {
  theme: string;
}

const cotrip: Handbook = {
  page: 120,
  title: 'ことりっぷ',
  theme: '春',
};

// インターフェースでクラスに型を定義する
class Comic implements Book {
  page: number;
  title: string;

  constructor(page: number, title: string, private publishYear: string) {
    (this.page = page), (this.title = title);
  }

  getPublishYear() {
    return this.title + 'が発売されたのは' + this.publishYear + '年です。';
  }
}

const popularComic = new Comic(200, '鬼滅の刃', '2021');

console.log(popularComic.getPublishYear());
