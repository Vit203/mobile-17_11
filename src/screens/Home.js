import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function Home({navigation}) {
    return (
        <View style={{
            flex: 1,
            backgroundColor: 'white'
        }}>
            <View style={{
                flexDirection: 'row',
                marginTop: 60,
                justifyContent: 'space-between',
                margin: 20
            }}>
                <Image
                    style={styles.tinyLogo}
                    source={require('../img/user.png')}
                />
                <Image
                    style={styles.tinyLogo}
                    source={require('../img/avatar.png')}
                />
            </View>
            <Text style={{
                marginLeft: 20,
                fontSize: 20,
                fontWeight: '500',
                marginBottom: 50
            }}>
                Your Insights
            </Text>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-around'
            }}>
                <TouchableOpacity onPress={() => navigation.navigate('Scan')}>
                    <View style={{
                        alignItems: 'center',
                        backgroundColor: '#F8F8FB',
                        padding: 20,
                        borderRadius: 10,
                        width: 150,
                    }}>
                        <View style={{
                            backgroundColor: '#DBDAF7',
                            width: 50,
                            height: 50,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 10
                        }}>
                            <Image
                                style={styles.tinyLogo}
                                source={require('../img/scan.png')}
                            />
                        </View>
                        <Text style={{
                            fontWeight: '500',
                            fontSize: 16
                        }}>
                            Scan new
                        </Text>
                        <Text style={{
                            fontWeight: '500',
                            color: '#B7B7C1',
                            fontSize: 12
                        }}>
                            Scanned 483
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={{
                        alignItems: 'center',
                        backgroundColor: '#F8F8FB',
                        padding: 20,
                        borderRadius: 10,
                        width: 150
                    }}>
                        <View style={{
                            backgroundColor: '#F6E3DB',
                            width: 50,
                            height: 50,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 10
                        }}>
                            <Image
                                style={styles.tinyLogo}
                                source={require('../img/wan.png')}
                            />
                        </View>
                        <Text style={{
                            fontWeight: '500',
                            fontSize: 16
                        }}>
                            Counterfeits
                        </Text>
                        <Text style={{
                            fontWeight: '500',
                            color: '#B7B7C1',
                            fontSize: 12
                        }}>
                            Counterfeited 32
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                marginTop: 20
            }}>
                <TouchableOpacity>
                    <View style={{
                        alignItems: 'center',
                        backgroundColor: '#F8F8FB',
                        padding: 20,
                        borderRadius: 10,
                        width: 150,
                    }}>
                        <View style={{
                            backgroundColor: '#D8F3F1',
                            width: 50,
                            height: 50,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 10
                        }}>
                            <Image
                                style={styles.tinyLogo}
                                source={require('../img/ok.png')}
                            />
                        </View>
                        <Text style={{
                            fontWeight: '500',
                            fontSize: 16
                        }}>
                            Success
                        </Text>
                        <Text style={{
                            fontWeight: '500',
                            color: '#B7B7C1',
                            fontSize: 12
                        }}>
                            Checkouts 8
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={{
                        alignItems: 'center',
                        backgroundColor: '#F8F8FB',
                        padding: 20,
                        borderRadius: 10,
                        width: 150
                    }}>
                        <View style={{
                            backgroundColor: '#D0EDFB',
                            width: 50,
                            height: 50,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 10
                        }}>
                            <Image
                                style={styles.tinyLogo}
                                source={require('../img/lich.png')}
                            />
                        </View>
                        <Text style={{
                            fontWeight: '500',
                            fontSize: 16
                        }}>
                            Directory
                        </Text>
                        <Text style={{
                            fontWeight: '500',
                            color: '#B7B7C1',
                            fontSize: 12
                        }}>
                            History 26
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                margin: 20
            }}>
                <Text style={{
                    fontWeight: '500',
                    fontSize: 20,
                }}>
                    Explore More
                </Text>
                <TouchableOpacity>
                    <Image
                        style={styles.tinyLogo}
                        source={require('../img/Arrow.png')}
                    />
                </TouchableOpacity>
            </View>

            <ScrollView>
                <ScrollView horizontal={true}>
                    <View style={{
                        flexDirection: 'row',
                    }}>
                        <TouchableOpacity>
                            <Image
                                style={styles.products}
                                source={require('../img/products/1.jpg')}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image
                                style={styles.products}
                                source={require('../img/products/2.jpg')}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image
                                style={styles.products}
                                source={require('../img/products/3.jpg')}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image
                                style={styles.products}
                                source={require('../img/products/4.jpg')}
                            />
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    products: {
        borderRadius: 10,
        margin: 20
    }
})