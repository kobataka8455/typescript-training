export default function typeAliasSample() {
  // 型エイリアス
  type Country = {
    capital: string;
    language: string;
    name: string;
  };
  const japan: Country = {
    capital: 'Tokyo',
    language: 'Japanese',
    name: 'Japan',
  };
  console.log('Object Alias Sapmle 1:', japan);

  const america: Country = {
    capital: 'ワシントン',
    language: 'English',
    name: 'United States of America',
  };
  console.log('Object Alias Sapmle 2:', america);

  // 合併型(union)と交差型(intersection)
  type Knight = {
    hp: number;
    sp: number;
    weapon: string;
    swordSkill: string;
  };

  type Wizard = {
    hp: number;
    mp: number;
    weapon: string;
    magicSkill: string;
  };
  // 合併型...KnightまたはWizardの型を持ちます
  type Adventurer = Knight | Wizard;

  // 交差型...KnightかつWizardの型を持ちます
  type Paladin = Knight & Wizard;

  // Knight寄りの冒険者
  const adventurer1: Adventurer = {
    hp: 100,
    sp: 30,
    weapon: '木の剣',
    swordSkill: '三連切り',
  };
  const adventurer2: Adventurer = {
    hp: 100,
    mp: 30,
    weapon: '木の杖',
    magicSkill: 'ファイアボール',
  };
  console.log('Object Alias Sapmle 3:', adventurer1);
  console.log('Object Alias Sapmle 4:', adventurer2);

  const paladin: Paladin = {
    hp: 300,
    mp: 100,
    sp: 100,
    weapon: '鋼の杖',
    swordSkill: '三連切り',
    magicSkill: 'ファイアボール',
  };
  console.log('Object Alias Sapmle 5:', paladin);
}
