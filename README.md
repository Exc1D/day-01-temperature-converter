# Temperature Converter 🌡️

**Day 1 of my 100-Day JavaScript Challenge**

A dynamic temperature conversion tool that changes theme based on the temperature range!

## 🎨 Features

- ✅ Convert between Celsius, Fahrenheit, and Kelvin
- 🌡️ **Dynamic theming** - App changes colors based on temperature:
  - 🔵 Blue theme for cold (≤10°C)
  - 🟢 Green theme for comfortable (11-29°C)
  - 🟠 Orange theme for warm (30-39°C)
  - 🔴 Red theme for hot (>40°C)
- ✨ Input validation with error messages
- 🔄 Reset button to clear all fields
- 📱 Fully responsive design
- 🎯 Clean, modern UI with smooth transitions

## 🛠️ Technologies Used

- HTML5
- CSS3 (Custom Properties, Flexbox, Gradients)
- Vanilla JavaScript (DOM manipulation, Event listeners)

## 💡 What I Learned

- Working with CSS custom properties and manipulating them via JavaScript
- Switch statements for cleaner conditional logic
- Proper form handling (preventing default submit behavior)
- Input validation and error handling
- Converting between multiple temperature scales using Celsius as intermediate format
- Case sensitivity in JavaScript (learned the hard way with `.Value` vs `.value`!)
- Adding floating label effects

## 🐛 Bugs I Squashed

1. **DOM element values** - Learned to use `.value` to extract input data
2. **Case sensitivity** - Fixed `input.Value` → `input.value`
3. **Vanishing results** - Changed button type from "submit" to "button"
4. **Syntax errors** - Practiced proper use of `{}` and `;`

## 🚀 Live Demo

[View Live Project](https://exc1d.github.io/day-01-temperature-converter/)

## 📸 Screenshots
🟢 Green theme for comfortable (11-29°C)

![Neutral color](https://imgur.com/uz4gKbG)

🔵 Blue theme for cold (≤10°C)

![Cool theme](https://imgur.com/uBxCIro)

🟠 Orange theme for warm (30-39°C)

![Warm theme](https://imgur.com/jgFjhCh)

🔴 Red theme for hot (>40°C)
![Hot theme](https://imgur.com/BtnLKBX)

## 🎯 Conversion Formulas

- **C to F:** `(C × 9/5) + 32`
- **F to C:** `(F - 32) × 5/9`
- **C to K:** `C + 273.15`
- **K to C:** `K - 273.15`
- **F to K:** `(F - 32) × 5/9 + 273.15`
- **K to F:** `(K - 273.15) × 9/5 + 32`

## 👨‍💻 Development Process

**Time spent:** ~3 hours
**Approach:** Mobile-first, feature-driven development

Built with ❤️ on Day 1 of my journey to becoming a Full Stack Developer!

---

**For Joy, Hero,Aiah, and Aria** 🐕💙
