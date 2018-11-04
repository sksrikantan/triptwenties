import React from 'react';
import { View, StyleSheet } from 'react-native';

const TodoItemView = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({

  containerStyle: {
    // position: 'absolute',
    // borderWidth: 1,
    // borderRadius: 2,
    // borderColor: '#ddd',
    // borderBottomWidth: 0,
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.1,
    // shadowRadius: 2,
    // elevation: 1,
    // marginRight: 5,
    // marginLeft: 5,
    // marginTop: 0
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    marginBottom: 100
  }
});

export { TodoItemView };
