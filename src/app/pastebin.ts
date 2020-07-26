export class Pastebin {
  id: number;
  title: string;
  language: string;
  paste: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}

// export interface Pastebin {
//   id: number;
//   title: string;
//   language: string;
//   paste: string;
// }


export const Languages = ['Ruby', 'Java', 'JavaScript', 'C', 'Cpp'];
