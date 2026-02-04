import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Linking, TouchableOpacity } from 'react-native';

const AboutScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        {/* আপনার ছবি এখানে যুক্ত করুন */}
        <Image
          source={{ uri: 'https://your-image-url.com/profile.jpg' }} // আপনার ছবির লিংক এখানে দিন
          style={styles.profileImage}
        />
        <Text style={styles.name}>আপনার নাম এখানে</Text>
        <Text style={styles.title}>অ্যাপ ডেভেলপার ও সংগ্রাহক</Text>
      </View>

      <View style={styles.contentCard}>
        <Text style={styles.sectionTitle}>আমার কথা</Text>
        <Text style={styles.description}>
          আসসালামু আলাইকুম, আমি [আপনার নাম]। আমি বাঙালির হাজার বছরের ঐতিহ্য "খনার বচন" এবং গ্রামীণ প্রবাদগুলোকে ডিজিটাল প্ল্যাটফর্মে সংরক্ষণ করার চেষ্টা করছি। বর্তমান প্রজন্মের কাছে আমাদের শেকড়ের এই জ্ঞান পৌঁছে দেওয়াই আমার লক্ষ্য। 
          {"\n\n"}
          এই অ্যাপটিতে আমি ৫০০টিরও বেশি বচন সংগ্রহ করেছি যা আমাদের কৃষি, স্বাস্থ্য এবং আবহাওয়ার পূর্বাভাস বুঝতে সাহায্য করবে। আশা করি এই ক্ষুদ্র প্রচেষ্টা আপনাদের উপকারে আসবে।
        </Text>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>যোগাযোগ করুন:</Text>
        <TouchableOpacity onPress={() => Linking.openURL('mailto:your-email@example.com')}>
          <Text style={styles.email}>your-email@example.com</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  header: {
    backgroundColor: '#2e7d32', // সবুজ রঙের থিম (খনার বচনের সাথে মানানসই)
    padding: 40,
    alignItems: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: '#fff',
    marginBottom: 15,
  },
  name: { fontSize: 24, fontWeight: 'bold', color: '#fff' },
  title: { fontSize: 16, color: '#e8f5e9', marginTop: 5 },
  contentCard: {
    backgroundColor: '#fff',
    margin: 20,
    padding: 20,
    borderRadius: 15,
    elevation: 5, // শ্যাডো ইফেক্ট
  },
  sectionTitle: { fontSize: 20, fontWeight: 'bold', color: '#2e7d32', marginBottom: 10 },
  description: { fontSize: 16, color: '#444', lineHeight: 24, textAlign: 'justify' },
  footer: { alignItems: 'center', marginBottom: 30 },
  footerText: { fontSize: 14, color: '#888' },
  email: { fontSize: 16, color: '#2e7d32', fontWeight: 'bold', marginTop: 5 },
});

export default AboutScreen;
