export class SimpleCipher {
  constructor(public readonly key: string = SimpleCipher.generateKey()) {}

  static generateKey(): string {
    return Array.from({ length: 100 })
      .map(() => String.fromCharCode(Math.random() * 26 | 0 + 97))
      .join('');
  }

  encode(message: string): string {
    return this.simpleCrypt(message);
  }

  decode(message: string): string {
    return this.simpleCrypt(message, false);
  }

  private simpleCrypt(message: string, encode: boolean = true): string {
    return message.split('').map((_, index) => {
      const shift = this.key.charCodeAt(index % this.key.length) - 97;
      const charCode = message.charCodeAt(index);
      const newCharCode = encode 
        ? ((charCode - 97 + shift) % 26) + 97
        : ((charCode - 97 - shift + 26) % 26) + 97;
      return String.fromCharCode(newCharCode)
    }).join('');
  }
}