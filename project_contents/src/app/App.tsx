import { RouterProvider } from 'react-router';
import { router } from './routes';
import { TextSizeProvider } from './contexts/TextSizeContext';

export default function App() {
  return (
    <TextSizeProvider>
      <RouterProvider router={router} />
    </TextSizeProvider>
  );
}
