import React, { useState } from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';

const NestedScrollViewsDemo = () => {
  const [scrollOffsets, setScrollOffsets] = useState({
    scrollView1: 0,
    scrollView2: 0,
    scrollView3: 0,
  });

  const child1OnScroll = event => {
    console.log('child1 onScroll', event.nativeEvent.contentOffset.y);
  };

  const child2OnScroll = event => { 
    console.log('child2 onScroll', event.nativeEvent.contentOffset.y);
  };

  const child3OnScroll = event => {
    console.log('child3 onScroll', event.nativeEvent.contentOffset.y);
  };

  const parentOnScroll = event => {
    console.log('parent onScroll', event.nativeEvent.contentOffset.y);
  };

  const handleScroll = (event, scrollViewKey) => {
    setScrollOffsets(prevOffsets => ({
      ...prevOffsets,
      [scrollViewKey]: event.nativeEvent.contentOffset.y,
    }));
    console.log(scrollViewKey, event.nativeEvent.contentOffset.y);
  };

  return (
    <ScrollView style={styles.container}
    onScroll={parentOnScroll}>
      <Text style={styles.scrollOffsetText}>ScrollView 1 Offset: {scrollOffsets.scrollView1}</Text>
      <ScrollView
        style={styles.nestedScrollView}
        // onScroll={event => handleScroll(event, 'scrollView1')}
        onScroll={child1OnScroll}
        scrollEventThrottle={16}
      >
        <View style={styles.content} />
        <View style={styles.content} />
        <View style={styles.content} />
      </ScrollView>

      <Text style={styles.scrollOffsetText}>ScrollView 2 Offset: {scrollOffsets.scrollView2}</Text>
      <ScrollView
        style={styles.nestedScrollView}
        // onScroll={event => handleScroll(event, 'scrollView2')}
        onScroll={child2OnScroll}
        inverted={true}
        scrollEventThrottle={16}
      >
        <View style={styles.content} />
        <View style={styles.content} />
        <View style={styles.content} />
      </ScrollView>

      <Text style={styles.scrollOffsetText}>ScrollView 3 Offset: {scrollOffsets.scrollView3}</Text>
      <ScrollView
        style={styles.nestedScrollView}
        // onScroll={event => handleScroll(event, 'scrollView3')}
        onScroll={child3OnScroll}
        scrollEventThrottle={16}
      >
        <View style={styles.content} />
        <View style={styles.content} />
        <View style={styles.content} />
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  nestedScrollView: {
    margin: 20,
    borderWidth: 1,
    borderColor: 'gray',
  },
  scrollOffsetText: {
    fontSize: 16,
    margin: 10,
  },
  content: {
    height: 200,
    backgroundColor: '#f0f0f0',
    margin: 10,
    borderRadius: 10,
  },
});

export default NestedScrollViewsDemo;
