import React from "react"
import { View, Image, ImageBackground } from "react-native"
import {
  withStyles,
  Text,
  Button,
  CheckBox,
  Radio,
  Toggle,
  Icon,
  Input,
  Datepicker
} from "react-native-ui-kitten"
import Slider from "@react-native-community/slider"

export class _Blank extends React.Component {
  static navigationOptions = {
    title: "Blank".toUpperCase()
  }

  state = {
    Input_3: "",
    Datepicker_35: new Date("06/24/2020"),
    Input_29: "",
    Input_33: ""
  }

  render = () => (
    <View
      style={{
        width: "100%",
        height: "100%",
        marginLeft: "0pt",
        marginRight: "0pt",
        marginTop: "0pt",
        marginBottom: "0pt",
        paddingLeft: "0pt",
        paddingRight: "0pt",
        paddingTop: "0pt",
        paddingBottom: "0pt",
        overflow: "visible",
        textAlign: "left",
        verticalAlign: "baseline",
        fontSize: "20pt",
        color: "#000000",
        backgroundColor: "#ffffff",
        fontStyle: "normal",
        fontWeight: "normal",
        fontFamily: "System",
        flexDirection: "column",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        alignItems: "stretch",
        alignContent: "stretch",
        borderColor: "#000000",
        borderStyle: "solid",
        borderWidth: "0pt",
        borderLeftWidth: "0pt",
        borderRightWidth: "0pt",
        borderTopWidth: "0pt",
        borderBottomWidth: "0pt",
        borderRadius: "0pt",
        backgroundSize: "auto"
      }}
    >
      <View
        style={{
          width: "100%",
          height: "100%",
          marginLeft: "0pt",
          marginRight: "0pt",
          marginTop: "0pt",
          marginBottom: "0pt",
          paddingLeft: "0pt",
          paddingRight: "0pt",
          paddingTop: "0pt",
          paddingBottom: "0pt",
          overflow: "visible",
          textAlign: "left",
          verticalAlign: "baseline",
          fontSize: "20pt",
          color: "#000000",
          backgroundColor: "#ffffff",
          fontStyle: "normal",
          fontWeight: "normal",
          fontFamily: "System",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "flex-start",
          alignItems: "stretch",
          alignContent: "stretch",
          borderColor: "#000000",
          borderStyle: "solid",
          borderWidth: "0pt",
          borderLeftWidth: "0pt",
          borderRightWidth: "0pt",
          borderTopWidth: "0pt",
          borderBottomWidth: "0pt",
          borderRadius: "0pt",
          backgroundSize: "auto"
        }}
      >
        <View
          style={{
            width: "50%",
            height: "100%",
            marginLeft: "0pt",
            marginRight: "0pt",
            marginTop: "0pt",
            marginBottom: "0pt",
            paddingLeft: "0pt",
            paddingRight: "0pt",
            paddingTop: "0pt",
            paddingBottom: "0pt",
            overflow: "visible",
            textAlign: "left",
            verticalAlign: "baseline",
            fontSize: "20pt",
            color: "#000000",
            backgroundColor: "#ffffff",
            fontStyle: "normal",
            fontWeight: "normal",
            fontFamily: "System",
            flexDirection: "column",
            flexWrap: "wrap",
            justifyContent: "flex-start",
            alignItems: "stretch",
            alignContent: "stretch",
            borderColor: "#000000",
            borderStyle: "solid",
            borderWidth: "0pt",
            borderLeftWidth: "0pt",
            borderRightWidth: "0pt",
            borderTopWidth: "0pt",
            borderBottomWidth: "0pt",
            borderRadius: "0pt",
            backgroundSize: "auto"
          }}
        >
          <Icon
            iconFont="Eva Design Icons"
            name="github"
            width={20}
            height={20}
            style={{
              marginLeft: "0pt",
              marginRight: "0pt",
              marginTop: "5pt",
              marginBottom: "5pt",
              paddingLeft: "5pt",
              paddingRight: "5pt",
              paddingTop: "5pt",
              paddingBottom: "5pt",
              overflow: "visible",
              textAlign: "left",
              verticalAlign: "baseline",
              borderColor: "#000000",
              borderStyle: "solid",
              borderWidth: "0pt",
              borderLeftWidth: "0pt",
              borderRightWidth: "0pt",
              borderTopWidth: "0pt",
              borderBottomWidth: "0pt",
              borderRadius: "0pt",
              fontSize: "20pt",
              color: "#000000",
              backgroundColor: "#ffffff",
              fontStyle: "normal",
              fontWeight: "normal",
              fontFamily: "System"
            }}
          />
          <Button
            style={{
              width: "50%",
              marginLeft: "0pt",
              marginRight: "0pt",
              marginTop: "5pt",
              marginBottom: "5pt",
              paddingLeft: "5pt",
              paddingRight: "5pt",
              paddingTop: "5pt",
              paddingBottom: "5pt",
              overflow: "visible",
              verticalAlign: "baseline",
              fontSize: "20pt",
              color: "#000000",
              backgroundColor: "#336600",
              fontStyle: "normal",
              fontWeight: "normal",
              fontFamily: "System",
              borderColor: "#000000",
              borderStyle: "solid",
              borderWidth: "0pt",
              borderLeftWidth: "0pt",
              borderRightWidth: "0pt",
              borderTopWidth: "0pt",
              borderBottomWidth: "0pt",
              borderRadius: "0pt"
            }}
            onPress={() => alert("Pressed!")}
          >
            Press me!
          </Button>
          <Input
            placeholder="Sample Number Input Placeholder"
            editable={true}
            keyboardType="numeric"
            style={{
              width: "100%",
              marginLeft: "0pt",
              marginRight: "0pt",
              marginTop: "5pt",
              marginBottom: "5pt",
              paddingLeft: "5pt",
              paddingRight: "5pt",
              paddingTop: "5pt",
              paddingBottom: "5pt",
              overflow: "visible",
              textAlign: "left",
              verticalAlign: "baseline",
              fontSize: "20pt",
              color: "#000000",
              backgroundColor: "#ffffff",
              fontStyle: "normal",
              fontWeight: "normal",
              fontFamily: "System",
              borderColor: "#000000",
              borderStyle: "solid",
              borderWidth: "0pt",
              borderLeftWidth: "0pt",
              borderRightWidth: "0pt",
              borderTopWidth: "0pt",
              borderBottomWidth: "0pt",
              borderRadius: "0pt"
            }}
            value={this.state.Input_3}
            onChangeText={nextValue => this.setState({ Input_3: nextValue })}
          />
          <Datepicker
            style={{
              width: "100%",
              marginLeft: "0pt",
              marginRight: "0pt",
              marginTop: "5pt",
              marginBottom: "5pt",
              paddingLeft: "5pt",
              paddingRight: "5pt",
              paddingTop: "5pt",
              paddingBottom: "5pt",
              overflow: "visible",
              textAlign: "left",
              verticalAlign: "baseline",
              fontSize: "20pt",
              color: "#000000",
              backgroundColor: "#ffffff",
              fontStyle: "normal",
              fontWeight: "normal",
              fontFamily: "System",
              borderColor: "#000000",
              borderStyle: "solid",
              borderWidth: "0pt",
              borderLeftWidth: "0pt",
              borderRightWidth: "0pt",
              borderTopWidth: "0pt",
              borderBottomWidth: "0pt",
              borderRadius: "0pt"
            }}
            date={this.state.Datepicker_35}
            onSelect={nextValue => this.setState({ Datepicker_35: nextValue })}
          />
        </View>
        <View
          style={{
            width: "50%",
            height: "100%",
            marginLeft: "0pt",
            marginRight: "0pt",
            marginTop: "0pt",
            marginBottom: "0pt",
            paddingLeft: "0pt",
            paddingRight: "0pt",
            paddingTop: "0pt",
            paddingBottom: "0pt",
            overflow: "visible",
            textAlign: "left",
            verticalAlign: "baseline",
            fontSize: "20pt",
            color: "#000000",
            backgroundColor: "#ffffff",
            fontStyle: "normal",
            fontWeight: "normal",
            fontFamily: "System",
            flexDirection: "column",
            flexWrap: "wrap",
            justifyContent: "flex-start",
            alignItems: "stretch",
            alignContent: "stretch",
            borderColor: "#000000",
            borderStyle: "solid",
            borderWidth: "0pt",
            borderLeftWidth: "0pt",
            borderRightWidth: "0pt",
            borderTopWidth: "0pt",
            borderBottomWidth: "0pt",
            borderRadius: "0pt",
            backgroundSize: "auto"
          }}
        >
          <Icon
            iconFont="Eva Design Icons"
            name="twitter"
            width={20}
            height={20}
            style={{
              marginLeft: "0pt",
              marginRight: "0pt",
              marginTop: "5pt",
              marginBottom: "5pt",
              paddingLeft: "5pt",
              paddingRight: "5pt",
              paddingTop: "5pt",
              paddingBottom: "5pt",
              overflow: "visible",
              textAlign: "left",
              verticalAlign: "baseline",
              borderColor: "#000000",
              borderStyle: "solid",
              borderWidth: "0pt",
              borderLeftWidth: "0pt",
              borderRightWidth: "0pt",
              borderTopWidth: "0pt",
              borderBottomWidth: "0pt",
              borderRadius: "0pt",
              fontSize: "20pt",
              color: "#000000",
              backgroundColor: "#ffffff",
              fontStyle: "normal",
              fontWeight: "normal",
              fontFamily: "System"
            }}
          />
          <Image
            resizeMode="cover"
            style={{
              width: "100%",
              marginLeft: "0pt",
              marginRight: "0pt",
              marginTop: "0pt",
              marginBottom: "0pt",
              paddingLeft: "0pt",
              paddingRight: "0pt",
              paddingTop: "0pt",
              paddingBottom: "0pt",
              overflow: "visible",
              textAlign: "left",
              verticalAlign: "baseline",
              borderColor: "#000000",
              borderStyle: "solid",
              borderWidth: "0pt",
              borderLeftWidth: "0pt",
              borderRightWidth: "0pt",
              borderTopWidth: "0pt",
              borderBottomWidth: "0pt",
              borderRadius: "0pt",
              fontFamily: "System"
            }}
          />
          <Input
            placeholder="Sample text input placeholder"
            editable={true}
            style={{
              width: "100%",
              marginLeft: "0pt",
              marginRight: "0pt",
              marginTop: "5pt",
              marginBottom: "5pt",
              paddingLeft: "5pt",
              paddingRight: "5pt",
              paddingTop: "5pt",
              paddingBottom: "5pt",
              overflow: "visible",
              textAlign: "left",
              verticalAlign: "baseline",
              fontSize: "30pt",
              color: "#0000ff",
              backgroundColor: "#ffff00",
              fontStyle: "normal",
              fontWeight: "normal",
              fontFamily: "System",
              borderColor: "#000000",
              borderStyle: "solid",
              borderWidth: "0pt",
              borderLeftWidth: "0pt",
              borderRightWidth: "0pt",
              borderTopWidth: "0pt",
              borderBottomWidth: "0pt",
              borderRadius: "0pt"
            }}
            value={this.state.Input_29}
            onChangeText={nextValue => this.setState({ Input_29: nextValue })}
          />
          <Input
            placeholder="Sample text input placeholder"
            editable={true}
            style={{
              width: "100%",
              marginLeft: "0pt",
              marginRight: "0pt",
              marginTop: "5pt",
              marginBottom: "5pt",
              paddingLeft: "5pt",
              paddingRight: "5pt",
              paddingTop: "5pt",
              paddingBottom: "5pt",
              overflow: "visible",
              textAlign: "left",
              verticalAlign: "baseline",
              fontSize: "20pt",
              color: "#000000",
              backgroundColor: "#ffffff",
              fontStyle: "normal",
              fontWeight: "normal",
              fontFamily: "System",
              borderColor: "#000000",
              borderStyle: "solid",
              borderWidth: "0pt",
              borderLeftWidth: "0pt",
              borderRightWidth: "0pt",
              borderTopWidth: "0pt",
              borderBottomWidth: "0pt",
              borderRadius: "0pt"
            }}
            value={this.state.Input_33}
            onChangeText={nextValue => this.setState({ Input_33: nextValue })}
          />
        </View>
      </View>
    </View>
  )
}

export default Blank = withStyles(_Blank, theme => ({
  container: {
    backgroundColor: theme["color-basic-100"]
  }
}))
