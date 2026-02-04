import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Linking, TouchableOpacity } from 'react-native';

const MyProfileScreen = () => {
  
  // সোশ্যাল মিডিয়া লিংক ফাংশন
  const openLink = (url) => {
    Linking.openURL(url).catch((err) => console.error("লিংক ওপেন হচ্ছে না", err));
  };

  return (
    <ScrollView style={styles.container}>
      {/* টপ ব্যানার ও প্রোফাইল ইমেজ */}
      <View style={styles.header}>
        <View style={styles.imageOverlay}>
          <Image
            source={{ uri: 'https://via.placeholder.com/150' }} // এখানে আপনার ছবির সঠিক লিংক দিন
            style={styles.profileImage}
          />
        </View>
        <Text style={styles.name}>আপনার নাম এখানে</Text>
        <Text style={styles.subtitle}>উদ্যোক্তা ও ডিজিটাল সংগ্রাহক</Text>
      </View>

      {/* পরিচয় ও উদ্দেশ্য কার্ড */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>আমার সম্পর্কে</Text>
        <Text style={styles.bio}>
          বাঙালির শেকড় আর সংস্কৃতির সাথে আমার গভীর ভালোবাসা। খনার বচন কেবল কিছু কথা নয়, এটি আমাদের পূর্বপুরুষদের জীবন দর্শন ও বৈজ্ঞানিক অভিজ্ঞতার নির্যাস। আমি চাই এই অমূল্য জ্ঞানটি যেন বর্তমানের ডিজিটাল যুগে হারিয়ে না যায়।
        </Text>
        <Text style={styles.bio}>
          এই অ্যাপটি তৈরির মূল উদ্দেশ্য হলো—এক ক্লিকেই যেন বাংলাদেশের তরুণ প্রজন্ম এবং কৃষকরা আবহাওয়া, কৃষি এবং স্বাস্থ্যের এই প্রাচীন সমাধানগুলো সহজেই খুঁজে পান।
        </Text>
      </View>

      {/* সোশ্যাল মিডিয়া বাটন সেকশন */}
      <View style={styles.socialContainer}>
        <Text style={styles.socialTitle}>আমার সাথে যুক্ত হোন</Text>
        
        <View style={styles.buttonRow}>
          {/* ফেসবুক বাটন */}
          <TouchableOpacity 
            style={[styles.socialButton, {backgroundColor: '#1877F2'}]}
            onPress={() => openLink('https://facebook.com/yourprofile')}
          >
            <Text style={styles.buttonText}>ফেসবুক</Text>
          </TouchableOpacity>

          {/* ইউটিউব বাটন */}
          <TouchableOpacity 
            style={[styles.socialButton, {backgroundColor: '#FF0000'}]}
            onPress={() => openLink('https://youtube.com/yourchannel')}
          >
            <Text style={styles.buttonText}>ইউটিউব</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* ফুটারে উক্তি */}
      <View style={styles.footer}>
        <Text style={styles.quote}>"খনার বচন বাঙালির অমূল্য ধন,{"\n"}এটি রক্ষায় সচেষ্ট হোক আগামীর মন।"</Text>
        <Text style={styles.version}>App Version 1.0.0</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f0f4f7' },
  header: {
    backgroundColor: '#1b5e20',
    paddingVertical: 50,
    alignItems: 'center',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  profileImage: {
    width: 130,
    height: 130,
    borderRadius: 65,
    borderWidth: 5,
    borderColor: '#fff',
  },
  name: { fontSize: 26, fontWeight: 'bold', color: '#fff', marginTop: 10 },
  subtitle: { fontSize: 16, color: '#c8e6c9', marginBottom: 10 },
  card: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
    marginTop: -30,
    padding: 25,
    borderRadius: 20,
    elevation: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  cardTitle: { fontSize: 22, fontWeight: 'bold', color: '#1b5e20', marginBottom: 15 },
  bio: { fontSize: 16, color: '#444', lineHeight: 26, marginBottom: 15, textAlign: 'justify' },
  socialContainer: { padding: 30, alignItems: 'center' },
  socialTitle: { fontSize: 18, fontWeight: 'bold', color: '#333', marginBottom: 20 },
  buttonRow: { flexDirection: 'row', justifyContent: 'space-around', width: '100%' },
  socialButton: {
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 30,
    minWidth: 120,
    alignItems: 'center',
  },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  footer: { alignItems: 'center', padding: 30 },
  quote: { fontSize: 16, fontStyle: 'italic', color: '#1b5e20', textAlign: 'center', lineHeight: 24 },
  version: { fontSize: 12, color: '#aaa', marginTop: 15 },
});

export default MyProfileScreen;
