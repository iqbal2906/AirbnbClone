import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';

const Post = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri:
            'https://sgp1.digitaloceanspaces.com/tz-mag-id/wp-content/uploads/2019/12/040412120303/Penginapan-Murah-Instagrammable-Bandung-3-e1575649142727.png',
        }}
      />
      <Text style={styles.bedrooms}>1 bed 1 bedroom</Text>
      <Text style={styles.description} numberOfLines={2}>
        Dari tampak depan saja kita sudah akan melihat bahwa desain bangunannya
        sungguh menarik, walaupun ukurannya tidak terlalu luas. Penginapan ini
        cocok untuk pasangan yang berbulan madu atau berlibur bersama karena
        kamar yang tersedia hanya 1 saja dengan kapasitas maksimal 2 orang.
        Untuk fasilitas lainnya, di sini tersedia wifi, pengering rambut, dapur,
        sampo, dan masih banyak lagi.
      </Text>

      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>IDR400000</Text>
        <Text style={styles.price}> IDR200000</Text> / night
      </Text>

      <Text style={styles.totalPrice}>IDR1500000</Text>
    </View>
  );
};

export default Post;
