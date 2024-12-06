```javascript
import React, { useEffect, useState } from 'react';
import { Dimensions, View, Text } from 'react-native';

const DimensionsBugSolution = () => {
  const [screenDimensions, setScreenDimensions] = useState(null);

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window, screen }) => {
      setScreenDimensions({ window, screen });
    });
    // Get initial dimensions
    setScreenDimensions({ window: Dimensions.get('window'), screen: Dimensions.get('screen')})
    return () => subscription.remove();
  }, []);

  if (!screenDimensions) {
    return <Text>Loading dimensions...</Text>;
  }

  return (
    <View>
      <Text>Window width: {screenDimensions.window.width}</Text>
      <Text>Window height: {screenDimensions.window.height}</Text>
      <Text>Screen width: {screenDimensions.screen.width}</Text>
      <Text>Screen height: {screenDimensions.screen.height}</Text>
    </View>
  );
};

export default DimensionsBugSolution;
```