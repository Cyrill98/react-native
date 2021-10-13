import { StyleSheet } from "react-native";
import color from "../../../constants/color";

const styles = StyleSheet.create ({
  root: {
    backgroundColor: color.backgroundOverlay,
    height: '100%',
  },
  itemContainer: {
    padding: 0,
    paddingTop: 8,
    height: '100%',
    backgroundColor: color.backgroundLight,
    borderTopStartRadius: 20,
    borderTopRightRadius: 20,
}
})

export default styles