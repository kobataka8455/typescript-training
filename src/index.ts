// import World from './world';

// const root = document.getElementById('root');
// const world = new World('Hello Hack!');
// world.sayHello(root);

// 基本の型定義
// import { primitiveSample, notExitstSample, anySample, unknownSample } from './basic';
// unknownSample();
// anySample();
// notExitstSample();
// primitiveSample();

// 関数の型定義
// import { logMessage } from './function/basic';
// import { isUserSignedIn, isUserSignedIn2, sumProductsPrice } from './function/parameters';
// logMessage('hogehoge');

// isUserSignedIn('ABC', 'piyopiyo');
// isUserSignedIn('hogehoge');

// isUserSignedIn2('ABC');
// isUserSignedIn2('hogehoge');
// const sum = sumProductsPrice(1000, 200, 300, 400, 600);
// console.log('Function parameters sample 5: Total price:', sum);

// オブジェクトの関数
// import objectSample from './object/object';
// import typeAliasSample from './object/alias';
// objectSample();
// typeAliasSample();

// // 配列
// import arraySample from './array/array';
// import tupleSample from './array/tuple';
// arraySample();
// tupleSample();

// ジェネリック型
// import genericsBasicSample from './generics/basic';
// import genericsAdvancedSample from './generics/advanced';
// genericsBasicSample();
// genericsAdvancedSample();

// 非同期処理
// import callbackSample from "./async/callback";
// import promiseSample from "./async/promise";
import asyncAwaitSample from './async/asyncAwait';
// callbackSample();
// promiseSample();
void asyncAwaitSample();
