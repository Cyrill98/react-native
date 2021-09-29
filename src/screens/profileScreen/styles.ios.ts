import { StyleSheet } from "react-native";
import defaultStyles from "../../globalstyles/defaultStyles";

const styles = StyleSheet.create ({
  root: {
    backgroundColor: defaultStyles.color.backgroundOverlay,
    height: '100%',
  },
  itemContainer: {
    padding: 0,
    paddingTop: 8,
    height: 422,
    backgroundColor: defaultStyles.color.backgroundLight,
    borderTopStartRadius: 20,
    borderTopRightRadius: 20,
}
})

export default styles