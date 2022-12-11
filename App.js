import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import React from 'react';

const App = () => {
  const [number, setNumber] = React.useState(0);
  const [result, getResult] = React.useState(0);
  const [tmp, setTmp] = React.useState(0);
  const [op, setOp] = React.useState('');

  function NumpadButton(props) {
    return (
      <TouchableOpacity
        style={styles.numpadButton}
        onPress={() => {
          if (props.num >= 0) {
            return setNumber(number * 10 + props.num);
          } else {
            return Calculate(props);
          }
        }}>
        <Text style={styles.TextButton}>{props.title}</Text>
      </TouchableOpacity>
    );
  }

  function saveToTmp(props) {
    setTmp(number);
    setNumber(0);
    setOp(props.title);
  }

  function Calculate(props) {
    let tmpOp = '';
    if (props.title == 'C') {
      setNumber(0);
      getResult(0);
      setTmp(0);
      setOp('');
    }

    if (op != '' && op != 'C' && props.title != '=') {
      tmpOp = props.title;
      props.title = op;
    }
    switch (props.title) {
      case '+':
        if (tmp == 0) {
          saveToTmp(props);
        } else {
          getResult(tmp + number);
          setTmp(tmp + number);
          setOp(tmpOp);
          setNumber(0);
        }
        break;

      case '-':
        if (tmp == 0) {
          saveToTmp(props);
        } else {
          getResult(tmp - number);
          setTmp(tmp - number);
          setOp(tmpOp);
          setNumber(0);
        }
        break;

      case '*':
        if (tmp == 0) {
          saveToTmp(props);
        } else {
          getResult(tmp * number);
          setTmp(tmp * number);
          setOp(tmpOp);
          setNumber(0);
        }
        break;

      case '/':
        if (tmp == 0) {
          saveToTmp(props);
        } else {
          getResult(tmp / number);
          setTmp(tmp / number);
          setOp(tmpOp);
          setNumber(0);
        }
        break;

      case '=':
        switch (op) {
          case '+':
            getResult(tmp + number);
            break;
          case '-':
            getResult(tmp - number);
            break;
          case '*':
            getResult(tmp * number);
            break;
          case '/':
            getResult(tmp / number);
            break;
        }
        setOp('');
        setTmp(0);
        setNumber(0);
        break;

      default:
        console.log(props.title);
        break;
    }
  }

  return (
    <View style={styles.layout}>
      <View style={styles.Screen}>
        <TouchableHighlight>
          <View style={styles.numberInput}>
            <Text style={{textAlign: 'right'}}>{number}</Text>
          </View>
        </TouchableHighlight>
        <View>
          <Text style={{textAlign: 'right'}}>Result: {result}</Text>
          {/* <Text style={{textAlign: 'right'}}>Tmp: {tmp} </Text>
          <Text style={{textAlign: 'right'}}>Op: {op}</Text> */}
        </View>
      </View>
      <View style={styles.numpadCol}>
        <View style={styles.numpadRow}>
          <NumpadButton title="1" num={1} />
          <NumpadButton title="2" num={2} />
          <NumpadButton title="3" num={3} />
          <NumpadButton title="+" />
        </View>
        <View style={styles.numpadRow}>
          <NumpadButton title="4" num={4} />
          <NumpadButton title="5" num={5} />
          <NumpadButton title="6" num={6} />
          <NumpadButton title="-" />
        </View>
        <View style={styles.numpadRow}>
          <NumpadButton title="7" num={7} />
          <NumpadButton title="8" num={8} />
          <NumpadButton title="9" num={9} />
          <NumpadButton title="*" />
        </View>
        <View style={styles.numpadRow}>
          <NumpadButton title="C" />
          <NumpadButton title="0" num={0} />
          <NumpadButton title="=" />
          <NumpadButton title="/" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: 'space-evenly',
    paddingHorizontal: 30,
    marginVertical: 50,
  },
  Screen: {
    height: '40%',
    justifyContent: 'center',
    marginBottom: 50,
    borderRadius: 15,
  },
  numpadCol: {
    justifyContent: 'space-evenly',
    backgroundColor: '#D2D2D2',
    borderRadius: 15,
    height: '50%',
  },
  numpadRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  numpadButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2196F3',
    borderRadius: 40,
    height: 70,
    width: 70,
  },
  numberInput: {
    backgroundColor: '#D2D2D2',
    padding: 10,
    marginBottom: 50,
  },
  TextButton: {
    color: '#ffffff',
    fontSize: 20,
  },
});

export default App;
