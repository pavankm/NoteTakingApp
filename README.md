# Note taking app

> [!NOTE]
>
> 1. This is a work in progress.
> 2. The contents of this readme, the design and implementation may change over time.
> 3. I am learning - about everything, so the code, readme, designs, and anything else in this repo may not be perfect.
> 4. If you have any suggestions, please feel free to open an issue or a pull request.

## Motivation

I use GoodNotes 5 on my iPad to take notes. But when GoodNotes 6 was released, it was announced that the "pay for lifetime" option was removed, and GoodNotes 5 would be removed from the App Store. The decision was ultimately reversed, but it made me realize that I should not rely on proprietary software.

I want to create a note-taking app that is open source, cross-platform, and has a good user interface.

> Free software is a matter of liberty, not price
>
> "Free" as in "free speech", not as in "free beer".
>
> -- https://www.fsf.org/about/

## Principles

These are the things I want to keep in mind while designing the app:

- Open Source: The app should be open source, so that anyone can contribute to it and use it for free.
  This also means that that people should be able to modify the code, distribute it, and run it on their own devices.
- Cross-Platform: The app should be available on all platforms, including iOS, Android, and the web.
- Borrowed from the Art of Unix Programming: The app should be simple, elegant, and easy to use. It should not have any unnecessary features or complexity.
  - Rule of Modularity: Write simple parts connected by clean interfaces.
  - Rule of Composition: Design programs to be connected to other programs.
  - Rule of Parsimony: Write a big program only when it is clear by demonstration that nothing else will do.

---

The technical stuff

---

## Project Structure

app: Main application code, organized with layouts and tabs for navigation.
assets: Contains fonts and images used in the app.
components: Reusable UI components (e.g., Collapsible, ThemedText, ParallaxScrollView, etc.).
constants: App-wide constants (e.g., Colors).
hooks: Custom React hooks for theming and color schemes.
scripts: Utility scripts (e.g., reset-project.js).
Config files: package.json, tsconfig.json, app.json, etc.

## Package.json

| Package(s)                                                                                                   | Purpose                                                                                   |
| ------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------- |
| expo, expo-router                                                                                            | Framework for building React Native apps, with file-based routing                         |
| react, react-dom, react-native, react-native-web                                                             | Core React and React Native libraries for cross-platform development                      |
| @react-navigation/native, @react-navigation/bottom-tabs, @react-navigation/stack                             | Navigation solutions for React Native apps                                                |
| @expo/vector-icons                                                                                           | Icon library                                                                              |
| expo-blur, expo-haptics, expo-status-bar, expo-splash-screen, expo-system-ui, expo-web-browser, expo-symbols | Expo modules for UI effects, haptics, splash screens, system UI, web browser, and symbols |
| expo-font                                                                                                    | Font loading                                                                              |
| expo-constants                                                                                               | Access to app constants                                                                   |
| @react-native-async-storage/async-storage                                                                    | Persistent key-value storage                                                              |
| react-native-gesture-handler                                                                                 | Gesture handling                                                                          |
| react-native-reanimated                                                                                      | Advanced animations                                                                       |
| react-native-safe-area-context                                                                               | Handling safe areas on devices                                                            |
| react-native-screens                                                                                         | Native navigation screens                                                                 |
| react-native-webview                                                                                         | Embedding web content                                                                     |
| metro                                                                                                        | JavaScript bundler for React Native                                                       |
| jest, jest-expo, @types/jest, react-test-renderer, @types/react-test-renderer                                | Testing tools                                                                             |
| typescript, @types/react                                                                                     |

# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
