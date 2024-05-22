class Portfolio<T> {
  private items: T[];

  constructor() {
    this.items = [];
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getAllItems(): T[] {
    return this.items;
  }

  public sumNumericItems(): number {
    const numericItems: number[] = this.items.filter(item => typeof item === 'number') as number[];
    return numericItems.reduce((total, item) => total + item, 0);
  }

  public concatenateTextItems(): string {
    const textItems: string[] = this.items.filter(item => typeof item === 'string') as string[];
    return textItems.join('');
  }
}

export { Portfolio }