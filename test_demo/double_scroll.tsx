import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const App = () => {
  const [activeTab, setActiveTab] = useState(0); // 0 - 第一组, 1 - 第二组
  const tags = ['标签1', '标签2', '标签3', '标签4', '标签5'];

  // 两个不同的长列表
  const listOne = Array.from({ length: 30 }, (_, index) => `列表项 A${index + 1}`);
  const listTwo = Array.from({ length: 30 }, (_, index) => `列表项 B${index + 1}`);

  return (
    <ScrollView style={styles.outerScrollView} showsVerticalScrollIndicator={false}>
      {/* 上方内容 */}
      <View style={styles.introContainer}>
        <Text style={styles.introText}>
          此示例展示了外层和内层 ScrollView 的联动效果。
        </Text>
      </View>

      {/* 顶部标签容器 */}
      <View style={styles.tagContainer}>
        {tags.map((tag, index) => (
          <View key={index} style={styles.tag}>
            <Text style={styles.tagText}>{tag}</Text>
          </View>
        ))}
      </View>

      {/* Tab 标签 */}
      <View style={styles.tabContainer}>
        <TouchableOpacity style={[styles.tab, activeTab === 0 && styles.activeTab]} onPress={() => setActiveTab(0)}>
          <Text style={styles.tabText}>列表 A</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.tab, activeTab === 1 && styles.activeTab]} onPress={() => setActiveTab(1)}>
          <Text style={styles.tabText}>列表 B</Text>
        </TouchableOpacity>
      </View>

      {/* 内部长列表的 ScrollView */}
      <ScrollView style={styles.innerScrollView} showsVerticalScrollIndicator={false}>
        {(activeTab === 0 ? listOne : listTwo).map((item, index) => (
          <View key={index} style={styles.listItem}>
            <Text>{item}</Text>
          </View>
        ))}
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  outerScrollView: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  introContainer: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#e0f7fa',
    borderRadius: 5,
  },
  introText: {
    color: '#00796b',
    fontSize: 16,
  },
  tagContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  tag: {
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    marginRight: 10,
  },
  tagText: {
    color: '#333',
  },
  tabContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  tab: {
    padding: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    marginRight: 10,
  },
  activeTab: {
    backgroundColor: '#64b5f6',
  },
  tabText: {
    color: '#333',
  },
  innerScrollView: {
    flex: 1,
  },
  listItem: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});

export default App;
