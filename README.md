# 📱 Code-With-React-Native 🚀

This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

---

## 📌 About This Repository

Welcome to **Code-With-React-Native**, a structured repository documenting my React Native journey — from environment setup to app development.

🎥 **Course Followed**: [React Native Mastery: Develop 10 Apps With Confidence](https://youtu.be/kGtEax1WQFg?si=FUApkKlAI_QWQMAk)  
👨‍🏫 **Instructor**: Hitesh Choudhary

---

## 🔧 Prerequisites

Before you begin, make sure you’ve completed the [Set Up Your Environment](https://reactnative.dev/docs/environment-setup) guide.

Install:

- Node.js
- Java Development Kit (JDK)
- Android Studio (with SDK + emulator)
- ADB tools
- CocoaPods (for macOS/iOS development)

---

## 🚀 Creating a New React Native App (Recommended CLI)

```bash
npx @react-native-community/cli init MyApp
cd MyApp
```

> ✅ `npx react-native init` is deprecated. Use the Community CLI shown above.

---

## ⚡ Step 1: Start Metro Server

Metro is the JavaScript bundler for React Native.

```bash
npx react-native start
```

---

## ▶️ Step 2: Run Your App

### 📱 Android

Make sure your emulator is running or your device is connected with USB debugging enabled:

```bash
npx react-native run-android
```

### 🍎 iOS (macOS only)

> Install CocoaPods (only once or when native dependencies change):

```bash
bundle install
bundle exec pod install
```

Then run the app:

```bash
npx react-native run-ios
```

---

## 🛠️ Useful CLI Commands

### Check Java & ADB Versions

```bash
java --version
adb --version
```

### Manage Emulator / Device

```bash
adb devices
adb kill-server
adb start-server
```

---

## 🧪 Step 3: Modify Your App

Open the file:

```bash
App.tsx
```

Make edits and save to see live updates via [**Fast Refresh**](https://reactnative.dev/docs/fast-refresh).

### 🔁 Manual Reload

- **Android**: Press <kbd>R</kbd> twice or use <kbd>Ctrl</kbd> + <kbd>M</kbd> / <kbd>Cmd</kbd> + <kbd>M</kbd> for Dev Menu  
- **iOS**: Press <kbd>R</kbd> in Simulator

---

## 📂 Repository Structure

```plaintext
📁 Docs/         → Notes and setup guides
📁 Commands/     → Useful CLI commands
📁 Projects/     → All apps built during course
📁 Components/   → Reusable components library
```

---

## 📚 Learn More

- [React Native Docs](https://reactnative.dev/docs/getting-started) – Guided learning and API docs  
- [Environment Setup](https://reactnative.dev/docs/environment-setup) – Platform-specific setup  
- [Troubleshooting](https://reactnative.dev/docs/troubleshooting) – Fix common errors  
- [CocoaPods Guide](https://guides.cocoapods.org/using/getting-started.html) – iOS dependency manager  
- [React Native Blog](https://reactnative.dev/blog) – Official updates and news  

---

## 🥳 Congratulations!

You’ve successfully created, run, and modified your first React Native app! 🎉  
Now go ahead and build something amazing. 🚀

---

## 💡 Next Steps

- 🧭 Add navigation, camera, or animations  
- 🔄 Integrate Redux or Context API  
- 📦 Use native device APIs  
- 🚀 Deploy to Play Store / App Store  

---

> Made with ❤️ while learning React Native.