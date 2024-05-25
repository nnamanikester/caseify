export class Clipboard {
  static copy(text: string) {
    navigator.clipboard.writeText(text);
  }

  static async getText() {
    return await navigator.clipboard.readText();
  }
}
