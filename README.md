# I: React + TypeScript + Vite

Mẫu thu gọn của react js

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## 1: Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
# II: Work flow các chức năng
## 1: Sử dụng Redux toolkit quản lý các state
### Step 1: Cấu hình store, reducer và hook
Cấu hình tại: src\redux
- store.js tổng hợp các State và Reducer trong các slices giúp View thao tác dễ dàng hơn ( chỉ thông qua một hàm)
- Hook.ts đóng vai trò trung gian trong việc truyền các action đi và định nghĩa lại. Áp dụng cho redux toolkit ^9.1.2
### Step 2: Áp dụng Redux vào ứng dụng react
Thêm thẻ provider bọc toàn bộ App
```html
  <Provider store={store}>
   <App/>
  <Provider/>
```
### Step 3: Cấu hình các slice
Các slide sử đụng phương thức bất động bộ nên phải sử dụng phương thức createAsyncThunk() là một middleWare có vai trò chờ một request trước khi đưa vào store xử lý
### Step 4: View - Sử dụng Dispatch và lấy các trạng thái.

        
- Khai báo action 
   ```typescript
      dispatch(loginAction(loginData)) 
   ```
- Sử dụng dispatch
   ```typescript
   - import { useAppDispatch } from '../../redux/hook'
   - Khởi tạo 
      const dispatch = useAppDispatch()
   - Sử dụng 
      dispatch(loginAction(loginData))
   ```
### NOTE
   Lớp service dùng để gọi đến API bằng axios


