export class Transform {
  private text = "";
  private transformedText = "";

  constructor(text: string) {
    this.text = text;
  }

  getDefaultText() {
    return this.text;
  }

  getTransformedText() {
    return this.transformedText;
  }

  setText(text: string) {
    this.text = text;
  }

  toUpperCase() {
    const text = this.text.toUpperCase();
    this.transformedText = text;
    return text;
  }

  toLowerCase() {
    const text = this.text.toLowerCase();
    this.transformedText = text;
    return text;
  }

  toSentenceCase() {
    let text = this.toLowerCase();
    text = text.charAt(0).toUpperCase() + text.slice(1);
    this.transformedText = text;
    return text;
  }

  toCamelCase() {
    const text =
      this.toLowerCase().charAt(0).toLowerCase() + this.text.slice(1);
    this.transformedText = text;
    return text;
  }

  toTitleCase() {
    const text = this.toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    this.transformedText = text;
    return text;
  }

  toKebabCase() {
    const text = this.toLowerCase().split(" ").join("-");
    this.transformedText = text;
    return text;
  }

  toSnakeCase() {
    const text = this.toLowerCase().split(" ").join("_");
    this.transformedText = text;
    return text;
  }

  toScreamingSnakeCase() {
    const text = this.toLowerCase().split(" ").join("_").toUpperCase();
    this.transformedText = text;
    return text;
  }

  toScreamingKebabCase() {
    const text = this.toLowerCase().split(" ").join("-").toUpperCase();
    this.transformedText = text;
    return text;
  }
}
