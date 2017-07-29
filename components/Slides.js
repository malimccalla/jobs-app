import React, { Component } from 'react';
import { Text, View, ScrollView, Dimensions, TouchableHighlight } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

class Slides extends Component {
  renderSlides() {
    return this.props.data.map((slide, index) => {
      return (
        <View
          style={styles.slideStyle}
          key={slide.text}
        >
          <Text style={styles.textStyle}>{slide.text}</Text>
        </View>
      );
    })
  }

  renderPageIndicators() {
    return (
      <View style={styles.pageIndicatorStyles}>
        {this.props.data.map((data, index) => {
          const backgroundColor = data.slideIndex === index ? '#ffffff' : '#e4e4e4';
          return (
            <View
              key={data.text}
              style={[styles.singleIndicatorStyles, { backgroundColor }]}
            />
          );
        })}
      </View>
    )
  }

  render() {
    return (
      <View style={styles.containerStyles}>
        <ScrollView
          ref={(e) => { this.scrollView = e; }}
          scrollEnabled
          horizontal
          style={{ flex: 1 }}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          >
            {this.renderSlides()}
          </ScrollView>
          {this.renderPageIndicators()}
      </View>
    );
  }
}

const styles = {
  containerStyles: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  slideStyle: {
    flex: 1,
    width: SCREEN_WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0089ee'
  },
  textStyle: {
    fontSize: 30,
    color: '#ffffff',
    fontWeight: '500'
  },
  pageIndicatorStyles: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 50,
  },
  singleIndicatorStyles: {
    height: 14,
    width: 14,
    borderRadius: 500,
    margin: 4,
    justifyContent: 'space-around',
    alignItems: 'center',
  }
}

export default Slides;
