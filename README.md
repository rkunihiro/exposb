# Expo sandbox

## Initialize

```sh
npm init -y
npm install -D @expo/cli
npm install expo
npx expo install react react-dom react-native
npm install -D @types/react @types/react-dom @types/react-native typescript tsconfig-paths
```

tsconfig.json

```json
{
    "$schema": "https://json.schemastore.org/tsconfig",
    "extends": "./node_modules/expo/tsconfig.base.json",
    "compilerOptions": {
        "strict": true
    },
    "include": ["./src"]
}
```

edit package.json

```json
{
    ...
    "main": "src/main.ts",
    ...
}
```

src/main.ts

```ts
import { registerRootComponent } from "expo";

import { App } from "./app";

registerRootComponent(App);
```

src/app.tsx

```ts
import { Text, View } from "react-native";

export function App(): JSX.Element {
    return (
        <View>
            <Text>Hello,World!</Text>
        </View>
    );
}
```
