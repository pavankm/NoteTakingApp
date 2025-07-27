import { StyleSheet, Text, View } from 'react-native';

import type { ReactElement } from 'react';

export default function Index(): ReactElement {
  return (
    <View style={styles.container}>
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
