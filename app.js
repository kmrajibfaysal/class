class Color {
  constructor(r, g, b) {
    (this.r = r), (this.g = g), (this.b = b);
  }
  rgb() {
    const { r, g, b } = this;
    return `rgb(${r}, ${g}, ${b})`;
  }

  testing() {
    alert('Test Completed!');
  }
}

const c1 = new Color(211, 244, 243);
// console.log(c1);
