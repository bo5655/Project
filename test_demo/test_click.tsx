import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import App from './App'; // 确保路径正确

describe('App', () => {
  it('should simulate user clicking on an image and closing the preview 1000 times', () => {
    const { getAllByTestId, getByTestId } = render(<App />);

    const imageList = getAllByTestId('image-list-item'); // 假设你的ImageList组件中的每个图片都有一个testID="image-list-item"
    const closeButton = getByTestId('close-button'); // 假设你的关闭按钮有一个testID="close-button"

    for (let i = 0; i < 1000; i++) {
      // 点击图片
      fireEvent.press(imageList[0]);

      // 点击关闭按钮
      fireEvent.press(closeButton);
    }
  });
});

//npm install --save-dev @testing-library/react-native
//npm test